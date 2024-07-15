export type Experience = {
  title: string;
  company?: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string | "isCurrent";
  description?: string;
  workedWith?: string[];
};

export const professional: Record<string, Experience> = {
  homeoptions: {
    title: "Senior Software Engineer",
    logo: "/homeoptions.png",
    company: "HomeOptions",
    location: "Oakland - CA",
    startDate: "May 2022",
    endDate: "isCurrent",
    description: `Managing and developing most front end applications in the company, including CRMs, Internal Portals and Landing Pages.Occasionally creating CLI tools for our team of developers using Rust.`,
    workedWith: [],
  },
  santoslab_latter: {
    title: "Lead Front end Developer and Tech Lead",
    logo: "/santoslab.jpg",
    company: "Santos Lab",
    location: "Rio de Janeiro, Brazil",
    startDate: "June 2020",
    endDate: "May 2022",
    description: `I was in a Leadership position, in which I was responsible not only for tech choices and front end team management and support, but also for feature planning, understanding the problem and translating it to the whole web team. I am still with my developer obligations, but on a slightly reduced scale. As it is a small company, in this role I am also responsible for recruiting and interviewing candidates for the team.
    At this point our project expanded to: a web platform in React.js with high complexity web mapping, lots of forms, charts and dashboards; A monitoring app made with React Native for farmers which let's you control pests and plagues and based on the input, it creates an interpolated map of its results; And a web platform for internal service orders made with React.js; Lastly we are at a Next.js migration, in which I am the main developer onboard.`,
    workedWith: [
      "React.js",
      "React Native",
      "REST APIs",
      "Next.js",
      "GraphQL",
      "ApolloClient",
      "materialUI",
      "Leaflet",
      "TypeScript",
      "Jest",
      "Cypress",
      "Redux Toolkit",
      "JWT",
      "Google Maps",
      "Google Analytics",
      "Sentry.io",
      "React Hook Form",
      "React Router",
      "Axios",
      "Recharts",
      "Husky",
      "Eslint",
      "Prettier",
      "Locize",
      "i18n",
      "FullCalendar",
      "Turf.js",
    ],
  },
  santoslab_prev: {
    title: "Front end Developer",
    logo: "/santoslab.jpg",
    company: "Santos Lab",
    location: "Rio de Janeiro, Brazil",
    startDate: "March 2019",
    endDate: "June 2020",
    description: `I've started this job with a legacy jQuery platform maintenance for a parent company. And at the same time I was delegated the job of creating the company's MVP. It was a React.js platform that the agronomists of the company would use to upload their map products (.KMZ, .SHP, .TIF, .KML, .PNG), and the farmers would login to check in on those products. The map had to handle multiple objects, a split view to compare different objects at the same place and different measuring tools. After this first MVP our team started expanded and I began taking on leadership roles, while also maintaining my developer obligations.`,
    workedWith: [
      "React.js",
      "React Native",
      "JavaScript",
      "materialUI",
      "REST APIs",
      "Leaflet",
      "Redux",
      "JWT",
      "Google Analytics",
      "React Router",
      "Recharts",
      "Eslint",
      "Prettier",
      "i18n",
      "FullCalendar",
    ],
  },
  seedz: {
    title: "Mobile Developer",
    logo: "/academic.svg",
    company: "Independent",
    location: "São Carlos - São Paulo, Brazil",
    startDate: "February 2018",
    endDate: "June 2018",
    description:
      "Along with 2 other colleagues from my Master's Course, I participated in a startup contest for Itaú (one of Brazil's largest banks). We developed a micro-investing app which would integrate to its bank account (through Itaú's APIs) and round up every purchase from the credit card.  That rounding up would be accumulated in a separate account and be invested in a trading fund. The app was made with native java android SDK for the front end, and integrated with an REST api. We didn't ended up on the top 3, but during the process we stumbled on various (mostly legal) complications and it was an enlightening experience for my career and problem solving skills.",
    workedWith: ["Java", "Android SDK", "REST APIs", "JWT"],
  },
};
