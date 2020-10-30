import React, { useContext } from "react";
import styles from "./styles.module.css";

import SelectBtn from "../Button";
import setts from "./Setts.json";

import { AppContext } from "../../../system/Context";

export default function ({ checker }) {
  const { selectState, setSelect, selectorBtn } = useContext(AppContext);

  const boxChange = ({ target }) => {
    setSelect({ ...selectState, [target.id]: target.checked });
  };

  if (!checker) return null;
  return (
    <>
      <form className={styles.selector}>
        <h3 className={styles.select__article}>{setts.articleText}</h3>
        {setts.optionsText.map((item, index) => {
          return (
            <div className={styles.selector__option} key={item}>
              <label
                name={setts.requestName[index]}
                className={styles.selector__label}
                htmlFor={setts.requestName[index]}
              >
                {item}
              </label>
              <input
                type="checkbox"
                checked={selectState.inputV}
                className={styles.selector__checkbox}
                onChange={boxChange.bind(this)}
                id={setts.requestName[index]}
              ></input>
              <span className={styles.__customCheck}></span>
            </div>
          );
        })}
        <SelectBtn
          className="select__btn"
          classList={true}
          title="Шукати"
          onClick={selectorBtn}
        />
      </form>
    </>
  );
}
