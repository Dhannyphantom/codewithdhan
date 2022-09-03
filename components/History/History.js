import "./History.css";
import { nanoid } from "nanoid";
import Experience from "../Experience/Experience";
import Title from "../Title/Title";
import Separator from "../Separator/Separator";

const leftPane = [
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

const midPane = [
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

const rightPane = [
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

export default function History() {
  const leftElements = leftPane.map((obj) => (
    <Experience item={obj} key={obj.id} />
  ));
  const midElements = midPane.map((obj) => (
    <Experience item={obj} key={obj.id} />
  ));
  const rightElements = rightPane.map((obj) => (
    <Experience item={obj} key={obj.id} />
  ));
  return (
    <section className="history-section">
      <Title title="Education History" />
      <div className="history-container">
        <div>{leftElements}</div>
        <div>{midElements}</div>
        <div>{rightElements}</div>
      </div>
      <Separator />
    </section>
  );
}
