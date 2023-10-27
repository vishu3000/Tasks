"use client";
import {
  TypeFour,
  TypeOne,
  TypeThree,
  TypeTwo,
} from "@/Components/Inputs/Inputs";
import styles from "./ModifyList.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function ModifyList() {
  const [formData, setFormData] = useState({
    Task_ID: "",
    Change_Task_Name: "",
    Add_Pointer: [],
    Change_Assignee: "",
    // Delete_Pointer: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");
  // const [addTask, setAddTask] = useState(false);
  const [pointer, setPointer] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleInputTwo = (e) => {
    const fieldValue = e.target.value;
    setPointer(fieldValue);
  };

  const handleAdd = () => {
    const fieldName = "Add_Pointer";
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: [...formData.Add_Pointer, pointer],
    }));
    setPointer("");
  };

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    console.log(formData);

    // POST the data to the URL of the form
    // fetch(formURL, {
    //   method: "POST",
    //   body: data,
    //   headers: {
    //     accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setFormData({
    //       name: "",
    //       email: "",
    //       message: "",
    //     });

    //     setFormSuccess(true);
    //     setFormSuccessMessage(data.submission_text);
    //   });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.mainContainer}>
        <span className={styles.modalHeading}>Modify Task</span>

        <form
          method="POST"
          action="https://www.formbackend.com/f/664decaabbf1c319"
          onSubmit={submitForm}
        >
          <div className={styles.formConatiner}>
            <div className={styles.col1}>
              <TypeOne
                label="Task ID"
                name="Task_ID"
                onChange={handleInput}
                value={formData.Task_ID}
              />
              <TypeTwo
                label="Change Task Name"
                name="Change_Task_Name"
                onChange={handleInput}
                value={formData.Change_Task_Name}
              />
              <TypeTwo
                label="Add Pointer"
                name="Add_Pointer"
                onChange={handleInputTwo}
                value={pointer}
              />
              <div className={styles.add} onClick={handleAdd}>
                <span className={styles.addText}>Add</span>
              </div>
            </div>
            <div className={styles.col2}>
              <TypeTwo
                label="Change Assignee"
                name="Change_Assignee"
                onChange={handleInput}
                value={formData.Change_Assignee}
              />
              {/* <TypeTwo
                label="Delete Pointer"
                name="Delete_Pointer"
                onChange={handleInput}
                value={formData.Delete_Pointer}
              /> */}
            </div>
          </div>

          <div className={styles.submitContainer}>
            <Link href="/list">
              <div className={styles.cancel}>
                <span className={styles.submitText}>Cancel</span>
              </div>
            </Link>

            <div className={styles.create}>
              <button type="submit" className={styles.submitText}>
                Create
              </button>
            </div>
          </div>
        </form>

        {/* <div className={styles.col1}>
          <TypeOne name="Task ID" />
          <TypeTwo name="Change Task Name" />
          <TypeThree name="Add Task" />
          <TypeFour name="Number" />
          <TypeFour name="Task" />
        </div>
        <div className={styles.col2}>
          <TypeTwo name="Change Assignee" />
          <TypeTwo name="Delete Tasks" />
        </div> */}
      </div>
    </div>
  );
}
