import styles from "./Logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logo() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        size="sm"
        className={styles.icon}
        icon={["fas", "user-secret"]}
      />
    </div>
  );
}
