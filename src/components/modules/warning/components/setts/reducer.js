const defState = {
  init: [],
};

export default function (state = defState, { type, nameOfWarning }) {
  if (type === "INIT_WARNING") {
    return {
      ...state,
      init: [...state.init, nameOfWarning],
    };
  }
  if (type === "CLOSE_WARNING") {
    if (state.init.length >= 1) {
      return {
        init: [state.init.pop()],
        ...state,
      };
    } else {
      return {
        ...state,
        init: [],
      };
    }
  }
  return state;
}
