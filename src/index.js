import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { store } from "./Redux/Slices/store";
// import { Store } from "@reduxjs/toolkit";
import { store } from "./Redux/store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Toaster /> {/* Render Toaster here */}
      <App />
    </Provider>
  </BrowserRouter>

  
);
