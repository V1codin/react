import React from "react";
import styles from "./styles.module.css";

import Header from "../../static/Header";
import Number from "../../static/NumberBlock";
import BranchLoc from "../../static/BranchBlock";
import ButtonBlock from "../ButtonsBlock";
import CostBlock from "../../static/CostBlock";

export default function () {
  return (
    <div className={styles.container__wrapper}>
      <div className={styles.content}>
        <Header />
        <Number />
        <BranchLoc />
        <CostBlock />
        <ButtonBlock />
      </div>
    </div>
  );
}
