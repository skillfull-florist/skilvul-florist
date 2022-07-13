import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./theme.css";
// context
import ContextProvidersHelper from "./context/ContextProvidersHelper";
import UserContextProvider from "./context/UserContext";
import AuthContextProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvidersHelper providers={[<UserContextProvider />, <AuthContextProvider />]}>
      <App />
    </ContextProvidersHelper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
