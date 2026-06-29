All M5 mappings verified byte-identical: `writequit-board-admin.webp` = `14-board-detail` (admin/build view), `writequit-client-board.webp` = `20-public-board-unlocked` (client view) — names are correct, not swapped. Pondera copies are all LIGHT variants. The in-repo `pitch/` path is the correct, buildable source. I have everything needed.

# FINAL COPY

## HERO

**Eyebrow (mono kicker):** SOFTWARE ENGINEER · FULL-STACK · END-TO-END OWNERSHIP

**Headline:** Hand me a problem. I'll hand back a working product.

**Subline:** I operate like an embedded product team of one — full-stack delivery, end-to-end ownership, minimal hand-offs. I've also led a team of five, so I know which problems are worth coordinating on.

**Primary CTA:** Start a conversation → fmunhozafonso@gmail.com

**Secondary CTA:** /resume.pdf — the full record

---

## HOW I WORK

Give me a vague problem and I'll come back with a shipped product. I take a thing end-to-end — design, build, deploy, and the parts no one volunteers for: auth, billing, the deploy pipeline — so it lands as one decision instead of five hand-offs. I'm comfortable across the whole stack and across languages, which means I pick the tool the problem wants, not the one I'm stuck with. I treat AI as a multiplier on delivery speed, not a gimmick — it's why the two products below, with auth, billing, real-time, AI extraction, and their own marketing sites, shipped from one pair of hands. And because I've led engineers, I know when to absorb a problem and when to pull people in.

---

## PROOF CASES

### TIER ONE / TWO PRODUCTS, ONE BUILDER

---

### 01 — writequit.dev
**Kicker:** TIER ONE / DEVELOPER TOOL, SHIPPED SOLO

**Problem:** Freelance developers juggle tasks, time, and invoices across three disconnected tools and lose the thread.

**What I built (solo, end-to-end):**
- `[*]` A full commercial SaaS — task manager, time tracker, and invoice generator — in one terminal-native tool with vim keybindings and markdown tasks.
- `[*]` Auth (WorkOS), invoice generation (jsPDF), real-time chat and shared client boards (Convex), password-gated permissioned sharing.
- `[*]` The product design, the opinionated UX, and the marketing voice — not just the code.
- `[*]` Stack: SvelteKit 5 + Convex + Tailwind 4, deployed on Vercel.

**Outcome:** ⬩ A complete, billable product — auth to invoice to live client collaboration — shipped end-to-end by one builder. [Felipe: add metric — e.g., active users / paying customers / time-to-first-invoice]

**Image captions:**
- *writequit-board* — The board freelancers live in: markdown tasks, running timer, status filters. "manage work, not a workspace."
- *writequit-time* — Time tracking with live running timers — part of the same tool, not a second app. "tasks. time. invoices."
- *writequit-invoice* — jsPDF invoice generation — billing built into the same tool, not bolted on. "spend less time managing. more time building."
- *writequit-board-admin* — Password-protected client boards with live chat (Convex) — permissioned sharing, real-time. "write. quit. ship."

**Status-bar strip (verbatim product voice):** a tool, not a lifestyle · write. quit. ship. · for developers who'd rather ship than organize

---

### 02 — pondera.casa
**Kicker:** TIER ONE / CONSUMER PRODUCT, SHIPPED SOLO

**Problem:** Choosing which property to buy or rent means drowning in tabs, listings, and gut feeling.

**What I built (solo, end-to-end):**
- An AI-native web app that turns a pasted listing URL into a structured decision: paste a URL and it scrapes the listing, then an LLM pulls price, area, and neighborhood into a strict schema — real extraction, not a chat box.
- AI curation of pros, cons, and watch-outs; AI side-by-side comparison; an AI ranking that explains each position in plain language.
- A full four-step product *and* its marketing site, shipped alone.

**Stack (mono metadata line):** Next.js 16 · React 19 · Convex · OpenRouter (gpt-4o-mini)

**Headline device (Fraunces, italic emphasis):** Escolha a casa certa — *sem se perder no meio do caminho.* (Choose the right house — without getting lost along the way.)

**Four-step spine (PT step name + English gloss, each paired with its plate):**
- **01 Cole** *(Paste)* — "Cole o link e o resto se preenche." Paste the link, the rest fills itself. *→ pondera-cole: AI-extracted price, area, neighborhood, plus a pros / contras / atenção card.*
- **02 Pontue** *(Score)* — "Dá uma nota honesta para cada imóvel." Give each property an honest score. *→ pondera-pontue: per-property ratings, favorites, and portfolio stats at a glance.*
- **03 Compare** *(Compare)* — "Veja os imóveis lado a lado, sem achismo." See properties side by side, no guesswork. *→ pondera-compare: the comparison table, best value per criterion highlighted in gold.* ⬩
- **04 Decida** *(Decide)* — "Deixe a IA recomendar — você decide." Let the AI recommend — you decide. *→ pondera-decida: an AI ranking that explains every position in plain language.*

**Outcome:** ⬩ Real AI work — scraping, extraction, curation, ranking — wrapped in a polished consumer product and its marketing site, shipped end-to-end. "Comprar ou alugar com clareza." [Felipe: add metric — e.g., listings processed / users / decisions made]

---

### 03 — Venture Lab, Niterra Group
**Kicker:** TIER TWO / INTERNAL PRODUCT, SHIPPED SOLO

**Problem:** A growing venture team ran on a CRM that couldn't carry portfolio reporting, expenses, or contracts.

**What I built (solo, end-to-end):**
- A custom automation layer on top of Affinity CRM, then scaled into a full internal portal serving multiple business functions.
- A Portfolio Management module: automated quarterly report ingestion, real-time dashboards, custom reporting.
- An Expense & Contract Management solution inside the same portal.

**Architecture map (mono):** `Affinity CRM → [ automation layer ] → internal portal → { Portfolio Management . Expense / Contract }`

**Outcome pull-quote (hung in margin):** ⬩ "One internal portal carried reporting, expenses, and contracts across multiple business functions — an automation layer built on Affinity CRM."

