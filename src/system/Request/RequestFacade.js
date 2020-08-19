import RequestData from "./Request";

class RequestFacade {
  constructor() {
    this.request = new RequestData();
  }
  tracking({ number }) {
    return this.request.getTrackingData(number).then((r) => {
      if (r.data[0].StatusCode !== "3" && r.data[0].StatusCode !== "2") {
        return r;
      } else {
        throw Error("Error");
      }
    });
  }
  branchLoc({ branchCity, branchNumber }) {
    return this.request.getBranchLoc(branchCity).then(({ data }) => {
      return data.find((item) => item.Number === branchNumber);
    });
  }
  cost() {
    console.log("cost");
  }
}
export default RequestFacade;
