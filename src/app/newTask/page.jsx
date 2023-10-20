import { TypeFour, TypeOne, TypeThree } from "@/Components/Inputs/Inputs";
import styles from "./page.module.scss";
import { List } from "@/Components/Lists/List/List";

export default function page() {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.modalHeading}>New Task</span>
      <div className={styles.formConatiner}>
        <div className={styles.col1}>
          <TypeOne name="Template Name" />
          <TypeFour name="Type :" />
          <TypeFour name="Name :" />
          <TypeThree name="Number of Tasks" />
          <TypeOne name="Task Name" />
        </div>
        <div className={styles.col2}>
          <List isTemplate />
        </div>
      </div>
      <div className={styles.submitContainer}>
        <div className={styles.cancel}>
          <span className={styles.submitText}>Cancel</span>
        </div>
        <div className={styles.create}>
          <span className={styles.submitText}>Create</span>
        </div>
      </div>
    </div>
  );
}
