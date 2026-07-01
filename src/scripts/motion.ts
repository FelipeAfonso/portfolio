import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Running-head section indicator — a label swap, not motion, so it runs
   regardless of prefers-reduced-motion (same behavior as before). */
const rh = document.getElementById("rh-section");
if (rh) {
  const so = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          const f = e.target.getAttribute("data-folio") ?? "";
          const t = e.target.getAttribute("data-title") ?? "";
          rh.textContent = `§${f} · ${t}`;
        }
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  document.querySelectorAll("[data-folio]").forEach((s) => so.observe(s));
}

const done = (el: Element) => el.classList.add("is-revealed");

const mm = gsap.matchMedia();

/* Reduced motion: everything visible immediately — same as the old IO path. */
mm.add("(prefers-reduced-motion: reduce)", () => {
  document
    .querySelectorAll(
      ".reveal, .rule-draw, .rule-draw-v, .draw-underline, .stat-tick",
    )
    .forEach(done);
});

mm.add(
  {
    motion: "(prefers-reduced-motion: no-preference)",
    desktop: "(min-width: 1024px)",
  },
  (ctx) => {
    const { motion, desktop } = ctx.conditions as {
      motion: boolean;
      desktop: boolean;
    };
    if (!motion) return;

    const hero = document.querySelector<HTMLElement>('[data-folio="01"]');
    const pedestal = document.querySelector<HTMLElement>("[data-pedestal]");

    const handled = new Set<Element>();
    const skip = (el: Element) =>
      handled.has(el) ||
      (hero?.contains(el) ?? false) ||
      (desktop && (pedestal?.contains(el) ?? false)) ||
      el.closest("[data-ticker]") !== null;

    const fromVars = (el: HTMLElement, fallback?: string) => {
      const kind = el.dataset.reveal ?? fallback;
      if (kind === "left") return { x: -20, opacity: 0 };
      if (kind === "right") return { x: 20, opacity: 0 };
      if (kind === "scale") return { scale: 0.965, y: 14, opacity: 0 };
      return { y: 22, opacity: 0 };
    };
    const toVars = { x: 0, y: 0, scale: 1, opacity: 1 };

    /* ---- §01 hero: the one load-time timeline ---- */
    if (hero) {
      const [eyebrow, h1, intro, cta] = Array.from(
        hero.querySelectorAll<HTMLElement>(":scope > .reveal"),
      );
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (eyebrow)
        tl.fromTo(
          eyebrow,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, onComplete: () => done(eyebrow) },
        );
      if (h1) {
        tl.fromTo(
          h1,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          "-=0.25",
        );
        // fires the CSS .draw-underline draw via .is-revealed
        tl.call(() => done(h1), [], "-=0.35");
      }
      if (intro)
        tl.fromTo(
          intro,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, onComplete: () => done(intro) },
          "-=0.5",
        );
      if (cta) {
        tl.call(
          () => {
            gsap.set(cta, { opacity: 1, y: 0 });
            done(cta);
          },
          [],
          "-=0.45",
        );
        tl.fromTo(
          Array.from(cta.children),
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          "<",
        );
      }
      // subtle depth: hero content slides up slower than the scroll
      if (desktop)
        gsap.to(hero, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
    }

    /* ---- §03 pedestal rise: the flagship dashboard is placed as you scroll ---- */
    if (desktop && pedestal) {
      const plate = pedestal.querySelector<HTMLElement>("figure.reveal");
      const glow = pedestal.querySelector<HTMLElement>("[data-pedestal-glow]");
      if (plate) {
        done(plate);
        handled.add(plate);
        gsap.fromTo(
          plate,
          { y: 56, scale: 0.94, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: pedestal,
              start: "top 95%",
              end: "top 45%",
              scrub: 0.7,
            },
          },
        );
      }
      if (glow)
        gsap.fromTo(
          glow,
          { opacity: 0.35 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: pedestal,
              start: "top 95%",
              end: "top 40%",
              scrub: 0.7,
            },
          },
        );
    }

    /* ---- grouped reveals: proximity-based stagger via ScrollTrigger.batch ----
       data-reveal-group[="left"|"right"|"scale"] sets the default variant for
       children; a child's own data-reveal wins. Nested .reveal elements inside
       an animated one are just unhidden (the parent carries the motion). */
    document
      .querySelectorAll<HTMLElement>("[data-reveal-group]")
      .forEach((group) => {
        const fallback = group.getAttribute("data-reveal-group") || undefined;
        const dur = parseFloat(group.dataset.revealDuration ?? "0.7");
        const all = Array.from(
          group.querySelectorAll<HTMLElement>(".reveal"),
        ).filter((el) => !skip(el));
        const items = all.filter((el) => {
          const anc = el.parentElement?.closest(".reveal");
          return !(anc && group.contains(anc));
        });
        all.forEach((el) => handled.add(el));
        all.filter((el) => !items.includes(el)).forEach(done);
        if (!items.length) return;
        items.forEach((el) => gsap.set(el, fromVars(el, fallback)));
        ScrollTrigger.batch(items, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              ...toVars,
              duration: dur,
              ease: "power3.out",
              stagger: 0.09,
              onComplete: () => batch.forEach(done),
            }),
        });
      });

    /* ---- §08 credential ticker: tokens settle in sequence ---- */
    document.querySelectorAll<HTMLElement>("[data-ticker]").forEach((el) => {
      gsap.set(el, { opacity: 1, y: 0 });
      done(el);
      gsap.fromTo(
        Array.from(el.children),
        { x: 8, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        },
      );
    });

    /* ---- remaining single reveals ---- */
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      if (skip(el)) return;
      gsap.fromTo(el, fromVars(el), {
        ...toVars,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onComplete: () => done(el),
      });
    });

    /* ---- CSS-drawn rules/underlines outside the hero ---- */
    document
      .querySelectorAll<HTMLElement>(
        ".rule-draw, .rule-draw-v, .draw-underline",
      )
      .forEach((el) => {
        if (hero?.contains(el)) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => done(el),
        });
      });

    /* ---- scrubbed depth (desktop only) ---- */
    if (desktop) {
      // data-parallax="n": shears from +n to −n yPercent across the viewport transit
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amt = parseFloat(el.dataset.parallax ?? "0");
        if (!amt) return;
        gsap.fromTo(
          el,
          { yPercent: amt },
          {
            yPercent: -amt,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      });
      // data-drift: section glows breathe with scroll
      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -8, opacity: 0.75 },
          {
            yPercent: 14,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
    }

    /* ---- running-head scroll-progress hairline ---- */
    const bar = document.getElementById("rh-progress");
    if (bar)
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        },
      );
  },
);

/* Fonts/late layout shifts can move trigger positions — recalc once settled. */
window.addEventListener("load", () => ScrollTrigger.refresh());
