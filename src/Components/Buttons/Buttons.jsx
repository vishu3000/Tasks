import styles from "./Buttons.module.scss";

export const Buttons = () => {
  return (
    <div className={styles.buttonContainer}>
      <span className={styles.button}>Modify</span>
      <span className={styles.button}>+ Create New</span>
    </div>
  );
};
