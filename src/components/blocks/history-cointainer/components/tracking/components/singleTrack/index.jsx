import React from "react";
import styles from "./styles.module.css";

// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNumber } from "../redux/asyncAction";
import { useState } from "react";
import { useEffect } from "react";

function TrackRes(props) {
  const { match } = props;

  const [state, setState] = useState({
    Number: "Номер",
    Status: "Статус",
    CitySender: "Відправник",
    CityRecipient: "",
  });
  const id = match.params.id;

  return (
    <div className={styles.container__block}>
      <h3 className={styles.out__article}>Відстеження</h3>
      <p className={styles.out__topic}>
        Номер ТТН: <span className={styles.out__span}>{state.Number}</span>
      </p>
      <p className={styles.out__topic}>Статус: {state.Status}</p>
      <p className={styles.out__topic}>
        Маршрут: {state.CitySender} - {state.CityRecipient}
      </p>
      <Link to="/" className={styles.out__link}>
        До головної
      </Link>
    </div>
  );
}

export default TrackRes;

/*
<div className={styles.container__block}>
      <h3 className={styles.out__article}>Відстеження</h3>
      <p className={styles.out__topic}>
        Номер ТТН: <span className={styles.out__span}>{trackRes.Number}</span>
      </p>
      <p className={styles.out__topic}>Статус: {trackRes.Status}</p>
      <p className={styles.out__topic}>
        Маршрут: {trackRes.CitySender} - {trackRes.CityRecipient}
      </p>
    </div>
    */