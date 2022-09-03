import { nanoid } from "nanoid";

export const skills_data = [
  {
    id: nanoid(),
    name: "Javascript",
    image: "/skills/js.png",
    score: 96,
  },
  {
    id: nanoid(),
    name: "React Native",
    image: "/skills/rnative.png",
    score: 92,
  },
  {
    id: nanoid(),
    name: "Nodejs",
    image: "/skills/nodejs.png",
    score: 90,
  },
  {
    id: nanoid(),
    name: "Git",
    image: "/skills/git-icon.png",
    score: 95,
  },
  {
    id: nanoid(),
    name: "GitHub",
    image: "/skills/github.png",
    score: 94,
  },
  {
    id: nanoid(),
    name: "Java",
    image: "/skills/java.png",
    score: 20,
  },
  {
    id: nanoid(),
    name: "Python",
    image: "/skills/python.png",
    score: 32,
  },
  {
    id: nanoid(),
    name: "Solidity",
    image: "/skills/solidity.png",
    score: 30,
  },
  {
    id: nanoid(),
    name: "Web3",
    image: "/skills/eth.png",
    score: 29,
  },
  {
    id: nanoid(),
    name: "MongoDB",
    image: "/skills/mongodb.png",
    score: 70,
  },
  {
    id: nanoid(),
    name: "Express",
    image: "/skills/express.png",
    score: 69,
  },
  {
    id: nanoid(),
    name: "React",
    image: "/skills/react.png",
    score: 80,
  },
  {
    id: nanoid(),
    name: "HTML",
    image: "/skills/html.png",
    score: 65,
  },
  {
    id: nanoid(),
    name: "CSS",
    image: "/skills/css.png",
    score: 66,
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
    content: "3",
  },
  {
    id: nanoid(),
    title: "clients satisfaction",
    content: "99.9%",
  },
  {
    id: nanoid(),
    title: "languages & tech",
    content: "+15",
  },
  {
    id: nanoid(),
    title: "projects done",
    content: "5",
  },
];
