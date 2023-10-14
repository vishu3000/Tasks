import { Fragment } from "react";
import { Overview } from "@/Components/Home/Overview/Overview";
import { Graph } from "@/Components/Home/Graph/Graph";
import styles from "./page.module.scss";
import { Tasks } from "@/Components/Home/Tasks/Tasks";

export default function Home() {
  return (
    <Fragment>
      <div className={styles.topLine}></div>
      <div className={styles.container}>
        <Overview />
        <div className={styles.seprater}></div>
        <Graph />
        <Tasks />
      </div>
      <div className={styles.bottomLine}></div>
    </Fragment>
  );
}
