import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
