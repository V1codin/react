const initianal = {
  todoEls: [],
  checkers: {},
};

export default function MainReducer(state = initianal, action) {
  if (action.type === "GET_TODOS") {
    const tempAr = [];

    for (let i = 0; i < localStorage.length; i++) {
      //   tempAr.push(JSON.parse(localStorage[i]));
      tempAr.push(localStorage[i]);
    }
    return {
      ...state,
      todoEls: tempAr.reverse(),
    };
  }
  if (action.type === "UPDATE_CHECKERS") {
    return {
      ...state,
      checkers: { ...state.checkers, ...action.updated },
    };
  }

  return state;
}
