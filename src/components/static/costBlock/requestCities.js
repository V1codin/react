import Request from "../../../system/Request/RequestFacade";

const request = new Request();

export const citiesRequest = (stateObj, setStateFn) => {
  request.getCities().then(({ data }) => {
    setStateFn({
      ...stateObj,
      partOne: data.slice(0, 1998),
      partTwo: data.slice(1998, 3500),
      partThree: data.slice(3500),
    });
  });
};
