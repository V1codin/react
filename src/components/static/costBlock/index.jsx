import React, { useState } from "react";
import { CostSelect } from "../../../system/Context";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import SenderSelect from "./senderSelect";
import RecipientSelect from "./recipientSelect/";
import DeliveryBlock from "./deliveryWeight";

const mapStateToProps = (state) => {
  return {
    serverCities: state.cities.costCities,
  };
};

function CostBlock() {
  const [state, setState] = useState({
    defaultSend: "Місто відправлення",
    selectSend: "Місто відправлення",
    refSend: "",

    defaultRecipient: "Місто отримування",
    selectRecipient: "Місто отримування",
    refRec: "",
  });

  return (
    <div className={styles.number__container}>
      <CostSelect.Provider
        value={{
          state,
          setState,
        }}
      >
        <SenderSelect />
        <RecipientSelect />
      </CostSelect.Provider>
      <DeliveryBlock />
    </div>
  );
}

export default connect(mapStateToProps, null)(CostBlock);
