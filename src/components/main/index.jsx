import React from "react";
import styles from "./styles.module.css";
import Todo from "../TodoItem";

import DataBlock from "../Static/InputData";

function Main() {
  return (
    <div className={styles.container__wrapper}>
      <DataBlock />
      <Todo />
    </div>
  );
}

export default Main;
