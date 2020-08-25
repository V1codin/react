import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    changeNumber: (newNumber) => {
      return dispatch({
        type: "CHANGE_NUMBER",
        updated: newNumber,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    inputObj: state.inputData,
  };
};

function numberBlock(props) {
  const { changeNumber, inputObj } = props;

  const numberHandler = ({ target }) => {
    return changeNumber(target.value);
  };

  return (
    <div className={styles.number__container}>
      <input
        className={styles.number__input}
        type="text"
        name="number"
        autoComplete="off"
        placeholder="Номер посилки"
        onChange={numberHandler}
        value={inputObj.number}
      />
      <span id="user-number__notification" className={styles.notifications}>
        Номер посилки
      </span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(numberBlock);
