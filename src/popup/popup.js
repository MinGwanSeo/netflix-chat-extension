import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/app";

const container = document.querySelector("div#app");
const root = createRoot(container);
root.render(<App />);
