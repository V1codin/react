import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

import { AppContext } from "../../../../system/Context";

const mapStateToProps = (state) => {
  return {
    serverCities: state.cities.costCities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    extractData: (value, recipientName) => {
      dispatch({
        type: "EXTRACT_RECIPIENT",
        updated: value,
        recName: recipientName,
      });
    },
  };
};

function RecipientSelect(props) {
  const { extractData, serverCities } = props;
  const context = useContext(AppContext);

  const { costState, setCostState } = context;

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
    extractData(target.value, target.selectedOptions[0].text);
    setCostState({
      ...costState,
      selectRecipient: costState[target.innerHTML],
    });
  };

  const selectClasses = styles.inputs + " " + styles.option__select_textCl;

  return (
    <>
      <div className={styles.recipient}>
        <select
          className={selectClasses}
          onChange={selectHandler}
          value={costState.selectRecipient}
          id="CityRecipient"
        >
          <option disabled defaultValue>
            {costState.defaultRecipient}
          </option>
          {cities}
        </select>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipientSelect);
