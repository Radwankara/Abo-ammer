import React from "react";
import { createRoot } from "react-dom/client";
import AbuAmmarApp from "../abu_ammar_supermarket";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AbuAmmarApp />
  </React.StrictMode>,
);
