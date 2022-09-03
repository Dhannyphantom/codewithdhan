import styles from "./Cards.module.css";
import Title from "../Title/Title";
import { skills_data } from "../../app/data_store";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          width={50}
          height={50}
          src={item.image}
          alt={`${item.name} image`}
        />
        <p>{item.score}%</p>
      </div>
      <p className={styles.name}>{item.name}</p>
    </div>
  );
};

export default function Cards() {
  const cardElements = skills_data.map((obj) => (
    <Card item={obj} key={obj.id} />
  ));
  return (
    <section>
      <Title title="Skills and Usage" />
      <div className={styles.cards}>{cardElements}</div>
    </section>
  );
}