**Impact framing:** Replaced manual quarterly report handling with automated ingestion and live dashboards. [Felipe: add metric — e.g., hours saved per reporting cycle / # of portfolio companies tracked]

**Image slots:** *Plate to come — confidential; cropped/blurred internal shots to follow.*

---

### 04 — Flora, Santos Lab
**Kicker:** TIER TWO / PRECISION-AGRICULTURE PLATFORM · WEB + MOBILE

**Problem:** Agronomists needed drone, satellite, and field data fused into something they could actually read on a map — and capture offline in the field.

**What I built (developer → Tech Lead of 5):**
- A React/TypeScript precision-agriculture platform: interactive geospatial web maps, dashboards, custom charts, and data-entry forms, with geospatial analysis via Leaflet and Turf.js.
- An offline-first React Native field-collection app — capture in the field, sync later.
- Grew from developer into Tech Lead of five engineers on this work.

**Outcome:** ⬩ A web + mobile platform that put multi-source geospatial data in one place — and the case where I went from building to leading the build. [Felipe: add metric — e.g., farms/hectares monitored / field reports captured]

**Image captions:**
- *Flora-Mapa / Flora-Dashboard* — Drone, satellite, and field data fused into one interactive map and dashboard — the analysis surface agronomists actually use.
- *FloraApp (phone frame)* — The same platform in the field: an offline-first React Native app for capture where there's no signal. Web and mobile, same hands.
- *Caption tie:* Built it, then led the team that scaled it — developer to Tech Lead of 5.

---

### 05 — Public-facing work (contact sheet)
**Kicker:** TIER TWO / SYSTEMS BEHIND THE SCREENS

**HomeOptions — the real proof is internal (copy leads):**

**Problem:** A call-center sales operation needed custom tooling its off-the-shelf stack couldn't give it.

**What I built (owned end-to-end):**
- A custom SvelteKit CRM integrated with Twilio's call center.
- An AI-assisted call-handoff tool to move live calls between agents cleanly.
- A Go/HTMX compliance and debt-settlement platform.

**Architecture map (mono):** `SvelteKit CRM ↔ Twilio call center · AI call-handoff · Go/HTMX compliance & debt-settlement`

**Outcome pull-quote (hung in margin):** ⬩ "Three internal systems for a call-center operation — CRM, AI call-handoff, and a compliance/debt-settlement platform — owned end-to-end."

**Impact framing:** [Felipe: add metric — e.g., calls handled / agent handoff time / compliance cases processed]

**Contact-sheet plates (public-facing, supporting evidence):**
- *HomeOptions.png* — Rebuilt the user portal from a React SPA to Next.js SSR for performance and SEO. [Felipe: add metric — load-time before/after, or SEO/conversion lift]
- *HomeOptionsBlog.png* — Landing pages and blog on the same SSR foundation — built for discoverability, not just looks.
- *LiftUpPortal / LiftUpPortalCustomer* — Public portals, forms, and ad-campaign entry points built to convert. [Felipe: add metric — conversion / form-completion rate]

---

## RANGE / BUILD FOR FUN

**Intro:** When the work's done, I still build. A sampling of things made for the love of it — sprites, code, and all.

- **Stupid Spider (Rust + Bevy)** — A game built ground-up in Rust: sprites, original music, and code, all mine.
- **Go HTMX starter** — A clean starter template for shipping HTMX apps on Go.
- **Gleam HTMX starter** — The same idea in Gleam — because I like seeing how a functional language handles the web.

---

## CREDIBILITY STRIP

(Mono colophon band — chips, not a timeline.)

- ~9 YEARS SHIPPING SOFTWARE
- FULL-STACK · MANY STACKS & LANGUAGES
- M.SC. COMPUTER SCIENCE · CROSS-PLATFORM DEV RESEARCH
- FORMER TECH LEAD OF 5
- SOLO DELIVERY, END-TO-END

---

## CTA / CONTACT

**Nudge line:** Have a problem that needs an owner, not a committee? Send me the messy version — I'll come back with where I'd start.

**How to reach me:**
- Email → fmunhozafonso@gmail.com
- GitHub → github.com/FelipeAfonso
- LinkedIn → linkedin.com/in/felipe-afonso

**Resume link line:** /resume.pdf — the full record, if you want the chronology.

---

# DESIGN SYSTEM

> **Target stack:** Astro 7 + Tailwind CSS 4 (CSS-first `@theme` in `src/styles/global.css`), Alpine.js for light state, `astro:assets` `<Image/>` for all plates. Static SSG, mobile-first.
> **Replaces** the current `--font-sans: Josefin Sans` / `--font-serif: Roboto Slab` token set, the ambient-glow dark look, **and the existing `--animate-cradle` / `cradle` keyframes** (remove these too). Remove deps `@fontsource-variable/josefin-sans` and `@fontsource/roboto-slab`; add the three families below.

---

## 1. Color Tokens

All tokens are declared in `@theme` so Tailwind 4 auto-generates utilities (`bg-paper`, `text-ink`, `border-rule`, `text-accent`, etc.). Hex values are fixed. The two product sub-palettes are **quarantined** — only used inside their owning spread.

### Global "one-ink" palette

| Token role | Hex | `@theme` variable | Generated utility | Usage |
|---|---|---|---|---|
| paper | `#F4F0E8` | `--color-paper` | `bg-paper` | Global page ground (warm newsprint, never `#fff`) |
| paper-raised | `#FBF8F2` | `--color-paper-raised` | `bg-paper-raised` | Cards, pondera plate frames, inset quote blocks |
| ink | `#1A1714` | `--color-ink` | `text-ink` / `bg-ink` | Primary text + display headlines + ALL small mono ≤15px (see §1 rule) |
| ink-muted | `#6B645A` | `--color-ink-muted` | `text-ink-muted` | Sublines, captions ≥16px only |
| accent (vermilion) | `#D64525` | `--color-accent` | `text-accent` / `bg-accent` | THE single global ink accent — kickers, hero period/underline, CTA, folio rules, link underlines |
| rule | `#D8D1C4` | `--color-rule` | `border-rule` / `bg-rule` | 1px column rules, gutters, section dividers |

### writequit dark sub-palette (quarantined to that spread)

| Token role | Hex | `@theme` variable | Generated utility | Usage |
|---|---|---|---|---|
| wq-ground | `#0D0F17` | `--color-wq-ground` | `bg-wq-ground` | writequit spread background (matches real terminal black) |
| wq-paper | `#F4F0E8` | reuse `--color-paper` | `text-paper` | Headline + prose on the dark spread (paper-white) |
| wq-lime | `#A9E34B` | `--color-wq-lime` | `text-wq-lime` | `:wq` wordmark, command chrome, mono labels, blinking cursor |
| wq-coral | `#D64525` | reuse `--color-accent` | `text-accent` | Status-bar record dot (reuse vermilion — already the global accent) |

### pondera light sub-palette (quarantined to that spread)

| Token role | Hex | `@theme` variable | Generated utility | Usage |
|---|---|---|---|---|
| pondera-navy | `#1E3A52` | `--color-pondera-navy` | `text-pondera-navy` | Spread kicker, four-step numerals, Cole/Pontue/Compare/Decida labels |
| pondera-gold | `#B8860B` | `--color-pondera-gold` | `text-pondera-gold` | Micro-accent — used EXACTLY ONCE on the "best value highlighted in gold" caption |

### WCAG-AA contrast (verified pairings)

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| ink `#1A1714` | paper `#F4F0E8` | ~14.9:1 | AAA — body + headlines |
| ink `#1A1714` | paper-raised `#FBF8F2` | ~15.7:1 | AAA |
| ink-muted `#6B645A` | paper `#F4F0E8` | ~4.9:1 | AA — **only at ≥16px** |
| accent `#D64525` | paper `#F4F0E8` | ~3.9:1 | **Large-text / UI only** — headings ≥24px, underlines, borders, icons; never body-size text |
| paper `#F4F0E8` | wq-ground `#0D0F17` | ~16.2:1 | AAA — dark-spread prose |
| wq-lime `#A9E34B` | wq-ground `#0D0F17` | ~12.6:1 | AAA — safe for mono labels at any size |
| pondera-navy `#1E3A52` | paper `#F4F0E8` | ~9.3:1 | AAA — step labels/numerals |
| pondera-gold `#B8860B` | paper-raised `#FBF8F2` | ~3.6:1 | **Large/UI only** — gold caption must be ≥18px semibold or paired with an ink label; never gold body text |

**Hard rules (resolves the small-text contradiction):**
1. Vermilion and gold never carry body-size text — only headings, rules, icons, underlines.
2. `ink-muted` is used **only at ≥16px**. ALL mono text below 16px — captions (was 13px), folios, running head (11px), stack metadata — uses full **`ink`** on light grounds (or `wq-lime` / `paper` on the dark spread, both AAA at any size). This keeps every small label AA+.
3. Accent links color the **text in `ink`** and animate an **`accent` underline** only.

---

## 2. Typography

### Families & loading

```
npm i @fontsource-variable/fraunces @fontsource/newsreader @fontsource/ibm-plex-mono
```

Import in `src/styles/global.css` (before `@theme`):

```css
@import "@fontsource-variable/fraunces"; /* variable: wght + opsz + SOFT + ital */
@import "@fontsource/newsreader/400.css";
@import "@fontsource/newsreader/400-italic.css";
@import "@fontsource/newsreader/500.css";
@import "@fontsource/ibm-plex-mono/400.css";
@import "@fontsource/ibm-plex-mono/500.css";
```

> **Verify post-install:** Fraunces `SOFT` is a custom (non-registered) axis. Confirm `@fontsource-variable/fraunces` ships the full axis set; if the package exposes only `wght`+`opsz`, the `"SOFT"` settings silently no-op — self-host the full variable woff2 in that case.

`@theme` font tokens:

```css
@theme {
  --font-display: "Fraunces Variable", Georgia, serif;
  --font-body:    "Newsreader", Georgia, serif;
  --font-mono:    "IBM Plex Mono", ui-monospace, "Menlo", monospace;
}
```

Defaults: `body { @apply font-body text-ink bg-paper; }`; headlines `font-display`.

**Three-voice rationale (also a selling point, foreshadowed in HOW I WORK):** `font-display` = product-judgment voice (serif, bridges to pondera). `font-mono` = engineer/terminal voice (bridges to writequit). `font-body` = the reading column. No sans-serif anywhere.

### Fraunces axis presets (variable font)

```css
.fraunces-display  { font-variation-settings: "opsz" 144, "SOFT" 50, "wght" 540; }
.fraunces-headline { font-variation-settings: "opsz" 72,  "SOFT" 40, "wght" 560; }
.fraunces-italic-emph { font-style: italic; font-variation-settings: "opsz" 72, "SOFT" 60, "wght" 500; }
```

### Type scale (rem, mobile-first; fluid via `clamp`)

| Role | Family | Size | Weight | Leading | Tracking | Color | Notes |
|---|---|---|---|---|---|---|---|
| Hero display (h1) | display | `clamp(2.75rem, 6vw + 1rem, 6.5rem)` | 540 | `0.98` | `-0.015em` | ink | Two lines, hard vermilion period, draw-in underline |
| Spread headline (h2) | display | `clamp(2rem, 3.5vw + 1rem, 4rem)` | 560 | `1.0` | `-0.01em` | ink | One italic emphasis word allowed |
| Sub-headline (h3) | display | `clamp(1.5rem, 2vw + 0.5rem, 2.25rem)` | 500 | `1.1` | `-0.005em` | ink | |
| Pull-quote | display | `clamp(1.75rem, 2.5vw + 0.75rem, 3rem)` | 480 | `1.05` | `-0.01em` | ink | Hung into margin, delivered-token glyph |
| Lead / subline | body | `clamp(1.0625rem, 0.5vw + 1rem, 1.25rem)` | 400 | `1.6` | `0` | ink (muted OK ≥16px) | Reading column |
| Body prose | body | `1.0625rem` | 400 | `1.6` | `0` | ink | Max ~62ch measure |
| Kicker (eyebrow) | mono | `0.75rem` | 500 | `1.4` | `+0.18em` uppercase | accent (or scoped navy/lime) | |
| Folio number | mono | `0.875rem` | 500 | `1` | `+0.05em` | accent | Static, no counter |
| Caption | mono | `0.8125rem` | 400 | `1.5` | `+0.02em` | **ink** (not muted — <16px) | Always an OUTCOME, never "screenshot of X" |
| Running head | mono | `0.6875rem` | 500 | `1.4` | `+0.15em` uppercase | **ink** (<16px) | Fixed top bar |
| Stack / spec metadata | mono | `0.75rem` | 400 | `1.5` | `+0.04em` | **ink** (<16px) | "SvelteKit 5 · Convex · Vercel" |

**Discipline:** all display ≤1.0 leading + negative tracking; all mono uppercase gets positive tracking; body stays 1.6.

---

## 3. Layout

### Container & grid
- **Max content width:** `--content-max: 80rem` (~1280px). Outer margins: `clamp(1.25rem, 5vw, 6rem)`.
- **Grid:** 12-col CSS grid. `grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: clamp(1rem, 2vw, 2rem);`
  - Reading prose: cols 2–8 (≤62ch). Plates: cols 1–8. Pull-quotes hang cols 8–13 (break past right edge).
- **Baseline rhythm:** 8px base. Section gaps `--space-section: clamp(6rem, 12vw, 10rem)`.

### Breakpoints (mobile-first, Tailwind defaults)

| Name | Min-width | Behavior change |
|---|---|---|
| (base) | 0 | Single column. Tier-1 spreads STACK (writequit then pondera) with a gutter rule + folio `01 → 02`. pondera rows go image-over-caption. |
| `sm` | 640px | Captions inline; contact-sheet plates 2-up |
| `md` | 768px | Pull-quotes begin hanging; Flora phone frame floats beside map plate |
| `lg` | 1024px | **Tier-1 becomes two FACING spreads** (grid 2 cols sharing a 1px center `rule`, each ground edge-to-edge). Contact sheet 3-up. |
| `xl` | 1280px | Full outer margins; running head fully spaced |

### Section divider treatment
- Default: tall whitespace, no boxes.
- Persistent **left margin marker**: 1px hairline down the page gutter (`border-l` on the content wrapper at `lg+`).
- Section breaks: a `rule`-colored hairline that **draws in** on scroll.
- **Background seam (MANIFEST graft):** entering/exiting the writequit dark spread, a tall vertical gradient ramps `paper → wq-ground → paper`. On mobile, a `min-h-[12vh]` gradient block above and below the dark spread. On desktop the dark column fills its grid cell edge-to-edge.

### Running head (fixed)
`position: fixed; top:0;` thin bar, `bg-paper/85 backdrop-blur`, bottom `border-rule`. Left: `FELIPE AFONSO — FIELD NOTES`. Right: live folio/section indicator (`ISSUE 01 · §03 PROOF`), updated by Alpine on scroll. Height ~40px; mono `text-[0.6875rem]` in `ink`.

---

## 4. Component Patterns (Astro components in `src/components/`)

### 4.1 SectionHeader
Grid `<div>`: folio in col 1 (`text-accent font-mono`), kicker + headline cols 2–9. Kicker mono uppercase `+0.18em`. Headline reveal staggered 80ms after kicker.

### 4.2 ProofCaseCard (shared spread skeleton)
Three slots in order, enforcing problem → built solo → outcome: (1) **Kicker** (problem, mono), (2) **Plate(s)** (what shipped), (3) **Pull-quote** (outcome), hung into margin, prefixed with the **delivered-token glyph**.

**Delivered token (pondera gold-star graft):** small SVG check/star stamp before each outcome pull-quote — `accent` on light spreads, `wq-lime` on writequit. 16–20px, `aria-hidden`, decorative. **The autonomy/"solo, end-to-end" claim lives HERE (once per spread), not in every caption.**

Outcome copy uses **bracketed integrity placeholders** verbatim where no real metric exists. Never fabricate.

### 4.3 writequit DARK TERMINAL FRAME
Container `bg-wq-ground text-paper`, fills its grid column edge-to-edge at `lg+`.
- **Title bar:** `:wq` wordmark (mono, `text-wq-lime`) left; thin `border-b` dark hairline `#262a36`. Use the `:wq` motif, not traffic-light dots.
- **List bullets:** bracketed `[*]` glyphs (`text-wq-lime`).
- **Blinking cursor:** lime block `▊` after `_:wq` — the only *decorative* loop (CSS `step-end`).
- **Live status bar (BUILD LOG graft, scoped here only):** bottom strip with an `accent` record dot + counting-up timer `00:48:21` + `:stop` + verbatim product-voice rotation. Alpine drives the timer (functional, not decorative); pauses under `prefers-reduced-motion`.
- **Plate frames:** the 4 shots in thin 1px terminal-frame borders (`#262a36`), captions mono `text-wq-lime`/`text-paper`.

### 4.4 pondera LIGHT "WINDOW" — four-step spine
Stays on `paper`; accent `pondera-navy`. 4 numbered rows mirroring the product flow:

| Row | Numeral (navy) | PT label · EN gloss | Plate |
|---|---|---|---|
| 01 | `01` | **Cole** · Paste the link, the rest fills itself | `pitch/pondera-cole.png` |
| 02 | `02` | **Pontue** · Give each property an honest score | `pitch/pondera-pontue.png` |
| 03 | `03` | **Compare** · See properties side by side, no guesswork | `pitch/pondera-compare.png` |
| 04 | `04` | **Decida** · Let the AI recommend — you decide | `pitch/pondera-decida.png` |

- Numerals `font-mono`, `text-pondera-navy`.
- **Gold micro-accent used once:** Row 03 caption only — "best value per criterion highlighted in **gold**" — `text-pondera-gold` on that word.
- Plates in light `paper-raised` frame (4.5) with browser chrome.
- Optional wide poster crop `pitch/pondera-hero.png` as the spread's opening plate.
- Headline device: Fraunces with italic emphasis on `sem se perder no meio do caminho`.

### 4.5 Image Frame + Caption (light "window")
`paper-raised` bg, 1px `rule` border, `--shadow-paper`, `rounded-[2px]`. Use `<Image/>` from `astro:assets` with `loading="lazy"`, `decoding="async"`, explicit `width`/`height`, `sizes` set to plate column width. Caption below in mono **`ink`** (<16px), always an OUTCOME.

**Browser/device chrome (MANIFEST graft):** light plates get a thin browser-bar (mono URL chip). **Flora mobile** uses a floating React-Native PHONE FRAME (rounded ~36px corners, notch sliver) wrapping `FloraApp-*.png`, floated in the margin beside the wide Flora plate at `md+`.

### 4.6 Shadow & grain tokens
```css
@theme { --shadow-paper: 0 1px 2px rgba(26,23,20,.04), 0 8px 24px rgba(26,23,20,.08); }
```
**Paper grain:** fixed low-opacity SVG `feTurbulence` overlay on `body::before` (`opacity:.035; mix-blend-mode:multiply; pointer-events:none;`). Inline data-URI, no network request. Do not apply over wq-ground (or use a separate low-opacity light noise there).

### 4.7 Credibility chip / colophon band
Single compressed mono band (NOT a timeline), `border-y border-rule`, mono `ink`, items separated by `·`:
`~9 YRS SHIPPING · FULL-STACK ACROSS MANY STACKS · M.SC. CS (CROSS-PLATFORM DEV RESEARCH) · FORMER TECH LEAD OF 5 · SOLO DELIVERY, END-TO-END`. Optionally each item a `chip`: `inline-flex` mono `text-xs`, `border border-rule rounded-[2px] px-2 py-1`.

### 4.8 Buttons / CTAs (editorial links, not pills)
- **Primary:** `Start a conversation → fmunhozafonso@gmail.com` — mono, `text-ink`, animated `accent` underline (`::after` `scaleX` on hover/focus). `<a href="mailto:…">`.
- **Secondary:** `/resume.pdf — the full record` — quieter, thinner underline (text `ink`, underline `accent`).
- Filled treatment only for the final contact CTA: `bg-ink text-paper` (preferred — AAA) or `bg-accent text-paper` at ≥16px bold.

### 4.9 Public-facing work CONTACT SHEET
3-up at `lg`, 2-up `sm`, 1-up base. Small framed plates with mono outcome captions. HomeOptions INTERNAL systems copy (Twilio CRM, AI call-handoff, Go/HTMX compliance) leads ABOVE via the architecture callout; public portals are supporting evidence only.

### 4.10 ARCHITECTURE CALLOUT (no-image-as-confident-choice)
Mono ASCII-style system map in a `paper-raised` framed block (BUILD LOG glyph styling), e.g.:
```
Affinity CRM ──▶ [ automation layer ] ──▶ internal portal ──┬─▶ Portfolio Mgmt
                                                            └─▶ Expense / Contract
```
Plus a hung outcome pull-quote and ONE bracketed impact-stat placeholder. Designed, labeled empty plate slots — `paper-raised` frame, 1px dashed `rule` border, mono caption `PLATE TO COME — confidential, crop/blur pending`. Apply the same pattern to HomeOptions-internal. ASCII map gets an adjacent visually-hidden text description of the flow.

---

## 5. Motion (restrained, print-like; all gated by `prefers-reduced-motion`)

| Element | Effect | Timing | Easing |
|---|---|---|---|
| Headlines & pull-quotes (scroll-in) | rise 16px + fade 0→1 | 600ms, staggered ~80ms after kicker | `cubic-bezier(0.2,0.7,0.2,1)` |
| Hero headline underline | `scaleX 0→1`, origin left | 500ms on load | same |
| Section hairline rules | "draw in" (scaleX) on enter | 500ms | same |
| Product plates (scroll-in) | fade up `scale(1.02 → 1.0)` settle | 600ms | same |
| Plate hover | lift `translateY(-4px)` + `--shadow-paper`; caption underline extends | 200ms | ease-out |
| writequit cursor | lime block blink — **the only *decorative* loop** | `step-end`, ~1.06s | — |
| writequit status timer | counting-up `MM:SS:CS` — **functional**, not decorative | Alpine interval | pauses under reduced-motion |
| Folio numbers | **static** — no number tickers | — | — |

```css
@theme { --ease-press: cubic-bezier(0.2,0.7,0.2,1); }
```
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .reveal { opacity: 1 !important; transform: none !important; }
}
```

Implement reveals with `IntersectionObserver` (or Alpine `x-intersect`) toggling `.is-revealed`; default `opacity-0 translate-y-4`.

**Alpine scope (keep tiny):** (a) running-head live section/folio label via `x-intersect`; (b) writequit status-bar timer; (c) optional plate lightbox. No heavy JS, no scroll libraries.

---

## 6. Accessibility & Performance

**Accessibility**
- Color: vermilion/gold never carry body-size text; `ink-muted` only ≥16px; all small mono is `ink` / `wq-lime` / `paper` (§1).
- One `<h1>` (hero), `<h2>` per spread, logical order; folio numbers `aria-hidden`.
- Decorative glyphs (`[*]`, delivered-token, cursor, ASCII map) `aria-hidden="true"`; ASCII map gets adjacent visually-hidden text of the same flow.
- pondera PT labels: `<span lang="pt">Cole</span>` with English gloss in plain text.
- All `<Image/>` get OUTCOME/feature `alt`, not "screenshot".
- Focus: `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }`.
- Motion fully disabled under `prefers-reduced-motion`; cursor and timer freeze.
- Email/resume links are real keyboard-reachable `<a>`.

**Performance**
- All plates via `astro:assets` `<Image/>` → auto webp/avif, responsive `srcset`, explicit dimensions (no CLS). Source dimensions: writequit 2048×1536, pondera desktop 1440×1000 (wide 1120×700 / 1080×780, mobile 780×1688), Flora desktop 2880px-wide, Flora app 1080×2520. Downscale Flora's multi-MB PNGs via `<Image/>` `widths`.
- Hero is type-only → fast LCP (Fraunces headline text is LCP). Preload Fraunces variable woff2 + IBM Plex Mono 500.
- `font-display: swap`; subset to latin if needed.
- First writequit plate (`pitch/writequit-board.webp`) `loading="eager"`; everything else lazy.
- Grain overlay = inline SVG data-URI.
- Alpine is the only client JS. Static SSG, near-zero JS on critical path.

### Files to edit
- Tokens/fonts: `/home/felipe/code/personal/portfolio/src/styles/global.css` (replace Josefin/Roboto tokens + remove `--animate-cradle`/`cradle` keyframes)
- Astro/Alpine config (Alpine already wired): `/home/felipe/code/personal/portfolio/astro.config.mjs`
- Deps: `/home/felipe/code/personal/portfolio/package.json` (remove josefin-sans + roboto-slab; add fraunces/newsreader/ibm-plex-mono)

---

# LAYOUT & IMAGE SLOTS

Grid: 12-col magazine grid, max ~1280px, wide outer margins. Every section carries a mono folio (01–08) + uppercase tracked kicker. Captions are OUTCOMES, never "screenshot of X." Bracketed `[Felipe: …]` = real metric placeholder; never fabricated.

> **BUILD NOTE (M5 resolved):** All Tier-1 plates use the in-repo, byte-identical staged copies at `/home/felipe/code/personal/portfolio/content/images/pitch/` — NOT the sibling repos. Verified: pondera `pitch/` copies = the LIGHT source variants; `writequit-board-admin` = `14-board-detail` (build/admin view), `writequit-client-board` = `20-public-board-unlocked` (client view) — names correct, not swapped.

---

## SECTION 01 — HERO (cover)
**Folio 01 · Kicker: `SOFTWARE ENGINEER · FULL-STACK · END-TO-END OWNERSHIP`**

Type-only editorial cover. **No images by design.** Running header rule (`FELIPE AFONSO` left / `A PRODUCT TEAM OF ONE — FIELD NOTES, ISSUE 01` right), huge Fraunces headline with vermilion hard period + draw-in underline, Newsreader subline, mono CTA links, faint vermilion folio `01` bottom-left. Paper-grain overlay on `#F4F0E8`.

