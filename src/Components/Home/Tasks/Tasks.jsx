"use client";
import { dataArray } from "@/utils";
import styles from "./Tasks.module.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/Context";

export const Tasks = () => {
  const { homeData, setHomeData, Bool, setBool } = useContext(Context);

  /**
   * To Pick Handlers
   */
  const [checkedState1, setCheckedState1] = useState(
    new Array(dataArray(homeData).toPick.length).fill(false)
  );
  const [checkedArray1, setCheckedArray1] = useState([]);
  const checkBoxHandler1 = (position) => {
    let temp = [];
    const updatedCheckedState = checkedState1.map((item, index) =>
      index === position ? !item : item
    );
    updatedCheckedState.map((bool, index) => {
      if (bool === true) {
        temp.push(dataArray(homeData).toPick[index]);
      }
    });
    setCheckedArray1(temp);
    setCheckedState1(updatedCheckedState);
  };
  const toPickMoverHandler = () => {
    let temp_obj_array = homeData;
    homeData.map((obj, index) => {
      if (checkedArray1.includes(obj.Task)) {
        temp_obj_array[index].Category = "Active";
      }
    });
    setBool(!Bool);
    setHomeData(temp_obj_array);
    setCheckedArray1([]);
    setCheckedState1(new Array(dataArray(homeData).toPick.length).fill(false));
  };

  /**
   * Active Handlers
   */
  const [checkedState2, setCheckedState2] = useState(
    new Array(dataArray(homeData).active.length).fill(false)
  );
  const [checkedArray2, setCheckedArray2] = useState([]);
  const checkBoxHandler2 = (position) => {
    let temp = [];
    const updatedCheckedState = checkedState2.map((item, index) =>
      index === position ? !item : item
    );
    updatedCheckedState.map((bool, index) => {
      if (bool === true) {
        temp.push(dataArray(homeData).active[index]);
      }
    });
    setCheckedArray2(temp);
    setCheckedState2(updatedCheckedState);
  };
  const activeMoverHandler = () => {
    let temp_obj_array = homeData;
    homeData.map((obj, index) => {
      if (checkedArray2.includes(obj.Task)) {
        temp_obj_array[index].Category = "Done";
      }
    });
    setBool(!Bool);
    setHomeData(temp_obj_array);
    setCheckedArray2([]);
    setCheckedState2(new Array(dataArray(homeData).active.length).fill(false));
  };

  /**
   * Done Handlers
   */
  const [checkedState3, setCheckedState3] = useState(
    new Array(dataArray(homeData).done.length).fill(false)
  );
  const [checkedArray3, setCheckedArray3] = useState([]);
  const checkBoxHandler3 = (position) => {
    let temp = [];
    const updatedCheckedState = checkedState3.map((item, index) =>
      index === position ? !item : item
    );
    updatedCheckedState.map((bool, index) => {
      if (bool === true) {
        temp.push(dataArray(homeData).done[index]);
      }
    });

    setCheckedArray3(temp);
    setCheckedState3(updatedCheckedState);
  };
  const doneMoverHandler = () => {
    let temp_obj_array = homeData;
    homeData.map((obj, index) => {
      if (checkedArray3.includes(obj.Task)) {
        temp_obj_array[index].Category = "Approved";
      }
    });
    setBool(!Bool);
    setHomeData(temp_obj_array);
    setCheckedArray3([]);
    setCheckedState3(new Array(dataArray(homeData).done.length).fill(false));
  };

  /**
   * Approved Handlers
   */
  const [checkedState4, setCheckedState4] = useState(
    new Array(dataArray(homeData).approved.length).fill(false)
  );
  const checkBoxHandler4 = (position) => {
    const updatedCheckedState = checkedState4.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState4(updatedCheckedState);
  };
  useEffect(() => {
    setCheckedState2(new Array(dataArray(homeData).active.length).fill(false));
  }, [checkedState1]);
  useEffect(() => {
    setCheckedState3(new Array(dataArray(homeData).done.length).fill(false));
  }, [checkedState2]);
  useEffect(() => {
    setCheckedState4(
      new Array(dataArray(homeData).approved.length).fill(false)
    );
  }, [checkedState3]);

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
          {dataArray(homeData).toPick.map((ele, index) => {
            return (
              <div className={`${styles.TaskContainer} ${styles.redBg}`}>
                <span
                  className={`${styles.checkmark} ${
                    checkedState1[index] ? styles.redCB : ""
                  }`}
                  onClick={() => checkBoxHandler1(index)}
                ></span>
                <span className={styles.customCheckbox}>{ele}</span>
              </div>
            );
          })}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="400"
          viewBox="0 0 54 30"
          fill="none"
          onClick={() => toPickMoverHandler()}
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
          {dataArray(homeData).active.map((ele, index) => {
            return (
              <div className={`${styles.TaskContainer} ${styles.blueBg}`}>
                <span
                  className={`${styles.checkmark} ${
                    checkedState2[index] ? styles.blueCB : ""
                  }`}
                  onClick={() => checkBoxHandler2(index)}
                ></span>
                <span className={styles.customCheckbox}>{ele}</span>
              </div>
            );
          })}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="400"
          viewBox="0 0 54 30"
          fill="none"
          onClick={() => activeMoverHandler()}
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
          {dataArray(homeData).done.map((ele, index) => {
            return (
              <div className={`${styles.TaskContainer} ${styles.greenBg}`}>
                <span
                  className={`${styles.checkmark} ${
                    checkedState3[index] ? styles.greenCB : ""
                  }`}
                  onClick={() => checkBoxHandler3(index)}
                ></span>
                <span className={styles.customCheckbox}>{ele}</span>
              </div>
            );
          })}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="400"
          viewBox="0 0 54 30"
          fill="none"
          onClick={() => doneMoverHandler()}
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
          {dataArray(homeData).approved.map((ele, index) => {
            return (
              <div className={`${styles.TaskContainer} ${styles.blackBg}`}>
                <span
                  className={`${styles.checkmark} ${
                    checkedState4[index] ? styles.blackCB : ""
                  }`}
                  onClick={() => checkBoxHandler4(index)}
                ></span>
                <span className={styles.customCheckbox}>{ele}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
