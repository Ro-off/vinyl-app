import { createRoot } from "react-dom/client";
import { Application } from "./Application";
import { StrictMode } from "react";

//// import { renderToString } from "react-dom/server";

const appElement = document.getElementById("app");
const root = createRoot(appElement);
////const view = renderToString(<Application />);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);

////console.log(view);
