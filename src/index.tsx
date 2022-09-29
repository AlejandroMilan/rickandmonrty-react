import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import axios from "axios";

import { Provider } from "react-redux";
import store from "./store";

import "./assets/css/main.css";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

const root = createRoot(document.getElementById("app")!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
