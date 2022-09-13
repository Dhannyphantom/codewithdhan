import styles from "./Modal.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { modalBgVart } from "../../app/motion_store";

const contentVart = {
  tap: {
    scale: 0.8,
  },
};

export default function Modal({ modal, setModal, RenderComponent }) {
  return (
    <AnimatePresence mode="wait">
      {modal && (
        <motion.div
          className={styles.modal}
          variants={modalBgVart}
          initial="from"
          animate="to"
          exit="from"
        >
          <motion.div
            variants={contentVart}
            whileTap="tap"
            className={styles.content}
          >
            <motion.div
              whileHover={{ backgroundColor: "#c62828" }}
              whileTap="tap"
              onClick={() => setModal(false)}
              className={styles.close}
            >
              <p>
                <span>&times;</span> Close
              </p>
            </motion.div>
            {RenderComponent && <RenderComponent />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
