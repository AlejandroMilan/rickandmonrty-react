import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./assets/css/main.css";

const root = createRoot(document.getElementById("app")!);

root.render(<App />);
