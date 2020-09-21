import RequestFacede from "../../../../../../../system/Request/RequestFacade";

const request = new RequestFacede();

export const getLocation = ({ city, branchNumber }, setState) => {
  request
    .branchLoc({
      branchCity: city,
      branchNumber: parseInt(branchNumber),
    })
    .then((r) => {
      setState(r);
    });
};
