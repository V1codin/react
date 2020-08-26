import React from "react";
import styles from "./styles.module.css";

import Btn from "../Modules/Button/Button";

function Todo({ title, checkers, handler }) {
  const isChecked = ({ target }) => {
    const checkbox = target.parentElement.outerText;
    const temp = {
      [checkbox]: target.checked,
    };
    handler(temp);
  };
  const delBtn = ({ target }) => {
    console.dir(target);
  };

  return (
    <li className={styles.container__wrapper}>
      <span className={styles.__header}>
        <input type="checkbox" onChange={isChecked} />
        <span className={styles.__topic}>{title}</span>
      </span>
      <span className={styles.__btnWrapper}>
        <Btn className="__btn__aprove" title="Done" />
        <Btn className="__btn__cancel" title="Delete" onClick={delBtn} />
      </span>
    </li>
  );
}

export default Todo;
