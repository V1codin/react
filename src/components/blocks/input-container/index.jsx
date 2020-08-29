import React from "react";
import styles from "./styles.module.css";

import Header from "../../Static/Header";
import Number from "../../Static/numberBlock";
import BranchLoc from "../../Static/branchBlock";
import ButtonBlock from "../buttonsBlock/index";
import CostBlock from "../../Static/costBlock";

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
