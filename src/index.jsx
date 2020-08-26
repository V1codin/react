import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/*
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./system/Reducer/Reducer";
*/
import "./index.css";

import App from "./components/App";

// const store = createStore(Reducer, composeWithDevTools());

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
