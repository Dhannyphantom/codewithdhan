import Image from "next/image";
import styles from "./Profile.module.css";
import Experience from "../Experience/Experience";
import { rightExperienceArr, leftExperienceArr } from "../../app/data_store";
import { motion } from "framer-motion";
import { bgVart } from "../../app/motion_store";

const RenderImage = ({ style }) => {
  return (
    <div className={styles[style]}>
      <motion.div
        variants={bgVart}
        whileHover="hover"
        className={styles.pic_container}
      >
        <Image
          src="/danno.png"
          layout="fill"
          objectFit="cover"
          alt="Daniel's profile photo"
          className={styles.pic}
        />
      </motion.div>
    </div>
  );
};

export default function Profile() {
  const leftExperienceElements = leftExperienceArr.map((obj) => (
    <Experience key={obj.id} item={{ ...obj, direction: "left" }} />
  ));
  const rightExperienceElements = rightExperienceArr.map((obj) => (
    <Experience key={obj.id} item={{ ...obj, direction: "right" }} />
  ));

  return (
    <section className={styles.container}>
      <RenderImage style="small_border" />
      <div className={styles.details}>
        <div className={styles.experiences}>{leftExperienceElements}</div>
        <RenderImage style="border" />
        <div className={styles.experiences}>{rightExperienceElements}</div>
      </div>
    </section>
  );
}
