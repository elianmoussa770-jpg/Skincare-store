import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ShopProvider from "./context/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ShopProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ShopProvider>
);