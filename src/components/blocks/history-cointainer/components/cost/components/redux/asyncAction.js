import RequestFacede from "../../../../../../../system/Request/RequestFacade";

const request = new RequestFacede();

export const getCost = (props, setState) => {
  request.cost(props).then(({ data }) => {
    setState(data[0].CostWarehouseWarehouse);
  });
};
