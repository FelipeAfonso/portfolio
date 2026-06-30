import Flora1 from "./images/Flora-Mapa.png";
import Flora2 from "./images/Flora-Home.png";
import Flora3 from "./images/Flora-MapaF.png";
import Flora4 from "./images/Flora-Form.png";
import Flora5 from "./images/Flora-Dashboard.png";
import FloraApp1 from "./images/FloraApp-Home.png";
import FloraApp2 from "./images/FloraApp-ZoomedIn.png";
import FloraApp3 from "./images/FloraApp-ListView.png";
import FloraApp4 from "./images/FloraApp-SelectedFarm.png";
import FloraApp5 from "./images/FloraApp-NewMonitoring.png";
import Alura1 from "./images/AluraC-Community.png";
import Alura2 from "./images/AluraC-Editor.png";
import Alura3 from "./images/AluraCMobile-Community.png";
import Alura4 from "./images/AluraCMobile-Editor.png";
import HTMXGleam from "./images/HTMX_Gleam.png";
import HomeOptions from "./images/HomeOptions.png";
import HomeOptionsBlog from "./images/HomeOptionsBlog.png";
import Liftup from "./images/LiftUpPortal.png";
import LiftupCustomer from "./images/LiftUpPortalCustomer.png";
import StupidSpiderGameIG from "./images/StupidSpiderGameIG.png";
import StupidSpiderGameTitle from "./images/StupidSpiderGameTitle.png";
import SudokouijaTitle from "./images/SudokouijaTitle.png";
import SudokouijaBoard from "./images/SudokouijaBoard.png";
import GoHTMX from "./images/go-htmx.webp";
import niDash from "./images/niterra/niterra-dashboard.png";
import niCompanies from "./images/niterra/niterra-companies.png";
import niCompany from "./images/niterra/niterra-company.png";
import niValuation from "./images/niterra/niterra-valuation.png";
import niCaptable from "./images/niterra/niterra-captable.png";
import niFunnel from "./images/niterra/niterra-funnel.png";
import niExpend from "./images/niterra/niterra-expenditures.png";
import niReports from "./images/niterra/niterra-reports.png";
import wqBoard from "./images/pitch/writequit-board.webp";
import wqTime from "./images/pitch/writequit-time.webp";
import wqInvoice from "./images/pitch/writequit-invoice.webp";
import wqBoardAdmin from "./images/pitch/writequit-board-admin.webp";
import wqClient from "./images/pitch/writequit-client-board.webp";
import poCole from "./images/pitch/pondera-cole.png";
import poPontue from "./images/pitch/pondera-pontue.png";
import poCompare from "./images/pitch/pondera-compare.png";
import poDecida from "./images/pitch/pondera-decida.png";

import type { ImageMetadata } from "astro";

export type Project = {
  title: string;
  description: string;
  link?: string;
  workedWith?: string[];
  images?: ImageMetadata[];
};

