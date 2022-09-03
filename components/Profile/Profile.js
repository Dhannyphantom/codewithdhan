import styles from "./Profile.module.css";
import Experience from "../Experience/Experience";
import { rightExperienceArr, leftExperienceArr } from "../../app/data_store";
import Image from "next/image";

const RenderImage = ({ style }) => {
  return (
    <div className={styles[style]}>
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
