import styles from "./Tasks.module.scss";

export const Tasks = () => {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.heading}>
        <span className={styles.customHeading}>Tasks Status</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="222"
          height="16"
          viewBox="0 0 222 16"
          fill="none"
        >
          <path
            d="M206 8C206 12.4183 209.582 16 214 16C218.418 16 222 12.4183 222 8C222 3.58172 218.418 0 214 0C209.582 0 206 3.58172 206 8ZM0 9.5H214V6.5H0V9.5Z"
            fill="#EBE671"
          />
        </svg>
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.miniContainer}>
          <span className={`${styles.customHeading} ${styles.red}`}>
            To Pick
          </span>
          {/* Loop */}
          <div className={`${styles.TaskContainer} ${styles.redBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.redBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.redBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.redBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="400"
          viewBox="0 0 54 30"
          fill="none"
        >
          <path
            d="M54 15L29 0.566243V29.4338L54 15ZM0 17.5H31.5V12.5H0V17.5Z"
            fill="black"
            fill-opacity="0.53"
          />
        </svg>

        <div className={styles.miniContainer}>
          <span className={`${styles.customHeading} ${styles.blue}`}>
            Active
          </span>
          {/* Loop */}
          <div className={`${styles.TaskContainer} ${styles.blueBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.blueBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.blueBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.blueBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="400"
          viewBox="0 0 54 30"
          fill="none"
        >
          <path
            d="M54 15L29 0.566243V29.4338L54 15ZM0 17.5H31.5V12.5H0V17.5Z"
            fill="black"
            fill-opacity="0.53"
          />
        </svg>
        <div className={styles.miniContainer}>
          <span className={`${styles.customHeading} ${styles.green}`}>
            Done
          </span>
          {/* Loop */}
          <div className={`${styles.TaskContainer} ${styles.greenBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.greenBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.greenBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.greenBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="400"
          viewBox="0 0 54 30"
          fill="none"
        >
          <path
            d="M54 15L29 0.566243V29.4338L54 15ZM0 17.5H31.5V12.5H0V17.5Z"
            fill="black"
            fill-opacity="0.53"
          />
        </svg>
        <div className={styles.miniContainer}>
          <span className={`${styles.customHeading} ${styles.black}`}>
            Approved
          </span>
          {/* Loop */}
          <div className={`${styles.TaskContainer} ${styles.blackBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.blackBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.blackBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
          <div className={`${styles.TaskContainer} ${styles.blackBg}`}>
            <span className={styles.checkmark}></span>
            <span className={styles.customCheckbox}>Task Name || ID</span>
          </div>
        </div>
      </div>
    </div>
  );
};
