import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./contexts/UserContext";
import CheckedProvider from "./contexts/CheckedContext";
import TicketProvider from "./contexts/TicketsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
