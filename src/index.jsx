import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./system/Reducer/Reducer";

import "./index.css";
import NovaPoshta from "./components/main/index";
import Warning from "./components/modules/warning/Warnings";

const store = createStore(Reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Warning />
      <NovaPoshta />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
