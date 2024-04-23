import { NavigationHeader } from "./components/NavigationHeader/NavigationHeader";
import { Outlet } from "react-router-dom";
import { useCollection } from "./hooks/useCollection";
import { useFavorites } from "./hooks/useFavorites";
import { Suspense } from "react";

export const Application = () => {
  const { collection, toggleCollection } = useCollection();
  const { favorites, toggleFavorites } = useFavorites();
  return (
    <>
      <NavigationHeader />
      <Suspense fallback={<Loading />}>
        <Outlet
          context={{
            collection,
            toggleCollection,
            favorites,
            toggleFavorites,
          }}
        />
      </Suspense>
    </>
  );

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
};