**Subline (verbatim, propagated from FINAL COPY — S4):** "I operate like an embedded product team of one — full-stack delivery, end-to-end ownership, minimal hand-offs. I've also led a team of five, so I know which problems are worth coordinating on."

**Image count: 0 (intentional).**

---

## SECTION 02 — HOW I WORK
**Folio 02 · Kicker: `OPERATING MODEL`**

3–5 sentence Newsreader column. **No images by design** — editorial "editor's note" prose band; a single hairline rule divides it from Section 03. Three-voice type rationale (mono = engineer/terminal voice, serif = product-judgment voice) foreshadowed here.

**Image count: 0 (intentional).**

---

## SECTION 03 — TIER 1 CONTRAST PAIR (centerpiece)
**Folio 03 · Shared kicker spanning both columns: `TIER ONE / TWO PRODUCTS, ONE BUILDER`**

Two facing spreads, one center gutter rule. Desktop: grid 2 cols sharing a 1px center rule, each ground edge-to-edge. Mobile: stack with a tall gradient SEAM ramping paper `#F4F0E8` → wq `#0D0F17` → paper (MANIFEST graft), a `01 → 02` folio, and a "turn the page" gutter rule between. A gold delivered-token glyph stamps each spread's outcome pull-quote (autonomy claim lives here, not in captions — S1).

