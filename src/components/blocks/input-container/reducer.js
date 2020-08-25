const defState = {
  number: "",
  branchCity: "",
  branchNumber: "",
  sender: "",
  recipient: "",
  deliveryWeight: "",
};

export default function (state = defState, { type, updated }) {
  if (type === "CHANGE_NUMBER") {
    return {
      ...state,
      number: updated,
    };
  }
  if (type === "CHANGE_BRANCHCITY") {
    return {
      ...state,
      branchCity: updated,
    };
  }
  if (type === "CHANGE_BRANCHNUMBER") {
    return {
      ...state,
      branchNumber: updated,
    };
  }
  if (type === "CLEAR") {
    return defState;
  }
  if (type === "EXTRACT_SENDER") {
    return {
      ...state,
      sender: updated,
    };
  }
  if (type === "EXTRACT_RECIPIENT") {
    return {
      ...state,
      recipient: updated,
    };
  }
  if (type === "CHANGE_WEIGHT") {
    return {
      ...state,
      deliveryWeight: updated,
    };
  }
  return state;
}
