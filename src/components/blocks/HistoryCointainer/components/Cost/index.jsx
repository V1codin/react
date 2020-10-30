import React from "react";
import styles from "./styles.module.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    cost: state.history.cost,
  };
};

function CostBlock(props) {
  const { cost } = props;
  if (cost.length === 0) return null;

  return (
    <div className={styles.container__block}>
      <h3 className={styles.history__article}>Вартість доставки</h3>
      <ul className={styles.history__list}>
        {cost.map((item, index) => {
          return (
            <li key={index} className={styles.list__item} name={index}>
              <Link to={`/cost/${index}`} className={styles.history__link}>
                <p className={styles.history__topic_redColor}>
                  Місто відправника:
                </p>
                <p>{item.senderName};</p>
                <p className={styles.history__topic_greenColor}>
                  Місто отримувача:
                </p>
                <p>{item.recipientName};</p>
                <p className={styles.history__topic_blackColor}>
                  Вага посилки: {item.deliveryWeight} кг.
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, null)(CostBlock);
