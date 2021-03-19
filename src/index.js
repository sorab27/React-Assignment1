import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const app = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));

reportWebVitals();