### 03A — writequit.dev `[LEFT / recto — full dark #0D0F17 ground, lime #A9E34B accent]`
Faux `:wq` terminal title bar, bracketed `[*]` status-glyph bullets, IBM Plex Mono captions, blinking lime block cursor, bottom verbatim product-voice status-bar strip. All plates in thin terminal-frame borders.

| Slot | Placement | Aspect ratio | Source asset | Caption (outcome-tied) | Treatment |
|---|---|---|---|---|---|
| WQ-1 (HERO) | Full-column, top | 4:3 (2048×1536) | `/home/felipe/code/personal/portfolio/content/images/pitch/writequit-board.webp` | "The board freelancers live in: markdown tasks, running timer, status filters." | Largest plate; `:wq` title bar above; blinking lime cursor after `_:wq` adjacent; `loading="eager"` |
| WQ-2 (time tracker) | 2-up row left | 4:3 (2048×1536) | `/home/felipe/code/personal/portfolio/content/images/pitch/writequit-time.webp` | "Time tracking with live running timers — part of the same tool, not a second app." | Scope the live status-bar element here: coral record dot + counting-up `00:48:21` + `:stop` (BUILD LOG graft, quarantined) |
| WQ-3 (invoice) | 2-up row right | 4:3 (2048×1536) | `/home/felipe/code/personal/portfolio/content/images/pitch/writequit-invoice.webp` | "jsPDF invoice generation — billing built into the same tool, not bolted on." | Terminal-frame border; caption underline extends on hover |
| WQ-4 (shared board, build view) | Full-column, below 2-up | 4:3 (2048×1536) | `/home/felipe/code/personal/portfolio/content/images/pitch/writequit-board-admin.webp` | "Password-protected client boards with live chat (Convex) — permissioned sharing, real-time." | Pairs the build side with what the client sees |
| WQ-5 (client view) | Inset/margin beside WQ-4 (2nd row on mobile) | 4:3 (2048×1536) | `/home/felipe/code/personal/portfolio/content/images/pitch/writequit-client-board.webp` | "What the client sees: a password-unlocked board with live chat — the sharing surface, from the other side." | Smaller inset framing WQ-4's claim from both sides |

