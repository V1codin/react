import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Todo from "../TodoItem";
import { connect } from "react-redux";

import DataBlock from "../Static/InputData";

const mapStateToProps = (state) => {
  return {
    todosArr: state.todos.todoEls,
    checkersArr: state.todos.checkers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => {
      return dispatch({
        type: "GET_TODOS",
      });
    },
    updateCheckbox: (updatedStr) => {
      return dispatch({
        type: "UPDATE_CHECKERS",
        updated: updatedStr,
      });
    },
  };
};
function Main(props) {
  const { todosArr, getTodos, checkersArr, updateCheckbox } = props;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [localStorage.length]);

  return (
    <div className={styles.container__wrapper}>
      <DataBlock />
      <ul className={styles.__list}>
        {todosArr.map((item, index) => {
          return (
            <Todo
              title={item}
              key={index}
              handler={updateCheckbox}
              checkers={checkersArr}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
