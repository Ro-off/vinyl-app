import { NavigationHeader } from "./components/NavigationHeader/NavigationHeader";
import { Outlet } from "react-router-dom";
import { useCollection } from "./hooks/useCollection";
import { useFavorites } from "./hooks/useFavorites";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import { ErrorBoundary } from "react-error-boundary";
import { NotificationContainer } from "./components/Notifications/NotificationContainer";
import { Notification } from "./components/Notifications/Notification/Notification";

export const Application = () => {
  const { collection, toggleCollection } = useCollection();
  const { favorites, toggleFavorites } = useFavorites();

  return (
    <>
      <NavigationHeader />
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallback={<Notification text={"Error"} type="error" />}>
          <Outlet
            context={{
              collection,
              toggleCollection,
              favorites,
              toggleFavorites,
            }}
          />
        </ErrorBoundary>
      </Suspense>
      <NotificationContainer />
    </>
  );
};
