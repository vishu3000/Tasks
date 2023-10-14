import styles from "./Overview.module.scss";

export const Overview = () => {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.heading}>
        <span className={styles.customHeading}>Overview</span>
        <svg
          width="191"
          height="16"
          viewBox="0 0 191 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Mask group">
            <path
              id="Arrow 2"
              d="M175 8C175 12.4183 178.582 16 183 16C187.418 16 191 12.4183 191 8C191 3.58172 187.418 0 183 0C178.582 0 175 3.58172 175 8ZM0 9.5H183V6.5H0V9.5Z"
              fill="#EBE671"
            />
          </g>
        </svg>
      </div>

      <div className={styles.overiewBox}>
        <span className={`${styles.pointers} ${styles.blue}`}>Active : 0</span>
        <span className={`${styles.pointers} ${styles.red}`}>To Pick : 0</span>
        <span className={`${styles.pointers} ${styles.green}`}>Done : 0</span>
        <span className={`${styles.pointers} ${styles.black}`}>
          Approved : 0
        </span>
      </div>
    </div>
  );
};
