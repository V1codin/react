import React from "react";
import styles from "./styles.module.css";

import Track from "./components/Tracking";
import BranchLoc from "./components/BranchLoc";
import DeliveryCost from "./components/Cost";

export default function () {
  if (localStorage.length === 0) return null;
  return (
    <div className={styles.container__block}>
      <Track />
      <BranchLoc />
      <DeliveryCost />
    </div>
  );
}
