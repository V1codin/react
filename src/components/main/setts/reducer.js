const initianal = {
  todoEls: [],
  checkers: {},
};

export default function MainReducer(state = initianal, action) {
  if (action.type === "GET_TODOS") {
    let tempAr = [];
    for (let item in localStorage) {
      if (item.includes("title")) {
        tempAr.push(JSON.parse(localStorage[item]));
      }
    }

    tempAr.sort((a, b) => (a.id < b.id ? 1 : -1));

    return {
      ...state,
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

  return state;
}
