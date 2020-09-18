import React from "react";
import styles from "./styles.module.css";

import Track from "./components/tracking";
import BranchLoc from "./components/branchLoc";
import DeliveryCost from "./components/cost";

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