export const projects: Record<string, Project> = {
  niterra: {
    title: "Niterra Ventures",
    description:
      "Niterra Ventures is the internal system of record I built for the venture arm of Niterra Group, covering the whole investment lifecycle: portfolio companies and their quarterly financials, editable cap tables, scenario-based exit models, a deal funnel, expense & contract tracking, board-deck generation, and P&L / balance-sheet reporting — fed by live integrations (Affinity CRM, PitchBook, Webflow) and mapped Excel imports. It replaced a CRM and eight spreadsheets with one platform (8 → 1) and became the daily system of record for 40+ people across the firm. Screens are from a public demo seeded with fictional data — no real portfolio data shown.",
    images: [
      niDash,
      niCompanies,
      niCompany,
      niValuation,
      niCaptable,
      niFunnel,
      niExpend,
      niReports,
    ],
    workedWith: [
      "SvelteKit",
      "Svelte 5",
      "Bun",
      "TypeScript",
      "Tailwind 4",
      "Drizzle / Turso",
      "Lucia",
      "LayerChart",
    ],
  },
  writequit: {
    title: "writequit.dev",
    description:
      "A full commercial SaaS for freelance developers — task manager, time tracker, and invoice generator in one terminal-native tool with vim keybindings and markdown tasks. It bundles auth (WorkOS), PDF invoice generation (jsPDF), real-time chat and shared client boards (Convex), and password-gated permissioned sharing. I shipped it end-to-end: the product design, the opinionated UX, and the marketing voice — not just the code.",
    link: "https://writequit.dev",
    images: [wqBoard, wqTime, wqInvoice, wqBoardAdmin, wqClient],
    workedWith: ["SvelteKit 5", "Convex", "Tailwind 4", "WorkOS", "jsPDF", "Vercel"],
  },
  pondera: {
    title: "pondera.casa",
    description:
      "A consumer product that helps you choose the right house without getting lost along the way. Paste a listing URL and pondera turns it into a structured decision — real scraping and LLM extraction, not a chat box — then curates, compares, and ranks: it pulls price, area and photos into a pros / cons / watch-outs card, scores each property on a checklist, lays them side by side with the best value per criterion highlighted, and ranks the options with plain-language reasoning. Shipped end-to-end, marketing site included.",
    link: "https://pondera.casa",
    images: [poCole, poPontue, poCompare, poDecida],
    workedWith: ["Next.js 16", "React 19", "Convex", "OpenRouter"],
  },
  go_htmx: {
    title: "Go HTMX Front end Template",
    description:
      "In need of a performant application for my work, I created a template for a Go HTMX application. It leverages Vite for Hot Reloading and bundling, which also makes it much easier to create isolated islands using other frameworks (like React) in specific locations of the website. It worked out great, and I used it daily in my own work.",
    link: "https://github.com/FelipeAfonso/go-htmx-starter",
    images: [GoHTMX],
  },
  stupid_spooder_game: {
    title: "Spooder Game",
    description:
      "I crafted a simple game using Rust and the Bevy Game Engine. It may be a small undertaking, but I developed everything, from sprites and music to interactions.",
    link: "https://king-cod.itch.io/stupid-spooder-game",
    images: [StupidSpiderGameTitle, StupidSpiderGameIG],
  },
  sudokouija: {
    title: "Sudokouija",
    description:
      "A horror sudoku built in the LÖVE (Love2D) engine for Scream Jam 2025. It turns the classic puzzle into a race against time and against the board itself — psychological-horror mechanics layered over a 9×9 grid. Sprites and code by hand, no generative AI.",
    link: "https://king-cod.itch.io/sudokouija",
    images: [SudokouijaTitle, SudokouijaBoard],
  },
  gleam_htmx: {
    title: "HTMX Tailwind Gleam",
    description:
      "I created an HTMX-driven web server for the functional programming Gleam language. This open-source project is a code template with built-in tailwind support, hot reloading, and componentized templating.",
    link: "https://github.com/FelipeAfonso/gleam_htmx_tw",
    images: [HTMXGleam],
  },
  liftup: {
    title: "Liftup Public Portals",
    description:
      "I created and maintained all of Liftup's public portals, including numerous forms to channel customer requests, landing pages, ad campaign entry points, and more!",
    images: [Liftup, LiftupCustomer],
  },

  homeoptions: {
    title: "HomeOptions Public Portals",
    images: [HomeOptions, HomeOptionsBlog],
    description: `HomeOptions is a real estate platform that facilitates connections between buyers and sellers. I was involved in developing public portals for users to submit requests for financial products, access blog posts, and contact real estate agents.`,
  },

  flora: {
    title: "AG Platform Flora",
    description: `Flora, the internal name of Santos Lab's main software, is a unique web platform for farmers and agronomists. It offers a novel approach to exploring data from different origins within their properties. With its intricate web maps, unique charts on the dashboard, numerous forms, and innovative components, Flora stands out in the agricultural tech landscape.`,
    images: [Flora1, Flora2, Flora3, Flora4, Flora5],
    workedWith: ["React.js", "Leaflet", "React Hook Form", "Turf.js"],
  },
  floraMonitoring: {
    title: "Prague Monitoring App",
    description: `The Prague Monitoring App, a React Native app for Android and iOS, was developed with practicality in mind. It aimed to monitor pests and plagues in farms and their fields, with an 'offline first' approach to accommodate the limited connectivity in these areas. As a map-centric app, we built extra features on top of Google Maps API, ensuring its usefulness even in remote locations. While the app is not yet available to the public, it is already making a difference for farmers and agronomists associated with Santos Lab.`,
    images: [FloraApp1, FloraApp2, FloraApp3, FloraApp4, FloraApp5],
    workedWith: ["React Native", "Google Maps", "Turf.js"],
  },
  aluraChallenge: {
    title: "Code Editor and Community",
    description:
      "I participated in a four-week challenge to develop a code editor and community web app. I've used React/NextJS and some technologies I had never used before.",
    images: [Alura1, Alura2, Alura3, Alura4],
    link: "https://github.com/FelipeAfonso/alura-challenge-all-dev",
    workedWith: ["Next.js"],
  },
};
