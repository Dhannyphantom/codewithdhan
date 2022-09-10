import styles from "./Modal.module.css";

export default function Modal({ modal, setModal, RenderComponent }) {
  if (!modal) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        {RenderComponent && <RenderComponent />}
      </div>
    </div>
  );
}
