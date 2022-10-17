import styles from "./NavBar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hireVart, modalBgVart } from "../../app/motion_store";
import { motion } from "framer-motion";
import { hireFormInitials } from "../../app/data_store";

import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";

const HireMeForm = () => {
  const [] = useState(hireFormInitials);

  const FormFields = Object.entries(hireFormInitials).map(([k, v]) => {
    return <Input key={k} />;
  });

  return (
    <motion.div
      className={styles.modal}
      variants={modalBgVart}
      initial="from"
      animate="to"
    >
      <h3>Your Details</h3>
      <form>{FormFields}</form>
    </motion.div>
  );
};

const NavBar = () => {
  const [modal, setModal] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_links}>
        <button>Projects</button>
        <motion.button
          onClick={() => setModal(true)}
          variants={hireVart}
          whileHover="hover"
        >
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
