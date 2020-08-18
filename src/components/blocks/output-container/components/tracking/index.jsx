import React, { useContext } from "react";
import styles from "./styles.module.css";

import ResContext from "../../../../../system/Context";

export default function () {
  const myContext = useContext(ResContext);

  return (
    <div className={styles.container__block}>
      <h3 className={styles.out__article}>Відстеження</h3>
      <p className={styles.out__topic}>Статус: {myContext.Status}</p>
      <p className={styles.out__topic}>
        Маршрут: {myContext.CitySender} - {myContext.CityRecipient}
      </p>
    </div>
  );
}
