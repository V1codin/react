import React from "react";

import styles from "./styles.module.css";
import SenderSelect from "./SenderSelect";
import RecipientSelect from "./RecipientSelect";
import DeliveryBlock from "./DeliveryWeight";

function CostBlock() {
  return (
    <div className={styles.number__container}>
      <SenderSelect />
      <RecipientSelect />
      <DeliveryBlock />
    </div>
  );
}

export default CostBlock;
