import React from "react";
import styles from "./styles.module.css";

import Track from "./components/tracking";

export default function ({ checker }) {
  if (checker === false) return null;
  return (
    <div className={styles.container__block}>
      <Track />
    </div>
  );
}
