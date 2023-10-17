import styles from "./Inputs.module.scss";

export const TypeOne = ({ name }) => {
  return (
    <div className={styles.parentOne}>
      <span className={styles.heading}>{name}</span>
      <div className={styles.inputOne}></div>
    </div>
  );
};
export const TypeTwo = ({ name }) => {
  return (
    <div className={styles.parentOne}>
      <span className={styles.heading}>{name}</span>
      <div className={styles.inputTwo}>
        <div className={styles.selector}></div>
        <div className={styles.selectorMain}></div>
      </div>
    </div>
  );
};
export const TypeThree = ({ name }) => {
  return (
    <div className={styles.parentOne}>
      <span className={styles.heading}>{name}</span>
      <div className={styles.inputThree}></div>
    </div>
  );
};
export const TypeFour = ({ name }) => {
  return (
    <div className={styles.parentTwo}>
      <span className={styles.heading}>{name} :</span>
      <div className={styles.inputFour}></div>
    </div>
  );
};
