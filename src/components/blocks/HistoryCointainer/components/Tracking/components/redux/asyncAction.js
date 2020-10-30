import RequestFacede from "../../../../../../../system/Request/RequestFacade";

const request = new RequestFacede();

export const getNumber = (id, setState) => {
  request
    .tracking({
      number: id,
    })
    .then((r) => {
      setState(r.data[0]);
    });
};
