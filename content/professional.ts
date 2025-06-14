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
  homeoptions: {
    title: "Senior Software Engineer",
    logo: "/homeoptions.webp",
    company: "HomeOptions",
    location: "Oakland - CA",
    startDate: "05/2022",
    endDate: "isCurrent",
    // endDate: "05/2023",
    description: [
      `Built a performance-oriented Compliance Management Platform using GoLang, HTMX and Tailwind.`,
      `Worked closely with Finance and Product teams to prototype a new platform for debt settlement compliance management using Svelte Kit.`,
      `Created an application for sales agents to hand off their calls to an AI assistant, streamlining contract reading processes.`,
      `Built a custom CRM platform with SvelteKit, tailored to seamlessly integrate with Twilio's Call Center app, enhancing agent productivity and improving customer interactions.`,
      `Developed internal tools for campaign management, partner landing page customization, and contract tracking, streamlining workflows and enhancing efficiency.`,
      `Leveraged technical expertise to create and deploy performant, SEO-compliant portals that directly contributed to increased website traffic, lead generation, and overall business growth.`,
      `Revamped the legacy user portal, migrating it from a complex React SPA to a streamlined NextJS SSR architecture, enhancing performance, SEO, and form functionality while maintaining seamless back-end integration.`,
      `Revitalized an internal NextJS CRM with reliability and UX enhancements, achieving a successful integration with a Twilio-powered call center solution.`,
      `Developed high-performing, SEO-optimized landing pages for ad campaigns with NextJS, driving increased traffic and conversions.`,
      `Developed and implemented a comprehensive cookie banner solution using Svelte Kit, catering to both internal website needs and external clients as a SaaS product.`,
      // `Relocated along with the entire development team to a sibling company, maintaining my role as Senior Software Engineer and still working with the same team of developers`,
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
  santoslab_latter: {
    title: "Tech Lead",
    logo: "/santoslab.webp",
    company: "Santos Lab",
    location: "Rio de Janeiro, Brazil",
    startDate: "06/2019",
    endDate: "05/2022",
    description: [
      `Led a team of 5 engineers in the development of a comprehensive precision agriculture platform. Successfully bridged the gap between front-end and back-end teams, ensuring alignment with user needs and agricultural procedures. Provided technical guidance and mentorship to team members while maintaining hands-on development responsibilities.`,
      `Developed a React/TypeScript precision agriculture platform, integrating drone, satellite, and in-field data to provide farmers actionable insights. Leveraged Turf.js and Leaflet for geospatial analysis, maintained a design system with Storybook/MUI, and developed data-driven GHG emissions forms with real-time estimations using React Hook Form and Zod.`,
      `Created a React Native app for offline field data collection, ensuring seamless synchronization with a precision agriculture platform to generate maps and reports, empowering farmers with real-time insights.`,
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
  santoslab_prev: {
    title: "Front end Developer",
    logo: "/santoslab.webp",
    company: "Santos Lab",
    location: "Rio de Janeiro, Brazil",
    startDate: "03/2017",
    endDate: "06/2019",
    description: [
      `Successfully maintained and revitalized a legacy application, identifying and resolving critical issues while adapting it to evolving business needs. This work laid the groundwork for the development of a comprehensive precision agriculture platform.`,
      `Developed an MVP React.js platform enabling agronomists to upload various map formats (.KMZ, .SHP, .TIF, .KML, .PNG) and farmers to access them for informed decision-making. The platform's intuitive interface featured a split-view for map comparison, multiple object handling, and various measurement tools.`,
    ],
    workedWith: ["React.js", "Leaflet", "Recharts"],
  },
  seedz: {
    title: "Mobile Developer",
    logo: "/academic.svg",
    company: "Independent",
    location: "São Carlos - São Paulo, Brazil",
    startDate: "02/2017",
    endDate: "06/2017",
    description: [
      `Developed a native Java Android micro-investing app with REST API integration for a startup contest sponsored by Itaú, one of Brazil's largest banks.`,
      `Navigated legal and logistical challenges while collaborating with a team to design and execute a unique financial product, gaining valuable problem-solving experience.`,
    ],
    workedWith: ["Java", "Android SDK"],
  },
};
