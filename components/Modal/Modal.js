import styles from "./Modal.module.css";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { modalBgVart } from "../../app/motion_store";

// const contentVart = {
//   tap: {
//     scale: 0.8,
//   },
// };

const closeVariants = {
  hover: {
    backgroundColor: "#d50000",
  },
};

export default function Modal({ modal, setModal, RenderComponent }) {
  const scaler = useMotionValue(1);

  const onCloseClick = () => {
    setModal(false);
    scaler.set(0.8);
  };

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
          <motion.div style={{ scale: scaler }} className={styles.content}>
            <motion.div
              variants={closeVariants}
              whileHover="hover"
              onClick={onCloseClick}
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
