const defState = {
  costCities: [],
};

export default function history(state = defState, { type, serverScities }) {
  if (type === "GET_CITIES") {
    return {
      ...state,
      costCities: serverScities,
    };
  }
  return state;
}
