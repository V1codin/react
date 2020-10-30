import React, { useContext } from "react";
import styles from "./styles.module.css";

import { AppContext } from "../../../../../system/Context";

export default function () {
  const { deliveryCostRes } = useContext(AppContext);

  if (deliveryCostRes.cost.length === 0) return null;

  return (
    <div className={styles.container__block}>
      <h3 className={styles.out__article}>Розрахунок доставки</h3>
      <p className={styles.out__topic}>
        Доставка буде коштувати {deliveryCostRes.cost.CostWarehouseWarehouse}{" "}
        грн.
      </p>
    </div>
  );
}
