import React, { useContext } from "react";
import InitBtn from "../../modules/Button";

import { AppContext } from "../../../system/Context";

export default function () {
  const { initFn, clearFn } = useContext(AppContext);

  return (
    <>
      <InitBtn className="init__btn" title="Пошук" onClick={initFn} />
      <InitBtn
        className="init__btn"
        title="Очистити історію"
        onClick={clearFn}
      />
    </>
  );
}
