import styles from "./Inputs.module.scss";

export const TypeOne = (props) => {
  const { label, name, onChange, value } = props;
  return (
    <div className={styles.parentOne}>
      <label className={styles.heading}>{label}</label>
      <input
        className={styles.inputOne}
        type="text"
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
export const TypeTwo = (props) => {
  const { label, name, onChange, value } = props;
  return (
    <div className={styles.parentOne}>
      <label className={styles.heading}>{label}</label>
      <div className={styles.inputTwo}>
        <input
          className={styles.selectorMain}
          type="text"
          name={name}
          onChange={onChange}
          value={value}
        />
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
