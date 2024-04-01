import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Application } from "./Application";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

const router = createBrowserRouter([
  {
    element: <Application />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
