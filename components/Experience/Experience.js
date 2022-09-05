import styles from "./Experience.module.css";

export default function Experience({ item }) {
  const isRight = item.direction === "right";
  return (
    <div className={styles.container}>
      <h6 className={isRight ? styles.right : styles.left}>{item.title}</h6>

      {item.content.split(". ").map((str) => (
        <p
          key={str}
          className={
            isRight ? `${styles.right} ${styles.right_text}` : styles.left_text
          }
        >
          {str}
        </p>
        // <li className="left-text"> {str} </li>
      ))}
    </div>
  );
}
