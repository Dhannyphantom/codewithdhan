import styles from "./Profile.module.css";
import Experience from "../Experience/Experience";
import { rightExperienceArr, leftExperienceArr } from "../../app/data_store";
import Image from "next/image";

export default function Profile() {
  const leftExperienceElements = leftExperienceArr.map((obj) => (
    <Experience key={obj.id} item={{ ...obj, direction: "left" }} />
  ));
  const rightExperienceElements = rightExperienceArr.map((obj) => (
    <Experience key={obj.id} item={{ ...obj, direction: "right" }} />
  ));
  return (
    <section className={styles.container}>
      <div className={styles.experiences}>{leftExperienceElements}</div>
      <div className={styles.border}>
        <div className={styles.pic_container}>
          <Image
            src="/me.png"
            // width={550}
            // height={500}
            layout="fill"
            objectFit="cover"
            alt=""
            className={styles.pic}
          />
        </div>
      </div>
      <div className={styles.experiences}>{rightExperienceElements}</div>
    </section>
  );
}
