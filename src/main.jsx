import { createRoot } from "react-dom/client";
import { Application } from "./Application.jsx";
import { StrictMode } from "react";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);
