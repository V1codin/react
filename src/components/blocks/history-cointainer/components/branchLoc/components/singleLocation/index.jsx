import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getLocation } from "../redux/asyncAction";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const mapStateToProps = (state) => {
  return {
    location: state.history.branchLoc,
  };
};

function LocalRes(props) {
  const { match, location } = props;

  const [state, setState] = useState({
    Number: "",
    Description: "",
    Schedule: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
    },
  });

  const id = match.params.id;
  const branch = location[id];

  useEffect(() => {
    getLocation(branch, setState);
    // eslint-disable-next-line
  }, []);

  const { Schedule } = state;

  let topicMod = null;
  let workChecker = null;

  if (state.WarehouseStatus === "Working") {
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
      <h3 className={styles.out__article}>Відділення №{state.Number}</h3>
      <p className={styles.out__topic}>Місто: {state.CityDescription}</p>
      <p className={styles.out__topic}>Опис: {state.Description}</p>
      <p className={classes}>{workChecker}</p>
      <p className={styles.out__topic}>Графік роботи</p>
      <ul className={styles.__list}>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Link to="/" className={styles.out__link}>
        До головної
      </Link>
    </div>
  );
}

export default connect(mapStateToProps, null)(LocalRes);
