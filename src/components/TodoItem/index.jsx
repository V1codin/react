import React, { useState } from "react";
import styles from "./styles.module.css";

import Btn from "../Modules/Button/Button";

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
        <input type="checkbox" onChange={isChecked} name={data} />
        <span className={spanStyle.style}>{title}</span>
      </span>
      <span className={styles.__btnWrapper}>
        <Btn className="__btn__aprove" title="Done" onClick={doneBtn} />
        <Btn className="__btn__cancel" title="Delete" onClick={delClick} />
      </span>
    </li>
  );
}

export default Todo;
