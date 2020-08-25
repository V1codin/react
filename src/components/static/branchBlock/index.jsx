import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    userData: state.inputData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    branchLCity: (data) => {
      return dispatch({
        type: "CHANGE_BRANCHCITY",
        updated: data,
      });
    },
    branchLNumber: (data) => {
      return dispatch({
        type: "CHANGE_BRANCHNUMBER",
        updated: data,
      });
    },
  };
};

function BranchLoc(props) {
  const { userData, branchLCity, branchLNumber } = props;

  const branchCityInput = ({ target }) => {
    branchLCity(target.value);
  };
  const branchNumberInput = ({ target }) => {
    branchLNumber(target.value);
  };

  return (
    <div className={styles.number__container}>
      <input
        className={styles.branchLoc__container}
        type="text"
        name="branchCity"
        autoComplete="off"
        placeholder="Місто відділення"
        onChange={branchCityInput}
        value={userData.branchCity}
      />
      <span
        id="user-branch-city__notification"
        className={styles.notifications}
      >
        Місто відділення
      </span>
      <input
        className={styles.branchLoc__container}
        type="text"
        name="branchNumber"
        autoComplete="off"
        placeholder="Номер відділення"
        onChange={branchNumberInput}
        value={userData.branchNumber}
      />
      <span
        id="user-branch-number__notification"
        className={styles.notifications}
      >
        Номер відділення
      </span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BranchLoc);
