import { useState } from "react";
import { NavigationHeader } from "./components/NavigationHeader";
import { FilterSection } from "./components/Filter";
import { NavigationPages } from "./components/NavigationPages";
import { CardContainer } from "./components/CardContainer";

export const Application = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let itemsOnPage = 12;

  function addToCollection() {
    console.error("Collection not implemented");
  }

  function removeFromCollection() {
    console.error("Collection not implemented");
  }

  function addToFavorites() {
    console.error("Favorites not implemented");
  }

  function removeFromFavorites() {
    console.error("Favorites not implemented");
  }

  return (
    <>
      <NavigationHeader />
      <FilterSection />
      <CardContainer
        currentPage={currentPage}
        itemsOnPage={itemsOnPage}
        addToCollection={addToCollection}
        removeFromCollection={removeFromCollection}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
      <NavigationPages
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
