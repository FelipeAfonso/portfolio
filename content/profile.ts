// Single source of truth for the résumé header / positioning copy.
// These strings live inline in src/pages/index.astro (hero, niStats, colophon);
// centralizing them here lets the printable /resume page stay in sync with the site.

export type Contact = {
  label: string;
  href: string;
  display: string;
};

export const profile = {
  name: "Felipe Afonso",
  title: "Software Engineer · Full-Stack · End-to-End Ownership",
  tagline: "A product team of one",
  location: "Brazil · Remote",
  site: "felipeafonso.com",

  // Hero positioning paragraph (index.astro §01/§02).
  summary: `I work like an embedded product team of one: I take a problem from rough idea to a running product — design, build, deploy — with minimal hand-offs in between. I'm comfortable across the stack and across languages, so I can reach for the tool a problem wants rather than the one I happen to know, and I lean on AI as a multiplier on delivery speed.`,

  contact: [
    {
      label: "Email",
      href: "mailto:fmunhozafonso@gmail.com",
      display: "fmunhozafonso@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/FelipeAfonso",
      display: "github.com/FelipeAfonso",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/felipe-afonso",
      display: "linkedin.com/in/felipe-afonso",
    },
    {
      label: "Web",
      href: "https://www.felipeafonso.com",
      display: "felipeafonso.com",
    },
  ] satisfies Contact[],

  // Career highlights — the colophon strip in index.astro §08.
  highlights: [
    "~9 yrs shipping software",
    "Full-stack across many stacks",
    "M.Sc. CS — cross-platform dev research",
    "Former Tech Lead of 5",
    "Solo delivery, end-to-end",
  ],
} as const;
