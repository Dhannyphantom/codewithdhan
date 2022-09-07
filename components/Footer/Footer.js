import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p>Back to top</p>
          <p>Contact or Leave a message</p>
          <p>Hire Me!</p>
        </div>
        <div>
          <p>My Services</p>
          <p>Languages</p>
        </div>
        <div>
          <p>Socials</p>

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
        </div>
      </div>
      <p> &copy; Copyrights reserved @codewithdhanny 2022 </p>
    </footer>
  );
}
