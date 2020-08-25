import React, { useContext } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

import { CostSelect } from "../../../../system/Context";

const mapDispatchToProps = (dispatch) => {
  return {
    extractData: (data) => {
      dispatch({
        type: "EXTRACT_SENDER",
        updated: data,
      });
    },
  };
};

function SenderSelect(props) {
  const { extractData } = props;
  const { state, setState, cities } = useContext(CostSelect);

  const selectHandler = ({ target }) => {
    extractData(target.value);
    setState({ ...state, selectSend: state[target.innerHTML] });
  };

  const selectClasses = styles.inputs + " " + styles.option__select_textCl;

  return (
    <>
      <div className={styles.sender}>
        <select
          className={selectClasses}
          onChange={selectHandler}
          value={state.selectSend}
          id="CitySender"
        >
          <option disabled defaultValue>
            {state.defaultSend}
          </option>
          {cities}
        </select>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(SenderSelect);
