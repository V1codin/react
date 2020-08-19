import React, { useContext } from "react";
import styles from "./styles.module.css";

import Context from "../../../system/Context";

export default function () {
  const { state, setState } = useContext(Context);

  const branchCityInput = ({ target }) => {
    setState({ ...state, branchCity: target.value });
  };
  const branchNumberInput = ({ target }) => {
    setState({ ...state, branchNumber: target.value });
  };

  return (
    <div className={styles.number__container}>
      <input
        className={styles.branchLoc__container}
        type="text"
        name="branchCity"
        autoComplete="off"
        placeholder="Місто відділення"
        onChange={branchCityInput}
        value={state.branchCity}
      />
      <span
        id="user-branch-city__notification"
        className={styles.notifications}
      >
        Місто відділення
      </span>
      <input
        className={styles.branchLoc__container}
        type="text"
        name="branchNumber"
        autoComplete="off"
        placeholder="Номер відділення"
        onChange={branchNumberInput}
        value={state.branchNumber}
      />
      <span
        id="user-branch-number__notification"
        className={styles.notifications}
      >
        Номер відділення
      </span>
    </div>
  );
}
