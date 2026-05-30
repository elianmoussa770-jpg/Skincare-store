import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ShopProvider from "./context/ShopContext";
import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter basename="/Skincare-store">
    <App />
  </BrowserRouter>
);
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/Skincare-store">
    <App />
  </BrowserRouter>
);
root.render(
  <ShopProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopProvider>
);