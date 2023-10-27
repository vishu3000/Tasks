"use client";
import React, { useState, useEffect } from "react";
import { Context } from "@/Context";

import styles from "./HomePage.module.scss";
import { Overview } from "@/Components/Home/Overview/Overview";
import { Graph } from "@/Components/Home/Graph/Graph";
import { Tasks } from "@/Components/Home/Tasks/Tasks";

export default function HomePage({ data }) {
  const [homeData, setHomeData] = useState(data);
  const [Bool, setBool] = useState(false);
  return (
    <Context.Provider value={{ homeData, setHomeData, Bool, setBool }}>
      <>
        <div className={styles.topLine}></div>
        <div className={styles.container}>
          <Overview />
          <div className={styles.seprater}></div>
          <Graph />
          <Tasks />
        </div>
        <div className={styles.bottomLine}></div>
      </>
    </Context.Provider>
  );
}
