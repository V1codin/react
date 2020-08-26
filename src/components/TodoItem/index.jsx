import React from "react";
import styles from "./styles.module.css";

import Btn from "../Modules/Button/Button";

function Todo(props) {
  const { title } = props;

  return (
    <div className={styles.container__wrapper}>
      <p className={styles.__topic}>{title}</p>
      <div className={styles.__btnWrapper}>
        <Btn className="__btn__aprove" title="Done" />
        <Btn className="__btn__cancel" title="Delete" />
      </div>
    </div>
  );
}

export default Todo;
