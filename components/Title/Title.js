import styles from "./Title.module.css";

export default function Title({ title }) {
  return <h3 className={styles.title}>{title}</h3>;
}
