import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Todo from "../TodoItem";
import { connect } from "react-redux";

import DataBlock from "../Static/InputData";

const mapStateToProps = (state) => {
  return {
    todosArr: state.todos.todoEls,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => {
      return dispatch({
        type: "GET_TODOS",
      });
    },
  };
};
function Main(props) {
  const { todosArr, getTodos } = props;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [localStorage.length]);

  return (
    <div className={styles.container__wrapper}>
      <DataBlock />
      {todosArr.map((item, index) => {
        return <Todo title={item} key={index} />;
      })}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
