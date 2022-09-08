import styles from "./Cards.module.css";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import { skills_data } from "../../app/data_store";
import Image from "next/image";
import { cardVart } from "../../app/motion_store";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <motion.div
        variants={cardVart}
        whileHover="hover"
        className={styles.card}
      >
        <Image
          width={50}
          height={50}
          src={item.image}
          alt={`${item.name} image`}
        />
        <p>{item.score}</p>
      </motion.div>
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
      <Title title="Techs and Usage" />
      <div className={styles.cards}>{cardElements}</div>
    </section>
  );
}
