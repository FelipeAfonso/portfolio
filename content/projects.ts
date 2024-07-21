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

import type { ImageMetadata } from "astro";

export type Project = {
  title: string;
  description: string;
  link?: string;
  workedWith?: string[];
  images?: ImageMetadata[];
};

export const projects: Record<string, Project> = {
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
