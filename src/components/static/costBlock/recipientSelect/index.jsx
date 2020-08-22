import React, { useContext } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

import { CostSelect } from "../../../../system/Context";

const mapDispatchToProps = (dispatch) => {
  return {
    extractData: (data) => {
      dispatch({
        type: "EXTRACT_RECIPIENT",
        updated: data,
      });
    },
  };
};

function RecipientSelect(props) {
  const { extractData } = props;
  const context = useContext(CostSelect);

  const { state, setState, cities } = context;

  const selectHandler = ({ target }) => {
    extractData(target.value);
    setState({ ...state, selectRecipient: state[target.innerHTML] });
  };

  const selectClasses = styles.inputs + " " + styles.option__select_textCl;

  return (
    <>
      <div className={styles.recipient}>
        <select
          className={selectClasses}
          onChange={selectHandler}
          value={state.selectRecipient}
          id="CityRecipient"
        >
          <option disabled defaultValue>
            {state.defaultRecipient}
          </option>
          {cities}
        </select>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(RecipientSelect);
