import React from "react";
import styles from "./styles.module.css";

export default function () {
  return (
    <div className={styles.wrapper__header}>
      <div className={styles.header__trackingLogo}></div>
      <div className={styles.header__title}>
        <div className={styles.title__wrapper}>
          <span>НОВА</span> <br />
          <span>ПОШТА</span>
        </div>
      </div>
    </div>
  );
}
