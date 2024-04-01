import { createRoot } from "react-dom/client";
import { Application } from "./Application";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);
