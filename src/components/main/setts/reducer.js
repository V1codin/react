const initianal = {
  todoEls: [],
};

export default function MainReducer(state = initianal, action) {
  if (action.type === "GET_TODOS") {
    const tempAr = [];

    for (let item in localStorage) {
      if (item.includes("Todo")) {
        tempAr.push(localStorage[item]);
      }
    }

    return {
      ...state,
      todoEls: tempAr,
    };
  }

  return state;
}
