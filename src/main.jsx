import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Application } from "./Application";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { ResultsPage } from "./pages/ResultsPage";
import { HelmetProvider } from "react-helmet-async";

async function bootstrap() {
  // if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser.js");
  worker.start({
    serviceWorker: {
      url: `mockServiceWorker.js`,
    },
  });
  // }
}

const appElement = document.getElementById("app");
const root = createRoot(appElement);
//const baseUrl = import.meta.env.BASE_URL;

const router = createBrowserRouter([
  {
    element: <Application />,
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/search/results",
        element: <ResultsPage />,
      },
      {
        path: "/*",
        element: <p>404 - Page not found</p>,
      },
    ],
  },
]);

bootstrap().then(() => {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StrictMode>
  );
});
