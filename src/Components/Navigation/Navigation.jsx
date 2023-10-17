import Link from "next/link";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Home}>
        <Link href="/" className={styles.navText}>
          Home
        </Link>
      </div>
      <div className={styles.Lists}>
        <Link href="/list" className={styles.navText}>
          Lists
        </Link>
      </div>
      <div className={styles.Templates}>
        <Link href="/templates" className={styles.navText}>
          Templates
        </Link>
      </div>
      <div className={styles.Templates}>
        <Link href="/templates" className={styles.navText}>
          modify
        </Link>
      </div>
      <div className={styles.Templates}>
        <Link href="/templates" className={styles.navText}>
          new
        </Link>
      </div>
    </div>
  );
};
