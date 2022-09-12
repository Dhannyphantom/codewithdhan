import styles from "./Modal.module.css";
import { motion } from "framer-motion";
import { modalBgVart } from "../../app/motion_store";

export default function Modal({ modal, setModal, RenderComponent }) {
  if (!modal) return null;
  return (
    <motion.div
      className={styles.modal}
      variants={modalBgVart}
      initial="from"
      animate="to"
    >
      <div className={styles.content}>
        {RenderComponent && <RenderComponent setModal={setModal} />}
      </div>
    </motion.div>
  );
}
