import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
