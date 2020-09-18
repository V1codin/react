import React from "react";
import styles from "./styles.module.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    state: state.results.tracking,
  };
};

function TrackRes(props) {
  const { state, match } = props;

  const id = match.params.id;

  const result = state.filter((item) => item.Number === id)[0];

  return (
    <div className={styles.container__block}>
      <h3 className={styles.out__article}>Відстеження</h3>
      <p className={styles.out__topic}>
        Номер ТТН: <span className={styles.out__span}>{result.Number}</span>
      </p>
      <p className={styles.out__topic}>Статус: {result.Status}</p>
      <p className={styles.out__topic}>
        Маршрут: {result.CitySender} - {result.CityRecipient}
      </p>
      <Link to="/" className={styles.out__link}>
        До головної
      </Link>
    </div>
  );
}

export default connect(mapStateToProps, null)(TrackRes);

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
