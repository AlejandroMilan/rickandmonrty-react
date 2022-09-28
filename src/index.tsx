import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./assets/css/main.css";

import axios from "axios";
axios.defaults.baseURL = "https://rickandmortyapi.com/api";

const root = createRoot(document.getElementById("app")!);

root.render(<App />);
