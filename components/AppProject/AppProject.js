import Title from "../Title/Title";
import styles from "./AppProject.module.css";
import { myProjects } from "../../app/data_store";
import Image from "next/image";

const ProjectCard = ({ card, index }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
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
      </div>
      <div className={styles.card_details}>
        <h5>
          {card.name} &bull; <small>{card.type}</small>
        </h5>
        <p> {card.description} </p>
      </div>
    </div>
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
