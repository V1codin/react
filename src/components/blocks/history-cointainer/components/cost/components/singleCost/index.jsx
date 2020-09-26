import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCost } from "../redux/asyncAction";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const mapStateToProps = (state) => {
  return {
    cost: state.history.cost,
  };
};

function CostRes(props) {
  const { match, cost } = props;

  const id = match.params.id;
  const option = cost[id];

  const [state, setState] = useState(0);

  const resStyle = styles.out__topic + " " + styles.out__topic_blueColor;

  useEffect(() => {
    getCost(option, setState);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container__block}>
      <h3 className={styles.out__article}>Розрахунок ціни</h3>

      <p className={styles.out__topic + " " + styles.out__topic_redColor}>
        Відправлення з:
      </p>
      <p className={styles.out__topic}>{option.senderName}</p>
      <p className={styles.out__topic + " " + styles.out__topic_greenColor}>
        Отримання у:
      </p>
      <p className={styles.out__topic}>{option.recipientName}</p>
      <p className={styles.out__topic}>Вага посилки: {option.deliveryWeight}</p>

      {state ? <p className={resStyle}>Буде коштувати: {state} грн.</p> : ""}

      <Link to="/" className={styles.out__link}>
        До головної
      </Link>
    </div>
  );
}

export default connect(mapStateToProps, null)(CostRes);
