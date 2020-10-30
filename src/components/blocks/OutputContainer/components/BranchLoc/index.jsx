import React, { useContext } from "react";
import styles from "./styles.module.css";

import { AppContext } from "../../../../../system/Context";

export default function () {
  const { branchLocRes } = useContext(AppContext);

  if (
    branchLocRes === null ||
    branchLocRes === undefined ||
    Object.keys(branchLocRes).length === 0
  )
    return null;

  const { Schedule } = branchLocRes;

  let topicMod = null;
  let workChecker = null;

  if (branchLocRes.WarehouseStatus === "Working") {
    topicMod = "working";
    workChecker = "Працює";
  } else {
    topicMod = "notworking";
    workChecker = "Не Працює";
  }
  const classes = styles.out__topic + " " + styles[topicMod];

  let scheduleDays = {
    Понеділок: Schedule.Monday,
    Вівторок: Schedule.Tuesday,
    Середа: Schedule.Wednesday,
    Четверг: Schedule.Thursday,
    "П'ятниця": Schedule.Friday,
    Субота: Schedule.Saturday,
    Неділя: Schedule.Sunday,
  };

  let list = [];

  for (let item in scheduleDays) {
    list.push(`${item}: ${scheduleDays[item]}`);
  }

  return (
    <div className={styles.container__block}>
      <h3 className={styles.out__article}>Відділення №{branchLocRes.Number}</h3>
      <p className={styles.out__topic}>Опис: {branchLocRes.Description}</p>
      <p className={classes}>{workChecker}</p>
      <p className={styles.out__topic}>Графік роботи</p>
      <ul className={styles.__list}>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
