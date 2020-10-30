const defState = {
  number: "",
  branchCity: "",
  branchNumber: "",
  sender: "",
  sendName: "",
  recipient: "",
  recName: "",
  deliveryWeight: "",
};

export default function (
  state = defState,
  { type, updated, sendName, recName }
) {
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
  if (type === "CLEAR_INPUT") {
    return defState;
  }
  if (type === "EXTRACT_SENDER") {
    return {
      ...state,
      sender: updated,
      sendName: sendName,
    };
  }
  if (type === "EXTRACT_RECIPIENT") {
    return {
      ...state,
      recipient: updated,
      recName: recName,
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
