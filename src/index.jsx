import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Reducer from "./system/Reducer/Reducer";

import "./index.css";
import App from "./components/App";
import Warning from "./components/modules/warning/";

const store = createStore(Reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Warning />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
