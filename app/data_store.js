import { nanoid } from "nanoid";

export const skills_data = [
  {
    id: nanoid(),
    name: "Javascript",
    image: "/skills/js.png",
    score: "5.0",
  },
  {
    id: nanoid(),
    name: "Redux",
    image: "/skills/redux.png",
    score: "4.3",
  },
  {
    id: nanoid(),
    name: "React Native",
    image: "/skills/rnative.png",
    score: 4.8,
  },
  {
    id: nanoid(),
    name: "Nodejs",
    image: "/skills/nodejs.png",
    score: 4.5,
  },
  {
    id: nanoid(),
    name: "Git",
    image: "/skills/git-icon.png",
    score: "4.0",
  },
  {
    id: nanoid(),
    name: "GitHub",
    image: "/skills/github.png",
    score: "4.0",
  },
  {
    id: nanoid(),
    name: "Java",
    image: "/skills/java.png",
    score: "3.0",
  },
  {
    id: nanoid(),
    name: "Python",
    image: "/skills/python.png",
    score: 2.5,
  },
  {
    id: nanoid(),
    name: "Solidity",
    image: "/skills/solidity.png",
    score: 2.4,
  },
  {
    id: nanoid(),
    name: "Web3",
    image: "/skills/eth.png",
    score: 2.4,
  },
  {
    id: nanoid(),
    name: "MongoDB",
    image: "/skills/mongodb.png",
    score: 4.4,
  },
  {
    id: nanoid(),
    name: "Express",
    image: "/skills/express.png",
    score: 4.3,
  },
  {
    id: nanoid(),
    name: "React",
    image: "/skills/react.png",
    score: 4.8,
  },
  {
    id: nanoid(),
    name: "HTML",
    image: "/skills/html.png",
    score: 4.5,
  },
  {
    id: nanoid(),
    name: "Next.js",
    image: "/skills/nextjs.png",
    score: 4.6,
  },
  {
    id: nanoid(),
    name: "CSS",
    image: "/skills/css.png",
    score: 4.5,
  },
].sort((a, b) => b.score - a.score);

export const leftExperienceArr = [
  {
    id: nanoid(),
    title: "biography",
    list: false,
    content:
      "A self taught software developer who is very passionate about programming and tech in general",
  },
  {
    id: nanoid(),
    title: "contact",
    list: false,
    content: `Kogi, Nigeria. olojodhanny@gmail.com. +234 708 171 3909`,
  },
  {
    id: nanoid(),
    title: "services",
    list: true,
    content:
      "Mobile App Development. Backend development. Web Development. Blockchain development. UI/UX Designer",
  },
];
export const rightExperienceArr = [
  {
    id: nanoid(),
    title: "years of experience",
    content: "4+",
  },
  {
    id: nanoid(),
    title: "clients satisfaction",
    content: "99.9%",
  },
  {
    id: nanoid(),
    title: "languages & tech",
    content: "15+",
  },
  {
    id: nanoid(),
    title: "projects done",
    content: "5",
  },
];

export const leftPane = [
  {
    id: nanoid(),
    direction: "left",
    title: "Javascript",
    content: "• W3Schools. • Freecodecamp. • Caleb Curry YT Channel",
  },
  {
    id: nanoid(),
    direction: "left",
    title: "React Native",
    content:
      "• Stephen Grider RN Udemy course. • Maximimilian Schwarzmuller RN Udemy course. • Mosh Hamedani @codewithmosh.com",
  },
];

export const midPane = [
  {
    id: nanoid(),
    direction: "left",
    title: "NodeJS",
    content:
      "• Mosh Hamedani @codewithmosh.com. • TraverseyMedia YT channel. • Netninja YT channel",
  },
  {
    id: nanoid(),
    direction: "left",
    title: "Git & Github",
    content:
      "• Supersimpledev YT channel. • Mosh Hamedani @codewithmosh.com. • Coder Coder YT channel",
  },
  {
    id: nanoid(),
    direction: "left",
    title: "Java",
    content: "• Core: BroCode YT channel. • Android: Meicode @freecodecamp.com",
  },
  {
    id: nanoid(),
    direction: "left",
    title: "HTML & CSS",
    content: "• Dev Ed YT channel. • W3Schools. • TraverseyMedia YT channel",
  },
];

export const rightPane = [
  {
    id: nanoid(),
    direction: "left",
    title: "React",
    content:
      "• Bob Ziroll YT video. • Bob Ziroll @freecodecamp. • Dev Ed YT channel",
  },
  {
    id: nanoid(),
    direction: "left",
    title: "MongoDB & Express",
    content: "• Mosh Hamedani @codewithmosh.com. • Netninja YT channel. ",
  },
  {
    id: nanoid(),
    direction: "left",
    title: "Blockchain Dev",
    content: "• Patrick Collins @freecodecamp",
  },
];

export const myProjects = [
  {
    id: nanoid(),
    name: "Weebo",
    type: "Mobile Application",
    image: "/projects/weebo.png",
    description:
      "A social media kinda app for the Anime community. Cool and Fun app for degenerate weebs.",
  },
  {
    id: nanoid(),
    name: "Loka",
    image: "/projects/loka.png",
    type: "Mobile Application",
    description:
      "An e-commerce mobile application that is region or local based. The Online Market for your locality.",
  },
  {
    id: nanoid(),
    name: "E-mall",
    type: "Mobile Application",
    image: "/projects/mall.png",
    description:
      "An e-commerce app for a shopping mall. The management and delivery app for businesses such as malls, plaza.",
  },
  {
    id: nanoid(),
    name: "Pizza joint",
    type: "Web Application",
    image: "/projects/pizza.svg",
    description:
      "A simple fully animated web app. Using framer motion to animate React and Next.js projects",
  },
  {
    id: nanoid(),
    name: "Finance Logger",
    type: "Web Application",
    image: "/projects/f_logger.png",
    description:
      "A simple typescript written web app. Using typescript to build a simple web logger",
  },
];
