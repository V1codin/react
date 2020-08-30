import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Todo from "../TodoItem";
import { connect } from "react-redux";

import DataBlock from "../Static/InputData";

const mapStateToProps = (state) => {
  return {
    todosArr: state.todos.todoEls,
    checkersObj: state.todos.checkers,
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
  const { todosArr, getTodos, checkersObj, updateCheckbox } = props;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [localStorage.length]);

  const delBtn = ({ target }) => {
    for (let item in checkersObj) {
      if (checkersObj[item] === true) {
        for (let local in localStorage) {
          if (local.includes("title")) {
            if (JSON.parse(localStorage[local]).id === parseInt(item)) {
              localStorage.removeItem(local);
              getTodos();
            }
          }
        }
      }
    }
    getTodos();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__input}>
        <DataBlock />
      </div>
      <div className={styles.wrapper__list}>
        <h2>Things to do</h2>
        <ul className={styles.__list}>
          {todosArr.map((item, index) => {
            return (
              <Todo
                title={item.title}
                key={item.id}
                handler={updateCheckbox}
                delClick={delBtn}
                data={item.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
