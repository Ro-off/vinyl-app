import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Application } from "./Application";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { ResultsPage } from "./pages/ResultsPage";
import { HelmetProvider } from "react-helmet-async";

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
        //example: /search
        path: "/search",
        element: <SearchPage />,
      },
      {
        //example: /search?genre=rock&artist=queen&country=uk
        path: "/search/results",
        element: <ResultsPage />,
      },
      {
        path: "*",
        element: <p>Page no found</p>,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
