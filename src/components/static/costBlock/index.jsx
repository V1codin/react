import React, { useState, useEffect, useMemo } from "react";
import styles from "./styles.module.css";

import SenderSelect from "./senderSelect";
import RecipientSelect from "./recipientSelect/";
import Request from "../../../system/Request/RequestFacade";
import { CostSelect } from "../../../system/Context";

function CostBlock() {
  const [serverRes, setServerRes] = useState([]);

  const [state, setState] = useState({
    defaultSend: "Місто відправлення",
    selectSend: "Місто відправлення",
    refSend: "",

    defaultRecipient: "Місто отримування",
    selectRecipient: "Місто отримування",
    refRec: "",
  });

  useEffect(() => {
    const request = new Request();

    request.getCities().then(({ data }) => {
      setServerRes(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cities = useMemo(
    () =>
      serverRes.map((item) => {
        return (
          <option value={item.Ref} name={item.Ref} key={item.Ref}>
            {item.Description}
          </option>
        );
      }),
    [serverRes]
  );
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

      <div className={styles.deliveryWeight}>
        <input
          id="input__user-deliveryWeight"
          className={styles.inputs}
          type="text"
          autoComplete="off"
          placeholder="кг"
        />
      </div>
    </div>
  );
}

export default CostBlock;
