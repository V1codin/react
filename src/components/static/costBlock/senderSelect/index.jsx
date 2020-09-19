import React, { useContext } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

import { CostSelect } from "../../../../system/Context";
import { useState } from "react";
import { useEffect } from "react";

const mapStateToProps = (state) => {
  return {
    serverCities: state.cities.costCities,
  };
};

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
  const { extractData, serverCities } = props;
  const { state, setState } = useContext(CostSelect);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const res = serverCities.map((item) => {
      return (
        <option value={item.Ref} name={item.Ref} key={item.Ref}>
          {item.Description}
        </option>
      );
    });
    setCities(res);
  }, [serverCities]);

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

export default connect(mapStateToProps, mapDispatchToProps)(SenderSelect);