Optional lightbox extras (NOT required slots): `pitch/writequit-editor.webp`, `pitch/writequit-palette.webp`. OG banner spare: `pitch/writequit-og.webp`. All 4 required shots (board / time / invoice / shared board+chat) present. **Spread image count: 5.**

**Status-bar strip (verbatim product voice):** `a tool, not a lifestyle · write. quit. ship. · for developers who'd rather ship than organize` — quarantined to this spread only.

### 03B — pondera.casa `[RIGHT / verso — light paper ground, navy #1E3A52 accent]`
Layout spine mirrors the product's four-step flow: four numbered rows, each pairing PT step name + English gloss with its matching LIGHT screenshot. Fraunces headline with italic emphasis on `sem se perder no meio do caminho`. Browser chrome frame on each plate.

| Slot | Placement | Aspect ratio | Source asset | Caption (outcome-tied) | Treatment |
|---|---|---|---|---|---|
| PO-1 — STEP 01 "Cole" | Row 1 | 1440:1000 | `/home/felipe/code/personal/portfolio/content/images/pitch/pondera-cole.png` | "Cole — Paste a link; AI extracts price, area, photos and a pros/contras/atenção card. No data entry." | Navy numeral `01`; browser chrome |
| PO-2 — STEP 02 "Pontue" | Row 2 | 1440:1000 | `/home/felipe/code/personal/portfolio/content/images/pitch/pondera-pontue.png` | "Pontue — Score each property on a checklist; portfolio stats update as you go." | Navy numeral `02`; browser chrome |
| PO-3 — STEP 03 "Compare" | Row 3 | 1440:1000 | `/home/felipe/code/personal/portfolio/content/images/pitch/pondera-compare.png` | "Compare — Side-by-side table with **best value per criterion highlighted in gold**." | Navy numeral `03`; the ONE caption carrying the gold `#B8860B` micro-accent |
| PO-4 — STEP 04 "Decida" | Row 4 | 1440:1000 | `/home/felipe/code/personal/portfolio/content/images/pitch/pondera-decida.png` | "Decida — AI ranks the options and explains each position in plain language. You decide." | Navy numeral `04`; browser chrome |
| PO-5 (wide poster, optional) | Spread header crop above rows | 1120:700 | `/home/felipe/code/personal/portfolio/content/images/pitch/pondera-hero.png` | "A polished consumer product in Portuguese — real AI work and a full marketing site." | Optional wide hero establishing the light/friendly tone |
| PO-6 (mobile counterpoint, optional) | Margin inset beside Row 2 / mobile-only | 780:1688 | `/home/felipe/code/personal/portfolio/content/images/pitch/pondera-mobile.png` | "Responsive end-to-end — the same flow on mobile." | Optional phone-width counterpoint |

