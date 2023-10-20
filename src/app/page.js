import { Graph } from "@/Components/Home/Graph/Graph";
import { Tasks } from "@/Components/Home/Tasks/Tasks";
import { Fragment } from "react";
import styles from "./page.module.scss";
import { Overview } from "@/Components/Home/Overview/Overview";
import { callOverviewData } from "@/api/apiHandler";

export default async function Home() {
  const OverviewData = await callOverviewData();
  return (
    <Fragment>
      <div className={styles.topLine}></div>
      <div className={styles.container}>
        <Overview data={OverviewData} />
        <div className={styles.seprater}></div>
        <Graph />
        <Tasks data={OverviewData} />
      </div>
      <div className={styles.bottomLine}></div>
    </Fragment>
  );
}
