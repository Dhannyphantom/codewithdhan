import Title from "../Title/Title";
import styles from "./AppProject.module.css";
import { myProjects } from "../../app/data_store";
import Image from "next/image";
import { motion } from "framer-motion";
import { tileVart, headerVart } from "../../app/motion_store";

const ProjectCard = ({ card, index }) => {
  return (
    <motion.div variants={tileVart} whileHover="hover" className={styles.card}>
      <motion.div variants={headerVart} className={styles.header}>
        <div className={styles.left}>
          <div className={styles.left_content}>
            <h4> {card.name} </h4>
            <small> {card.type} </small>
          </div>
          <div className={styles.left_bottom}>
            <p> {index < 10 && "0" + index} </p>
          </div>
        </div>
        <div className={styles.header_img}>
          <Image
            src={card.image}
            alt={`Image showing ${card.name} project`}
            width={60}
            objectFit="contain"
            className={styles.cardImage}
            height={60}
          />
        </div>
      </motion.div>
      <div className={styles.card_details}>
        <h5>
          {card.name} &bull; <small>{card.type}</small>
        </h5>
        <p> {card.description} </p>
      </div>
    </motion.div>
  );
};

export default function AppProject() {
  const renderProjects = myProjects.map((obj, idx) => (
    <ProjectCard key={obj.id} card={obj} index={idx + 1} />
  ));
  return (
    <section className={styles.container}>
      <Title title="My Projects" />
      <div className={styles.card_container}>{renderProjects}</div>
    </section>
  );
}
