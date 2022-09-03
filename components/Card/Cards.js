import "./Cards.css";
import { nanoid } from "nanoid";
import Title from "../Title/Title";

const cardsArr = [
  {
    id: nanoid(),
    name: "Javascript",
    image: require("../../assets/skills/js.png"),
    score: 96,
  },
  {
    id: nanoid(),
    name: "React Native",
    image: require("../../assets/skills/rnative.png"),
    score: 92,
  },
  {
    id: nanoid(),
    name: "Nodejs",
    image: require("../../assets/skills/nodejs.png"),
    score: 90,
  },
  {
    id: nanoid(),
    name: "Git",
    image: require("../../assets/skills/git-icon.png"),
    score: 95,
  },
  {
    id: nanoid(),
    name: "GitHub",
    image: require("../../assets/skills/github.png"),
    score: 94,
  },
  {
    id: nanoid(),
    name: "Java",
    image: require("../../assets/skills/java.png"),
    score: 20,
  },
  {
    id: nanoid(),
    name: "Python",
    image: require("../../assets/skills/python.png"),
    score: 32,
  },
  {
    id: nanoid(),
    name: "Solidity",
    image: require("../../assets/skills/solidity.png"),
    score: 30,
  },
  {
    id: nanoid(),
    name: "Web3",
    image: require("../../assets/skills/eth.png"),
    score: 29,
  },
  {
    id: nanoid(),
    name: "MongoDB",
    image: require("../../assets/skills/mongodb.png"),
    score: 70,
  },
  {
    id: nanoid(),
    name: "Express",
    image: require("../../assets/skills/express.png"),
    score: 69,
  },
  {
    id: nanoid(),
    name: "React",
    image: require("../../assets/skills/react.png"),
    score: 80,
  },
  {
    id: nanoid(),
    name: "HTML",
    image: require("../../assets/skills/html.png"),
    score: 65,
  },
  {
    id: nanoid(),
    name: "CSS",
    image: require("../../assets/skills/css.png"),
    score: 66,
  },
];

const sortCards = () => {
  cardsArr.sort((a, b) => b.score - a.score);
};

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={item.image} alt="" />
        <p>{item.score}%</p>
      </div>
      <p className="card-name">{item.name}</p>
    </div>
  );
};

export default function Cards() {
  sortCards();

  const cardElements = cardsArr.map((obj) => <Card item={obj} key={obj.id} />);
  return (
    <section>
      <Title title="Skills and Usage" />
      <div className="cards-container">{cardElements}</div>
    </section>
  );
}
