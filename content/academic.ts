export type Experience = {
  title: string;
  logo: string;
  company?: string;
  location: string;
  startDate: string;
  endDate: string | "isCurrent";
  description?: string[];
  workedWith?: string[];
};

export const academic: Record<string, Experience> = {
  master: {
    title: "Master's Degree in Computer Science",
    logo: "/ufscar.webp",
    company: "UFSCar (Federal University of São Carlos)",
    location: "São Carlos - São Paulo, Brazil",
    startDate: "03/2017",
    endDate: "06/2020",
    description: [
      `Explored cross-platform web and mobile development through the creation of multiple proof-of-concept apps using various frameworks.`,
      `Conducted extensive interviews with software industry professionals to gather insights and inform research within the field.`,
    ],
    workedWith: [
      "React.js",
      "React Native",
      "Vue",
      "Ionic",
      "NativeScript",
      "Java",
      "Xamarin",
      "C#",
      "JavaScript",
      "Flutter",
      "Kotlin",
      "Weex",
    ],
  },
  mentor1: {
    title: "Graduate Student Mentor",
    logo: "/ifsp.webp",
    company:
      "IFSP (Federal Institute of science, technology and education of São Paulo)",
    location: "Piracicaba - São Paulo, Brazil",
    startDate: "05/2018",
    endDate: "12/2018",
    description: [
      `Mentored a student in developing a Kotlin/Kotlin Native Android app for their final graduation project, providing guidance on language-specific concepts and best practices.`,
      `Volunteered time and expertise to support IFSP graduates through the mentorship program, contributing to their academic and professional development.`,
    ],
    workedWith: ["Kotlin", "Kotlin/Native", "Android SDK"],
  },
  mentor2: {
    title: "Graduate Student Mentor",
    logo: "/ifsp.webp",
    company:
      "IFSP (Federal Institute of science, technology and education of São Paulo)",
    location: "Piracicaba - São Paulo, Brazil",
    startDate: "09/2017",
    endDate: "08/2017",
    description: [
      `Designed and delivered a six-week virtual course on Agile methodologies for IFSP graduates, utilizing Google Classroom for content delivery and interaction.`,
      `Mentored and evaluated students throughout the course, providing personalized feedback and guidance to enhance their understanding of Agile principles and practices.`,
    ],
  },
  bach: {
    title: "Bachelor of Technology Degree in Systems Engineering",
    logo: "/ifsp.webp",
    company:
      "IFSP (Federal Institute of science, technology and education of São Paulo)",
    location: "Piracicaba - São Paulo, Brazil",
    startDate: "03/2014",
    endDate: "12/2016",
    description: [
      `For my final project: Developed a full-stack e-commerce solution with a Windows PoS, using .NET, Entity Framework, Razor, and XAML, to address inventory management challenges with a shared database.`,
      `Scholarship Project: Developed a Windows XAML app and an Android app with websockets to control projected images for product highlighting in an Inverse Augmented Reality proof-of-concept.`,
      `Developed and implemented a .NET Razor/Entity Framework web platform for scheduling student monitoring sessions, successfully utilized by campus for 2 years.`,
    ],
  },
  monitor: {
    title: "Monitor of Web Development",
    logo: "/ifsp.webp",
    company:
      "IFSP (Federal Institute of science, technology and education of São Paulo)",
    location: "Piracicaba - São Paulo, Brazil",
    startDate: "08/2016",
    endDate: "12/2016",
    description: [
      `Served as a Web Development class monitor, providing scholarship-funded support to fellow students on their .NET Razor, jQuery, and PHP projects.`,
    ],
  },
};
