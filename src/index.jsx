import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import NovaPoshta from "./components/main/index";

ReactDOM.render(
  <BrowserRouter>
    <NovaPoshta />
  </BrowserRouter>,
  document.getElementById("root")
);
