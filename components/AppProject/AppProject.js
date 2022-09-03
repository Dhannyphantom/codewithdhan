import Title from "../Title/Title";
import styles from "./AppProject.module.css";
import { myProjects } from "../../app/data_store";
import Image from "next/image";

const ProjectCard = ({ card }) => {
  return (
    <div className={styles.card}>
      <Image
        src={card.image}
        alt={`Image showing ${card.name} project`}
        width={420}
        objectFit="contain"
        className={styles.cardImage}
        height={200}
      />
      <div className={styles.card_details}>
        <h5>
          {card.name} &bull; {card.type}
        </h5>
        <p> {card.description} </p>
      </div>
    </div>
  );
};

export default function AppProject() {
  const renderProjects = myProjects.map((obj) => (
    <ProjectCard key={obj.id} card={obj} />
  ));
  return (
    <section className={styles.container}>
      <Title title="My Projects" />
      <div className={styles.card_container}>{renderProjects}</div>
    </section>
  );
}
