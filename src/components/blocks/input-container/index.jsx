import React from "react";
import styles from "./styles.module.css";

import Header from "../../static/header";
import Number from "../../static/numberBlock";
import BranchLoc from "../../static/branchBlock";
import ButtonBlock from "../buttonsBlock/index";
import CostBlock from "../../static/costBlock";

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
