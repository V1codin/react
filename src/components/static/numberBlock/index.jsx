import React from "react";
import styles from "./styles.module.css";

export default function ({ stateFn, state }) {
  const numberInput = ({ target }) => {
    stateFn({ ...state, number: target.value });
  };

  return (
    <div className={styles.number__container}>
      <input
        className={styles.number__input}
        type="text"
        name="number"
        autoComplete="off"
        placeholder="Номер посилки"
        onChange={numberInput}
        value={state.number}
      />
      <span id="user-number__notification" className={styles.notifications}>
        Номер посилки
      </span>
    </div>
  );
}
