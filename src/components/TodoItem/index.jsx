import React, { useState } from "react";
import styles from "./styles.module.css";

import Btn from "../modules/Button/Button";

function Todo({ title, delClick, handler, data }) {
  const [spanStyle, setSpanStyle] = useState({
    isToggled: false,
    style: styles.__topic,
  });

  const isChecked = ({ target }) => {
    const temp = {
      [target.name]: target.checked,
    };
    handler(temp);
  };

  const doneBtn = ({ target }) => {
    if (!spanStyle.isToggled) {
      setSpanStyle({
        ...spanStyle,
        isToggled: true,
        style: styles.__topic + " " + styles.__done,
      });
    } else {
      setSpanStyle({
        ...spanStyle,
        isToggled: false,
        style: styles.__topic,
      });
    }
  };

  return (
    <li className={styles.container__wrapper}>
      <span className={styles.__header}>
        <label>
          <input
            type="checkbox"
            onChange={isChecked}
            name={data}
            className={styles.__checkbox}
          />
          <span className={styles.__customCheck}></span>
          <span className={spanStyle.style}>{title}</span>
        </label>
      </span>
      <div className={styles.__btnWrapper}>
        <Btn className="__btn__aprove" title="Done" onClick={doneBtn} />
        <Btn className="__btn__cancel" title="Delete" onClick={delClick} />
        <Btn className="__edit" title="edit" type="edit" />
      </div>
    </li>
  );
}

export default Todo;
