import React from "react";
import styles from "./styles.module.css";

export default function Warning({ title }) {
  return (
    <div className={styles.warning__header}>
      Упс! Щось пішло не так
      <p className={styles.article}>{title}</p>
    </div>
  );
}
