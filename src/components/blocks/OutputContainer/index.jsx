import React from "react";
import styles from "./styles.module.css";

import Track from "./components/Tracking";
import BranchLoc from "./components/BranchLoc";
import DeliveryCost from "./components/Cost";

export default function ({ checker }) {
  if (checker === false) return null;
  return (
    <div className={styles.container__block}>
      <Track />
      <BranchLoc />
      <DeliveryCost />
    </div>
  );
}
