import React from "react";

import styles from "./styles.module.css";
import SenderSelect from "./senderSelect";
import RecipientSelect from "./recipientSelect/";
import DeliveryBlock from "./deliveryWeight";

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