Wide-ranking alt for Decida on wide viewports: `/home/felipe/code/personal/portfolio/content/images/pitch/pondera-decida-wide.png` (1080×780). All 4 flow steps present. **Spread image count: 4 required + up to 2 optional.**

**Section 03 total: 9 required (5 + 4), up to 11 with optionals. No empty slot.**

---

## SECTION 04 — NITERRA / VENTURE LAB (Tier-2 flagship)
**Folio 04 · Kicker: `TIER TWO / INTERNAL PRODUCT, SHIPPED SOLO`**

Full-width single spread. **Screenshots PENDING** — ships TODAY on the alternative treatment with designed, labeled "plate to come" slots ready for confidential (cropped/blurred) shots.

### Shown NOW (alternative treatment — the confident default)

| Slot | Placement | Aspect ratio | Source asset | Caption (outcome-tied) | Treatment |
|---|---|---|---|---|---|
| NI-1 — architecture map | 2-col left, full editorial width | mono block | None (CSS/mono) | "Affinity CRM → automation layer → internal portal → { Portfolio · Expense/Contract }" | ASCII/mono architecture-map (BUILD LOG graft); visually-hidden text alt |
| NI-2 — outcome pull-quote | Hung into right margin | — | None (type) | "One internal portal carried reporting, expenses, and contracts across multiple business functions — an automation layer built on Affinity CRM." | Large Fraunces, gold delivered-token glyph |
| NI-3 — impact stat | Inline below pull-quote | — | None (type) | "[Felipe: add impact stat — e.g., quarterly report ingestion time before/after]" | Bracketed placeholder; never fabricated |
| NI-LOGO (optional micro-mark) | Spread header, small | square | `/home/felipe/code/personal/portfolio/content/images/venturelabngk_logo.jpg` | "Venture Lab — Niterra Group" | Small mono-captioned mark only; keep confidential framing |

