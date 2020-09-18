import { combineReducers } from "redux";

import reducerWarning from "../../components/modules/warning/components/setts/reducer";
import inputData from "../../components/blocks/input-container/reducer";
import history from "../../components/blocks/history-cointainer/redux/reducer";

export default combineReducers({ reducerWarning, inputData, history });
