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

  const onChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const onSubmit = () => {
    if (state.value.length > 0) {
      // localStorage.setItem(`${localStorage.length}`, state.value);
      localStorage.setItem(
        `${localStorage.length}`,
        JSON.stringify({ title: state.value, id: localStorage.length })
      );
      getTodos();
    } else {
      alert("no");
    }
    setState({ ...state, value: "" });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit();
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
      <form onSubmit={formSubmit}>
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
          <Btn className="btn__clear" title="Clear" onClick={clearStorage} />
        </div>
      </form>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(UserData);
