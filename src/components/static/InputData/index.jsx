import React, { useState } from "react";
import styles from "./styles.module.css";
import Btn from "../../Modules/Button/Button";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => {
      return dispatch({
        type: "GET_TODOS",
      });
    },
  };
};

function UserData(props) {
  const [state, setState] = useState({
    value: "",
  });
  const { getTodos } = props;

  const onChange = ({ target }) => {
    setState({
      ...state,
      value: target.value,
    });
  };

  const onSubmit = () => {
    if (state.value.length > 0) {
      localStorage.setItem(`Todo ${localStorage.length + 1}`, state.value);
      getTodos();
    } else {
      alert("no");
    }
    setState({ ...state, value: "" });
  };

  const clearStorage = () => {
    localStorage.clear();
    setState({
      ...state,
      value: "",
    });
    getTodos();
  };

  return (
    <div className={styles.__wrapper}>
      <input
        className={styles.__input}
        type="text"
        autoComplete="off"
        value={state.value}
        onChange={onChange}
        placeholder="Enter todo"
      />
      <div className={styles.btn__container}>
        <Btn className="btn__add" title="Add" onClick={onSubmit} />
        <Btn className="btn__clear" title="Del" onClick={clearStorage} />
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(UserData);
