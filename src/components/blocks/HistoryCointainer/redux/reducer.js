import { init } from "./getDataAction";

const defState = init();

export default function history(
  state = defState,
  { type, number, location, cost }
) {
  if (type === "HISTORY_ADD_TRACK") {
    return {
      ...state,
      tracking: [...state.tracking, number],
    };
  }
  if (type === "HISTORY_ADD_BRANCH_LOC") {
    return {
      ...state,
      branchLoc: [...state.branchLoc, location],
    };
  }
  if (type === "HISTORY_ADD_DELIVERY_COST") {
    return {
      ...state,
      cost: [...state.cost, cost],
    };
  }
  if (type === "CLEAR") {
    return {
      tracking: [],
      branchLoc: [],
      cost: [],
    };
  }

  return state;
}
