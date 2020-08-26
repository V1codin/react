import React from "react";
import styles from "./styles.module.css";
import Btn from "../../Modules/Button/Button";

function UserData() {
  return (
    <div className={styles.__wrapper}>
      <input className={styles.__input} type="text" autoComplete="off" />
      <Btn className="btn__add" title="Add" />
    </div>
  );
}

export default UserData;
