import RequestData from "./Request";

class RequestFacade {
  constructor() {
    this.request = new RequestData();
  }
  tracking({ number }) {
    return this.request.getTrackingData(number).then((r) => {
      if (r.data[0].StatusCode !== "3" && r.data[0].StatusCode !== "2") {
        return r;
      }
    });
  }
  branchLoc({ branchCity, branchNumber }) {
    return this.request.getBranchLoc(branchCity).then(({ data }) => {
      return data.find(
        (item) => item.Number === String(parseInt(branchNumber))
      );
    });
  }
  getCities() {
    return this.request.getCityRef();
  }
  cost(dataObj) {
    return this.request.getDeliveryCost(dataObj);
  }
}
export default RequestFacade;
