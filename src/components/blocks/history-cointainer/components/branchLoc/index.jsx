import React from "react";
import styles from "./styles.module.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    location: state.history.branchLoc,
  };
};

function LocationBlock(props) {
  const { location } = props;

  if (location.length === 0) return null;

  return (
    <div className={styles.container__block}>
      <h3 className={styles.history__article}>Історія розташування</h3>
      <ul className={styles.history__list}>
        {location.map((item, index) => {
          return (
            <li key={index} className={styles.list__item}>
              <Link to={`/location/${index}`} className={styles.history__link}>
                <p>Місто: {item.city}</p>
                <p className={styles.list__topic_color}>
                  Відділення № {item.branchNumber}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, null)(LocationBlock);
