import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    numbers: state.history.tracking,
  };
};

function TrackBlock(props) {
  const { numbers } = props;

  if (numbers.length === 0) return null;

  return (
    <div className={styles.container__block}>
      <h3 className={styles.history__article}>Історія відстеження</h3>
      <ul className={styles.history__list}>
        {numbers.map((item, index) => {
          return (
            <li key={index} className={styles.list__item} name={item}>
              <Link to={`/track/${item}`} className={styles.history__link}>
                Номер ЕН: {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, null)(TrackBlock);
