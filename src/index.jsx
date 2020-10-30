import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import Reducer from "./system/Reducer/Reducer";
import Request from "./system/Request/RequestFacade";
import CitiesRef from "./system/CitiesRefRequest/citiesRequest";

import "./index.css";
import App from "./components/App";
import Warning from "./components/modules/Warning";

const store = createStore(Reducer, composeWithDevTools());
const request = new Request();
CitiesRef(request, store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Warning />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
