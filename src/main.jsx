import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StreamLabApp from "./StreamLabApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StreamLabApp />
  </StrictMode>
);
