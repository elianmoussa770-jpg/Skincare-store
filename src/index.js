import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShopProvider from "./context/ShopContext";
import "./styles/global.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ShopProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ShopProvider>
);