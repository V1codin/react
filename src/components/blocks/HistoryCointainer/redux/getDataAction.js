export const init = () => {
  const defState = {
    tracking: [],
    branchLoc: [],
    cost: [],
  };

  Object.keys(localStorage).forEach((item) => {
    if (item.includes("Tracking")) {
      defState.tracking.push(localStorage[item]);
    }
    if (item.includes("Location")) {
      defState.branchLoc.push(JSON.parse(localStorage[item]));
    }
    if (item.includes("Cost")) {
      defState.cost.push(JSON.parse(localStorage[item]));
    }
  });

  return defState;
};