### PLACEHOLDER slots (explicitly labeled "PLATE TO COME")

| Slot | Placement | Aspect ratio (target) | Source asset | Caption (when supplied) | Treatment |
|---|---|---|---|---|---|
| NI-P1 | 2-col right, generous | 16:10 target | **PENDING — Felipe to supply** (Portfolio module: dashboards/custom reporting) | outcome TBD on supply | Dashed-border frame labeled `PLATE TO COME`; assume crop/blur; high-level description |
| NI-P2 | Below NI-P1 | 16:10 target | **PENDING — Felipe to supply** (Expense & Contract module) | outcome TBD on supply | Same labeled placeholder treatment |

**Image count NOW: 0 product shots + 1 optional logo (alternative treatment carries the block). Placeholder slots explicitly labeled, not empty gaps.**

---

## SECTION 05 — SANTOS LAB / FLORA (Tier-2, image-forward)
**Folio 05 · Kicker: `TIER TWO / PRECISION-AG PLATFORM · WEB + MOBILE`**

Most visually striking company case — generous slots. Wide desktop geospatial/dashboard hero as recto + a floating React-Native phone frame for the mobile-app shot as a tall margin counterpoint (MANIFEST graft). Carries the developer → Tech Lead of 5 credibility.

| Slot | Placement | Aspect ratio | Source asset | Caption (outcome-tied) | Treatment |
|---|---|---|---|---|---|
| FL-1 (HERO) | Full-bleed / 2-col wide recto hero | ~2880px wide (≈16:10 crop) | `/home/felipe/code/personal/portfolio/content/images/Flora-Mapa.png` | "Drone, satellite and field data on one interactive map (Leaflet + Turf.js geospatial analysis)." | Browser chrome frame; largest plate |
| FL-2 (mobile counterpoint) | Tall margin inset, right | 1080:2520 | `/home/felipe/code/personal/portfolio/content/images/FloraApp-SelectedFarm.png` | "Offline-first React Native field app — the same platform, collected in the field." | Floating React-Native PHONE FRAME (MANIFEST graft) — web+mobile in one glance |
| FL-3 (dashboard) | 2-up row left | ~2880px wide (≈16:10) | `/home/felipe/code/personal/portfolio/content/images/Flora-Dashboard.png` | "Analytics dashboards and custom charts turning raw geospatial data into decisions." | Browser chrome frame |
| FL-4 (map w/ filters) | 2-up row right | ~2880px wide (≈16:10) | `/home/felipe/code/personal/portfolio/content/images/Flora-MapaF.png` | "Filtered map + analysis layers — [Felipe: add scale metric — e.g., farms/hectares monitored]." | Browser chrome; bracketed metric |
| FL-5 (mobile counterpoint 2, optional) | Second phone inset | 1080:2520 | `/home/felipe/code/personal/portfolio/content/images/FloraApp-NewMonitoring.png` | "New monitoring, captured on-site and synced when back online." | Optional second phone frame |

Spare web shots if a slot is swapped: `Flora-Home.png`, `Flora-Form.png`. Spare mobile: `FloraApp-Home.png`, `FloraApp-ZoomedIn.png`, `FloraApp-ListView.png`. **Image count: 4 required + 1 optional. Image-rich, no empty slot.**

---

## SECTION 06 — PUBLIC-FACING WORK (HomeOptions internal + public + Liftup, folded)
**Folio 06 · Kicker: `TIER TWO / SYSTEMS BEHIND THE SCREENS`**

