const initianal = {
  todoEls: [],
  checkers: {},
};

export default function MainReducer(state = initianal, action) {
  if (action.type === "GET_TODOS") {
    let tempAr = [];
    /*
    for (let i = 0; i < localStorage.length; i++) {
      //   tempAr.push(JSON.parse(localStorage[i]));
      tempAr.push(JSON.parse(localStorage[i]));
    
    }
    */
    /*
    for (let i = localStorage.length; i >= 0; i--) {
      //   tempAr.push(JSON.parse(localStorage[i]));
      if (localStorage[i] === undefined) {
        continue;
      }
      tempAr.push(JSON.parse(localStorage[i]));
    }
    */
    for (let item in localStorage) {
      if (item.includes("title")) {
        tempAr.push(JSON.parse(localStorage[item]));
      }
    }

    tempAr.sort((a, b) => (a.id < b.id ? 1 : -1));

    return {
      ...state,
      //   todoEls: tempAr.reverse(),
      todoEls: tempAr,
    };
  }
  if (action.type === "UPDATE_CHECKERS") {
    return {
      ...state,
      checkers: { ...state.checkers, ...action.updated },
    };
  }
  if (action.type === "ADD_CHECKER") {
    const temp = action.newChecker;
    return {
      ...state,
      checkers: { ...state.checkers, [temp]: false },
    };
  }
  /*
  if (action.type === "DEL_TODO") {
    return {
      ...state,
      todoEls: state.todoEls.filter((item) => {
        return item.title !== action.delTitle;
      }),
    };
  }
  */

  return state;
}
