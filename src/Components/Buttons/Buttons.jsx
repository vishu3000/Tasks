import Link from "next/link";
import styles from "./Buttons.module.scss";

export const Buttons = (props) => {
  const { path1, path2 } = props;
  return (
    <div className={styles.buttonContainer}>
      <Link href={path1}>
        <span className={styles.button}>Modify</span>
      </Link>
      <span className={styles.button}>
        <Link href={path2}>+ Create New</Link>
      </span>
    </div>
  );
};
