import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Reducer from "./system/Reducer/Reducer";
import Request from "./system/Request/RequestFacade";

import "./index.css";
import App from "./components/App";
import Warning from "./components/modules/warning/";

const store = createStore(Reducer, composeWithDevTools());

const request = new Request();
request.getCities().then(({ data }) => {
  store.dispatch({
    type: "GET_CITIES",
    serverScities: data,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Warning />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
