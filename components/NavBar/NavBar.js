import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../Logo/Logo";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_links}>
        <p>Projects</p>
        <p>Hire Me</p>
      </div>
      <Logo />
      <div className={styles.icon_container}>
        <a
          href="https://github.com/Dhannyphantom"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            size="sm"
            className={styles.icon}
            icon={["fab", "github"]}
          />
        </a>
        <a
          href="https://wa.me/+23407081713909"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            size="sm"
            className={styles.icon}
            icon={["fab", "whatsapp"]}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-olojo-b61904243"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            size="sm"
            className={styles.icon}
            icon={["fab", "linkedin-in"]}
          />
        </a>
        <a target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            size="sm"
            className={styles.icon}
            icon={["fab", "twitter"]}
          />
        </a>
      </div>
    </nav>
  );
}
