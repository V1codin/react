import { combineReducers } from "redux";

import warning from "../../components/modules/warning/components/setts/reducer";
import inputData from "../../components/blocks/input-container/reducer";
import history from "../../components/blocks/history-cointainer/redux/reducer";

import cities from "../CitiesReducer/reducer";

export default combineReducers({ warning, inputData, history, cities });
