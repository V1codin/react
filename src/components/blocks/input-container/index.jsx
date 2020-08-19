import React from "react";
import styles from "./styles.module.css";

import Header from "../../static/header";
import Number from "../../static/numberBlock";
import BranchLoc from "../../static/branchLoc";
import ButtonBlock from "../buttonsBlock/index";

export default function () {
  return (
    <div className={styles.container__wrapper}>
      <div className={styles.content}>
        <Header />
        <Number />
        <BranchLoc />
        <ButtonBlock />
      </div>
    </div>
  );
}