Two-part spread. COPY leads with HomeOptions INTERNAL systems (alternative treatment, no images); one compact 3-up contact-sheet strip folds HomeOptions-public + Liftup so neither gets flagship weight.

### 06A — HomeOptions internal (copy + alternative treatment, NO images by design)

| Slot | Placement | Aspect ratio | Source asset | Caption (outcome-tied) | Treatment |
|---|---|---|---|---|---|
| HO-A1 — architecture map | 2-col left | mono block | None (CSS/mono) | "Custom SvelteKit CRM ↔ Twilio call center → AI-assisted call-handoff → Go/HTMX compliance & debt-settlement platform." | ASCII/mono architecture-map; internal systems are the REAL proof; visually-hidden text alt |
| HO-A2 — outcome pull-quote | Hung into margin | — | None (type) | "Three internal systems for a call-center operation — CRM, AI call-handoff, and a compliance/debt-settlement platform — owned end-to-end." | Fraunces pull-quote, gold delivered-token stamp |

### 06B — PUBLIC-FACING WORK contact sheet (3-up strip of small framed plates)

| Slot | Placement | Aspect ratio | Source asset | Caption (outcome-tied) | Treatment |
|---|---|---|---|---|---|
| PF-1 | 3-up strip, left | ~1516px wide (≈16:10) | `/home/felipe/code/personal/portfolio/content/images/HomeOptions.png` | "HomeOptions public portal: rebuilt React SPA → Next.js SSR for performance and SEO. [Felipe: add metric — load-time before/after, or SEO/conversion lift]" | Small framed plate; supporting polish, NOT headline |
| PF-2 | 3-up strip, center | ≈16:10 | `/home/felipe/code/personal/portfolio/content/images/HomeOptionsBlog.png` | "Content/blog surface on the same SSR foundation — SEO-driven entry points feeding the funnel." | Small framed plate |
| PF-3 | 3-up strip, right | ≈16:10 | `/home/felipe/code/personal/portfolio/content/images/LiftUpPortal.png` | "Liftup portals & ad-campaign landing pages — fast, conversion-focused entry points. [Felipe: add metric — conversion / form-completion rate]" | Small framed plate |
| PF-4 (optional 4th) | extends strip OR hover/lightbox | ≈16:10 | `/home/felipe/code/personal/portfolio/content/images/LiftUpPortalCustomer.png` | "Liftup customer portal — shipped public-facing surface." | Optional spare; keep strip 3-up on desktop |

**Image count: 3 (strip) + 1 optional. Internal systems carry copy/architecture (0 images, intentional). No empty slot.**

---

## SECTION 07 — RANGE / BUILD-FOR-FUN (back-matter strip)
**Folio 07 · Kicker: `BACK MATTER / BUILT FOR THE LOVE OF IT`**

Short horizontal strip of small plates. Light texture only — keep compact.

| Slot | Placement | Aspect ratio | Source asset | Caption (outcome-tied) | Treatment |
|---|---|---|---|---|---|
| RG-1 + RG-2 (game pair) | Strip, left (two plates, one caption spanning) | title-card + gameplay crop | `/home/felipe/code/personal/portfolio/content/images/StupidSpiderGameTitle.png` + `/home/felipe/code/personal/portfolio/content/images/StupidSpiderGameIG.png` | "Stupid Spider — a game built ground-up in Rust + Bevy: sprites, original music, and code, all his." | One caption spans the pair (N2) |
| RG-3 | Strip, center | ~16:10 | `/home/felipe/code/personal/portfolio/content/images/go-htmx.webp` | "Go + HTMX starter template — shared for other builders." | Small plate |
| RG-4 | Strip, right | square-ish | `/home/felipe/code/personal/portfolio/content/images/HTMX_Gleam.png` | "HTMX starter for the Gleam functional language — range across stacks." | Small plate |

**Image count: 4 (game pair + 2). Fully populated.**

---

## SECTION 08 — CREDIBILITY + CONTACT (colophon / masthead)
**Folio (foot) · Kicker: `COLOPHON`**

Compressed mono-set masthead band: `~9 YRS SHIPPING · FULL-STACK ACROSS MANY STACKS · M.SC. CS (CROSS-PLATFORM DEV RESEARCH) · FORMER TECH LEAD OF 5 · SOLO DELIVERY, END-TO-END`. Then CTA: email `fmunhozafonso@gmail.com`, GitHub `FelipeAfonso`, LinkedIn `in/felipe-afonso`, the "here's how to start" nudge, and `/resume.pdf — the full record` (file at `/home/felipe/code/personal/portfolio/public/resume.pdf`). Paper-grain footer. **No images by design (mono colophon).**

**Image count: 0 (intentional).**

---

## FINAL IMAGE COUNT PER SECTION

| Section | Required | Optional | Notes |
|---|---|---|---|
| 01 Hero | 0 | 0 | Type-only cover (intentional) |
| 02 How I Work | 0 | 0 | Prose band (intentional) |
| 03A writequit (dark) | 5 | up to 2 lightbox | All 4 required shots present |
| 03B pondera (light) | 4 | 2 | All 4 flow steps present, LIGHT variants verified |
| 04 Niterra flagship | 0 product (+1 opt logo) | 2 PENDING labeled "plate to come" | Alternative treatment carries it now |
| 05 Flora | 4 | 1 | Image-forward, web+mobile |
| 06 Public-facing | 3 | 1 | Internal = copy/architecture (0 img, intentional) |
| 07 Range | 4 | 0 | Compact strip, game pair shares one caption |
| 08 Colophon/Contact | 0 | 0 | Mono masthead (intentional) |
| **TOTAL** | **20 required** | ~6 optional + 2 pending Niterra | |

**Confirmation:** No image-rich block has an empty placeholder. Image-light blocks (Niterra flagship, HomeOptions-internal) ship on a deliberate alternative treatment (mono architecture map + hung outcome pull-quote + bracketed impact stat); Niterra's two pending slots are explicitly labeled `PLATE TO COME`. Tier-1 contrast pair reads in one scroll, with a gradient seam handling the dark/light inversion on mobile. All asset paths verified on disk; Tier-1 sources repointed to the in-repo `content/images/pitch/` copies (M5).