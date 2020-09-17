import React, { useState, useEffect, useMemo } from "react";
import { CostSelect } from "../../../system/Context";
import { citiesRequest } from "./requestCities";

import styles from "./styles.module.css";
import SenderSelect from "./senderSelect";
import RecipientSelect from "./recipientSelect/";
import DeliveryBlock from "./deliveryWeight";

function CostBlock() {
  const [serverRes, setServerRes] = useState({
    partOne: [],
    partTwo: [],
    partThree: [],
  });

  const [state, setState] = useState({
    defaultSend: "Місто відправлення",
    selectSend: "Місто відправлення",
    refSend: "",

    defaultRecipient: "Місто отримування",
    selectRecipient: "Місто отримування",
    refRec: "",
  });

  useEffect(() => {
    citiesRequest(serverRes, setServerRes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cities = useMemo(() => {
    const first = serverRes.partOne.map((item) => {
      return (
        <option value={item.Ref} name={item.Ref} key={item.Ref}>
          {item.Description}
        </option>
      );
    });

    const second = serverRes.partTwo.map((item) => {
      return (
        <option value={item.Ref} name={item.Ref} key={item.Ref}>
          {item.Description}
        </option>
      );
    });
    const third = serverRes.partThree.map((item) => {
      return (
        <option value={item.Ref} name={item.Ref} key={item.Ref}>
          {item.Description}
        </option>
      );
    });

    const res = [...first, ...second, ...third];

    return res;
  }, [serverRes]);

  return (
    <div className={styles.number__container}>
      <CostSelect.Provider
        value={{
          state,
          setState,
          cities,
        }}
      >
        <SenderSelect />
        <RecipientSelect />
      </CostSelect.Provider>
      <DeliveryBlock />
    </div>
  );
}

export default CostBlock;
