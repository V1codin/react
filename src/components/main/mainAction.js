import RequestFacede from "../../system/Request/RequestFacade";
import Valid from "../../system/Valid/Validation";

const request = new RequestFacede();
const validObj = new Valid();

export const mainAction = ({
  selectState,
  setTrackRes,
  initWarning,
  setBranchLoc,
  setDeliveryCost,
  setState,
  userData,
  deliveryCostRes,
  state,
}) => {
  const res = {};

  for (let key in selectState) {
    if (selectState[key] === true) {
      switch (key) {
        case "tracking":
          const checkNumber = validObj.validateNumber(userData.number);
          if (checkNumber === true) {
            request.tracking(userData).then((r) => {
              if (r) {
                const { data } = r;
                setTrackRes(data[0]);
                setState({ ...state, isOut: true, isSelect: false });
              } else {
                initWarning("noNumberWarning");
              }
            });
          } else {
            initWarning(checkNumber);
          }
          break;
        case "branchLoc":
          const checkBranch = validObj.validationBranch(
            userData.branchCity,
            userData.branchNumber
          );
          if (checkBranch === true) {
            request.branchLoc(userData).then((res) => {
              if (res) {
                setBranchLoc(res);
                setState({ ...state, isOut: true, isSelect: false });
              } else {
                initWarning("incorrectCityBranchWarning");
              }
            });
          } else {
            initWarning(checkBranch);
          }
          break;
        case "cost":
          const checkCost = validObj.validationCost(
            userData.sender,
            userData.recipient,
            userData.deliveryWeight
          );

          if (checkCost === true) {
            request.cost(userData).then(({ data }) => {
              if (data) {
                setDeliveryCost({
                  ...deliveryCostRes,
                  cost: data[0],
                });
                setState({ ...state, isOut: true, isSelect: false });
              } else {
                initWarning("noCostDataWarning");
              }
            });
          } else {
            initWarning(checkCost);
          }
          break;
        default:
          setState({ ...state, isSelect: false });
      }
    } else if (Object.values(selectState).every((item) => item === false)) {
      return initWarning("noSelectOptions");
    }
  }
  setState({ ...state, isSelect: false });

  return res;
};
