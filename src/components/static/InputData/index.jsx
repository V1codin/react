import React, { useState } from "react";
import styles from "./styles.module.css";
import Btn from "../../Modules/Button/Button";

function UserData() {
  const [state, setState] = useState({
    value: "",
  });

  const onChange = ({ target }) => {
    setState({
      ...state,
      value: target.value,
    });
  };

  const onSubmit = () => {
    if (state.value.length > 0) {
      localStorage.setItem(
        localStorage.length + 1,
        JSON.stringify(state.value)
      );
    } else {
      alert("no");
    }
    setState({ ...state, value: "" });
  };

  const clearStorage = () => {
    localStorage.clear();
    setState({
      ...state,
    });
  };

  return (
    <div className={styles.__wrapper}>
      <input
        className={styles.__input}
        type="text"
        autoComplete="off"
        value={state.value}
        onChange={onChange}
      />
      <Btn className="btn__add" title="Add" onClick={onSubmit} />
      <Btn className="btn__clear" title="Del" onClick={clearStorage} />
    </div>
  );
}

export default UserData;
