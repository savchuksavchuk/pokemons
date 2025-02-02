import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./0_app/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
