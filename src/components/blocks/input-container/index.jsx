import React from "react";
import styles from "./styles.module.css";

import Header from "../../static/header";
import Number from "../../static/numberBlock";
import ButtonBlock from "../buttonsBlock/index";

export default function ({ setState, state, initBtn, clearBtn }) {
  return (
    <div className={styles.container__wrapper}>
      <div className={styles.content}>
        <Header />
        <Number stateFn={setState} state={state} value={state.numberV} />

        <ButtonBlock init={initBtn} clear={clearBtn} />
      </div>
    </div>
  );
}
