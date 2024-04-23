import { NavigationHeader } from "./components/NavigationHeader/NavigationHeader";
import { Outlet } from "react-router-dom";
import { useCollection } from "./hooks/useCollection";
import { useFavorites } from "./hooks/useFavorites";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";

export const Application = () => {
  const { collection, toggleCollection } = useCollection();
  const { favorites, toggleFavorites } = useFavorites();
  return (
    <>
      <NavigationHeader />
      <Suspense fallback={<Loader />}>
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
};
