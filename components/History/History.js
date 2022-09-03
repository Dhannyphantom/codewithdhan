import styles from "./History.module.css";
import Experience from "../Experience/Experience";
import Title from "../Title/Title";
import Separator from "../Separator/Separator";
import { rightPane, leftPane, midPane } from "../../app/data_store";

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
    <section className={styles.container}>
      <Title title="Education History" />
      <div className={styles.history}>
        <div className={styles.experience}>{leftElements}</div>
        <div className={styles.experience}>{midElements}</div>
        <div className={styles.experience}>{rightElements}</div>
      </div>
      <Separator />
    </section>
  );
}
