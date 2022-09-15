
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import {CookiesProvider} from "react-cookie"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SSRProvider>
    <CookiesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </CookiesProvider>
  </SSRProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
