import React, { useContext } from "react";
import styles from "./styles.module.css";

import Context from "../../../../../system/Context";

export default function () {
  const { trackRes } = useContext(Context);

  if (Object.keys(trackRes).length === 0) return null;

  return (
    <div className={styles.container__block}>
      <h3 className={styles.out__article}>Відстеження</h3>
      <p className={styles.out__topic}>Статус: {trackRes.Status}</p>
      <p className={styles.out__topic}>
        Маршрут: {trackRes.CitySender} - {trackRes.CityRecipient}
      </p>
    </div>
  );
}
