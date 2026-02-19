export type Experience = {
  title: string;
  company?: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string | "isCurrent";
  description?: string[];
  workedWith?: string[];
};

export const professional: Record<string, Experience> = {
  venture_lab_niterra: {
    title: "Software Engineer",
    logo: "/venture-lab-niterra-group.webp",
    company: "Venture Lab Niterra Group",
    location: "United States",
    startDate: "05/2025",
    endDate: "isCurrent",
    description: [
      `Designed and built a custom automation layer on top of Affinity CRM, extending its native capabilities with tailored dashboards and quality-of-life improvements for the venturing team's daily workflows.`,
      `Scaled the initial CRM tooling into a full-featured internal portal serving multiple business functions across the organization.`,
      `Developed a Portfolio Management module with automated quarterly report ingestion, real-time performance dashboards, and custom reporting capabilities derived from submitted fund data.`,
      `Built an Expense and Contract Management solution to support the team's budgeting operations, centralizing tracking across diverse funding activities.`,
      `Iterated on internal tooling to reduce operational friction and process attrition, streamlining day-to-day business activities.`,
    ],
    workedWith: ["TypeScript", "Svelte Kit", "Node.js", "AI Coding", "Vercel"],
  },
  basement_lab: {
    title: "Software Engineer",
    logo: "/the-basement-lab.webp",
    company: "The Basement LAB",
    location: "Spain",
    startDate: "06/2025",
    endDate: "10/2025",
    description: [
      `Led a legacy application rewrite focused on web performance, delivering major improvements across authentication, data fetching, and rendering.`,
      `Built a reusable open-source component library adopted across the company's web applications.`,
    ],
    workedWith: [
      "NextJS",
      "TypeScript",
      "Component Libraries",
      "Web Performance",
    ],
  },
  homeoptions: {
    title: "Software Engineer",
    logo: "/homeoptions.webp",
    company: "HomeOptions",
    location: "Oakland - CA",
    startDate: "05/2022",
    endDate: "06/2025",
    description: [
      `Built a custom CRM platform with SvelteKit integrated with Twilio's Call Center, and created an AI-assisted call handoff tool for sales agents to streamline contract reading.`,
      `Revamped the legacy user portal from a React SPA to NextJS SSR, improving performance and SEO, and developed high-converting landing pages for ad campaigns.`,
      `Built a Compliance Management Platform using GoLang, HTMX and Tailwind, working closely with Finance and Product teams on debt settlement workflows.`,
      `Developed internal tools spanning campaign management, contract tracking, and a cookie banner SaaS product used both internally and by external clients.`,
    ],
    workedWith: [
      "NextJS",
      "Tailwind",
      "GoLang",
      "HTMX",
      "Svelte Kit",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Vercel",
    ],
  },
  santoslab: {
    title: "Front end Developer / Tech Lead",
    logo: "/santoslab.webp",
    company: "Santos Lab",
    location: "Rio de Janeiro, Brazil",
    startDate: "03/2017",
    endDate: "05/2022",
    description: [
      `Grew from Front end Developer to Tech Lead over 5 years, eventually leading a team of 5 engineers building a comprehensive precision agriculture platform.`,
      `Built a React/TypeScript platform integrating drone, satellite, and in-field data with geospatial analysis (Turf.js, Leaflet), giving farmers actionable insights through interactive maps with split-view comparison and measurement tools.`,
      `Created a React Native app for offline field data collection with seamless sync to the main platform for map and report generation.`,
    ],
    workedWith: [
      "React.js",
      "React Native",
      "Leaflet",
      "Turf.js",
      "AWS",
      "Docker",
    ],
  },
  seedz: {
    title: "Mobile Developer",
    logo: "/academic.svg",
    company: "Independent",
    location: "São Carlos - São Paulo, Brazil",
    startDate: "02/2017",
    endDate: "06/2017",
    description: [
      `Built a native Android micro-investing app for a startup contest sponsored by Itaú, one of Brazil's largest banks.`,
    ],
    workedWith: ["Java", "Android SDK"],
  },
};
