import React from "react";
import styles from "./styles.module.css";

import Btn from "../Modules/Button/Button";

function Todo({ title }) {
  return (
    <div className={styles.container__wrapper}>
      <div className={styles.__header}>
        <input type="checkbox" id="checkbox" />
        <label className={styles.__topic} htmlFor="checkbox">
          {title}
        </label>
      </div>
      <div className={styles.__btnWrapper}>
        <Btn className="__btn__aprove" title="Done" />
        <Btn className="__btn__cancel" title="Delete" />
      </div>
    </div>
  );
}

export default Todo;
