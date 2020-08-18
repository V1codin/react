import React from "react";
import InitBtn from "../../modules/button/Button";

export default function ({ init, clear }) {
  return (
    <>
      <InitBtn className="init__btn" title="Пошук" onClick={init} />
      <InitBtn className="init__btn" title="Очистити історію" onClick={clear} />
    </>
  );
}
