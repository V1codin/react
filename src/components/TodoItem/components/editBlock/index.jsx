import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import { AppContext } from "../../../../system/Context";

import Btn from "../../../modules/Button/Button";
import { useContext } from "react";

function EditInput({ checker, todoValue, id, showFn }) {
  const [state, setState] = useState({
    inpVal: todoValue,
  });

  const context = useContext(AppContext);

  if (!checker) return null;

  const edtiChange = (e) => {
    setState({ ...state, inpVal: e.target.value });
  };
  const editBtn = () => {
    const local = JSON.parse(localStorage.getItem(`title ${id}`));
    local["title"] = state.inpVal;
    localStorage.setItem(`title ${id}`, JSON.stringify(local));
    showFn();
    context.getTodos();
  };

  return (
    <div>
      <input
        type="text"
        onChange={edtiChange}
        value={state.inpVal}
        className={styles.__input}
      />
      <Btn className="__btn__aprove" title="Edit" onClick={editBtn} />
    </div>
  );
}

export default EditInput;
