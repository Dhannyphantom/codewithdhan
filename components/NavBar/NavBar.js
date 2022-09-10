import styles from "./NavBar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hireVart } from "../../app/motion_store";
import { motion } from "framer-motion";

import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";

const HireMeForm = () => {
  return (
    <div>
      <h1>Hire Me</h1>
    </div>
  );
};

const NavBar = () => {
  const [modal, setModal] = useState(true);
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_links}>
        <button>Projects</button>
        <motion.button variants={hireVart} whileHover="hover">
          Hire Me
        </motion.button>
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
      <Modal modal={modal} RenderComponent={HireMeForm} setModal={setModal} />
    </nav>
  );
};

export default NavBar;
