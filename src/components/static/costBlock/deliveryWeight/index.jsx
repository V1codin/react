import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    weightState: state.inputData.deliveryWeight,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeDeliveryWeight: (weight) => {
      return dispatch({
        type: "CHANGE_WEIGHT",
        updated: weight,
      });
    },
  };
};

function DeliveryWeight(props) {
  const { weightState, changeDeliveryWeight } = props;

  const inputHandler = ({ target }) => {
    return changeDeliveryWeight(target.value);
  };

  return (
    <div className={styles.deliveryWeight}>
      <input
        value={weightState}
        onChange={inputHandler}
        id="input__user-deliveryWeight"
        className={styles.inputs}
        type="text"
        autoComplete="off"
        placeholder="кг"
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryWeight);
