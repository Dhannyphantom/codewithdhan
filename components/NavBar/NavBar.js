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
        <FontAwesomeIcon
          size="sm"
          className={styles.icon}
          icon={["fab", "github"]}
        />
        <FontAwesomeIcon
          size="sm"
          className={styles.icon}
          icon={["fab", "facebook-square"]}
        />
        <FontAwesomeIcon
          size="sm"
          className={styles.icon}
          icon={["fab", "linkedin-in"]}
        />
        <FontAwesomeIcon
          size="sm"
          className={styles.icon}
          icon={["fab", "twitter"]}
        />
      </div>
    </nav>
  );
}
