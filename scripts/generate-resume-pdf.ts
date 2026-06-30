/**
 * Build-time résumé PDF generation.
 *
 * Renders the static /resume page (served by `astro preview`) to a PDF via
 * headless Chromium and writes it to public/resume.pdf (the path the site links
 * to) and dist/resume.pdf (so the just-built dist is consistent).
 *
 * Run AFTER `astro build`:  bun run resume:pdf
 *
 * The site is static and deploys to Vercel; Puppeteer is a devDependency and is
 * never invoked in CI — the committed public/resume.pdf is just copied on deploy.
 */
import { spawn, type ChildProcess } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const HOST = "127.0.0.1";
const PORT = 4329; // off the dev/preview 4321 default
const URL = `http://${HOST}:${PORT}/resume`;

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ASTRO_BIN = resolve(ROOT, "node_modules/.bin/astro");
const OUT_PUBLIC = resolve(ROOT, "public/resume.pdf");
const OUT_DIST = resolve(ROOT, "dist/resume.pdf");

// 1. Spawn `astro preview` as a detached group leader so we can kill the whole
//    process group on teardown (a plain .kill() can orphan Astro's node server).
const preview: ChildProcess = spawn(
  ASTRO_BIN,
  ["preview", "--host", HOST, "--port", String(PORT)],
  { cwd: ROOT, stdio: "inherit", detached: true },
);

function shutdown(): void {
  try {
    if (preview.pid) process.kill(-preview.pid, "SIGTERM");
  } catch {
    /* already gone */
  }
}
process.on("SIGINT", () => {
  shutdown();
  process.exit(1);
});

async function waitForServer(url: string, timeoutMs = 30_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.ok) return;
    } catch {
      /* server not up yet */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Preview server never became ready at ${url}`);
}

let browser: Awaited<ReturnType<typeof puppeteer.launch>> | undefined;
try {
  await waitForServer(URL);

  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1400, deviceScaleFactor: 2 });

  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60_000 });

  // Gate on real fonts (ProFont uses font-display: swap) and image decode.
  await page.evaluate(() => document.fonts.ready.then(() => true));
  await page.evaluate(async () => {
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.decode().catch(() => undefined),
      ),
    );
  });

  await page.emulateMediaType("print");

  // CSS @page owns size + margins (preferCSSPageSize); printBackground keeps the
  // dark ground (paired with print-color-adjust: exact in the page CSS).
  const pdf = await page.pdf({
    printBackground: true,
    preferCSSPageSize: true,
  });

  await writeFile(OUT_PUBLIC, pdf);
  await writeFile(OUT_DIST, pdf).catch(() => undefined); // dist optional
  console.log(`✓ Wrote ${OUT_PUBLIC} (${Math.round(pdf.length / 1024)} KB)`);
} finally {
  await browser?.close();
  shutdown();
}
