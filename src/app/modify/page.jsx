import {
  TypeFour,
  TypeOne,
  TypeThree,
  TypeTwo,
} from "@/Components/Inputs/Inputs";
import styles from "./modify.module.scss";

export default function page() {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.modalHeading}>Modify Task</span>
      <div className={styles.formConatiner}>
        <div className={styles.col1}>
          <TypeOne name="Task ID" />
          <TypeTwo name="Change Task Name" />
          <TypeThree name="Add Task" />
          <TypeFour name="Number" />
          <TypeFour name="Task" />
        </div>
        <div className={styles.col2}>
          <TypeTwo name="Change Assignee" />
          <TypeTwo name="Delete Tasks" />
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
