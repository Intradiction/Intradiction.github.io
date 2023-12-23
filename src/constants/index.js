import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  personalprojects,
  tmu,
  celestica,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  netcore,
  java,
  timedtasks_screenshot,
  spaceinvaders_screenshot,
  llmtrainer_screenshot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Net Core",
    icon: netcore,
  },
];

const experiences = [
  {
    title: "Full Stack Cloud Developer",
    company_name: "Celestica",
    icon: celestica,
    iconBg: "#383E56",
    date: "May 2022 - August 2023",
    points: [
      "Developed, maintained, and tested web applications using AngularJS, ASP.NET, Spring Boot, Google Cloud/App Engine, Jenkins for CI/CD, JUnit and Cypress for testing ",
      "Practiced Agile methodologies to continuously improve and deliver enhancements in coordination with other teams through the use of Trello and Scrum meetings",
      "Actively participated in code reviews to understand overarching goals and ensure development standards were met",
    ],
  },
  {
    title: "Computer Engineering Undergraduate Student",
    company_name: "TMU (formerly Ryerson)",
    icon: tmu,
    iconBg: "#383E56", //#E6DEDD
    date: "Sept 2019 - Present",
    points: [
      "Created Discord servers to help tutor other students and study with others ",
      "Dean's List honor for academic excellence every year",
      "Took initiative to organize and develop group projects including projects that involved software development, machine learning, and SQL databases"
    ],
  },
  {
    title: "Personal Projects",

    icon: personalprojects,
    iconBg: "#383E56",
    date: "2018 - Present",
    points: [
      "Created a web app game using Quasar, Vue, and Firebase with live database read/write and user auth via Google sign in ",
      "Developed a Trello style To-Do list web app using React and Firebase with intuitive Drag-N-Drop user interface",
      "Created a Discord bot that responds to user input by querying GoogleSheets, integrating Discord and GoogleSheets api",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Timed Tasks",
    description:
      "Trello style To-Do list web app using React and Firebase with intuitive Drag-N-Drop user interface. Handles user auth and database functions with Firebase",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: timedtasks_screenshot,
    source_code_link: "https://github.com/Intradiction/timed-tasks",
    deployment_link: "https://timed-tasks-adee5.web.app",
  },
  {
    name: "Space Invaders",
    description:
      "Retro style game written in Javascript with VueJS as a frontend, features user sign in and score saving as well as live score updating on a leaderboard.",
    tags: [
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: spaceinvaders_screenshot,
    source_code_link: "https://github.com/Intradiction/space-invaders",
    deployment_link: "https://space-invaders-8e9d9.web.app",
  },
  {
    name: "LLM Training Comparison",
    description:
      "Trained a BERT text classification model using various parameters such as LORA vs no LORA, variable epochs, etc. Includes a frontend GUI on Hugging Face.",
    tags: [
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: llmtrainer_screenshot,
    source_code_link: "https://huggingface.co/spaces/Intradiction/test1/tree/main",
    deployment_link: "https://huggingface.co/spaces/Intradiction/test1", 
  },
];

export { services, technologies, experiences, testimonials, projects }; 