import styles from "./List.module.scss";

export const List = (props) => {
  const { isTemplate = false, taskName, taskId, pointers } = props;
  return (
    <div className={styles.parentContainer}>
      <div className={styles.taskName}>
        {taskName} {!isTemplate && ` || ${taskId}`}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="390"
        height="14"
        viewBox="0 0 313 14"
        fill="none"
      >
        <path
          d="M10.9949 6.46645L0.978917 1.72653L1.01767 13.2735L11.0016 8.46644L10.9949 6.46645ZM302.002 7.48993L312.018 12.2298L311.979 0.682906L301.995 5.48994L302.002 7.48993ZM10.0016 8.46979L303.002 7.48657L302.995 5.48658L9.99488 6.4698L10.0016 8.46979Z"
          fill="#6D6665"
        />
      </svg>
      {/* Loop */}
      <div className={styles.PointerContainer}>
        {pointers?.map((ele, index) => {
          if (index % 2 == 0) {
            return (
              <div className={`${styles.pointer} ${styles.colorP}`}>
                <span className={styles.Text}>{ele}</span>
              </div>
            );
          }
          return (
            <div className={`${styles.pointer} ${styles.colorS}`}>
              <span className={styles.Text}>{ele}</span>
            </div>
          );
        })}
      </div>
    </div>
    // <div className={styles.parentContainer}>
    //   <div className={styles.taskName}>
    //     Dummy Task {!isTemplate && `|| 123`}
    //   </div>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="390"
    //     height="14"
    //     viewBox="0 0 313 14"
    //     fill="none"
    //   >
    //     <path
    //       d="M10.9949 6.46645L0.978917 1.72653L1.01767 13.2735L11.0016 8.46644L10.9949 6.46645ZM302.002 7.48993L312.018 12.2298L311.979 0.682906L301.995 5.48994L302.002 7.48993ZM10.0016 8.46979L303.002 7.48657L302.995 5.48658L9.99488 6.4698L10.0016 8.46979Z"
    //       fill="#6D6665"
    //     />
    //   </svg>
    //   {/* Loop */}
    //   <div className={styles.PointerContainer}>
    //     <div className={`${styles.pointer} ${styles.colorP}`}>
    //       <span className={styles.Text}>Pointer</span>
    //     </div>
    //     <div className={`${styles.pointer} ${styles.colorS}`}>
    //       <span className={styles.Text}>Pointer</span>
    //     </div>
    //     <div className={`${styles.pointer} ${styles.colorP}`}>
    //       <span className={styles.Text}>Pointer</span>
    //     </div>
    //     <div className={`${styles.pointer} ${styles.colorS}`}>
    //       <span className={styles.Text}>Pointer</span>
    //     </div>
    //     <div className={`${styles.pointer} ${styles.colorP}`}>
    //       <span className={styles.Text}>Pointer</span>
    //     </div>
    //     <div className={`${styles.pointer} ${styles.colorS}`}>
    //       <span className={styles.Text}>Pointer</span>
    //     </div>
    //     <div className={`${styles.pointer} ${styles.colorP}`}>
    //       <span className={styles.Text}>Pointer</span>
    //     </div>
    //     <div className={`${styles.pointer} ${styles.colorS}`}>
    //       <span className={styles.Text}>Pointer</span>
    //     </div>
    //   </div>
    // </div>
  );
};
