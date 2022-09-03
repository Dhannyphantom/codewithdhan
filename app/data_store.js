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
