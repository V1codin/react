import { combineReducers } from "redux";

import reducerWarning from "../../components/modules/warning/components/setts/reducer";
import inputData from "../../components/blocks/input-container/reducer";

export default combineReducers({ reducerWarning, inputData });
