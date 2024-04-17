import { NavigationHeader } from "./components/NavigationHeader/NavigationHeader";
import { Outlet } from "react-router-dom";
import { useCollection } from "./hooks/useCollection";
import { useFavorites } from "./hooks/useFavorites";

export const Application = () => {
  const { collection, toggleCollection } = useCollection();
  const { favorites, toggleFavorites } = useFavorites();
  return (
    <>
      <NavigationHeader />
      <Outlet
        context={{
          collection,
          toggleCollection,
          favorites,
          toggleFavorites,
        }}
      />
    </>
  );
};
