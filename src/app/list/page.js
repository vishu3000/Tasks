import { List } from "@/Components/Lists/List/List";
import styles from "./listPage.module.scss";

export default function page() {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.buttonContainer}>
        <span className={styles.button}>Modify</span>
        <span className={styles.button}>+ Create New</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1453"
        height="350"
        viewBox="0 0 1453 14"
        fill="none"
        className={styles.svg}
      >
        <path
          d="M0.667716 5.48902C0.661651 8.43453 3.04454 10.8273 5.99006 10.8333C8.93557 10.8394 11.3283 8.45649 11.3344 5.51098C11.3404 2.56547 8.95753 0.172743 6.01202 0.166678C3.06651 0.160613 0.67378 2.54351 0.667716 5.48902ZM1441.67 8.45607C1441.66 11.4016 1444.04 13.7943 1446.99 13.8004C1449.94 13.8064 1452.33 11.4235 1452.33 8.47804C1452.34 5.53252 1449.96 3.1398 1447.01 3.13373C1444.07 3.12767 1441.67 5.51056 1441.67 8.45607ZM5.99898 6.5L1447 9.46705L1447 7.46706L6.0031 4.5L5.99898 6.5Z"
          fill="#D9D4C3"
        />
      </svg>
      <div className={styles.listContainer}>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
}
