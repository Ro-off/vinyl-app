import { useState } from "react";
import { NavigationHeader } from "./components/NavigationHeader/NavigationHeader";
import { Filter } from "./components/Filter/Filter";
import { Pagination } from "./components/Pagination/Pagination";
import { MusicCardContainer } from "./components/MusicCardContainer/MusicCardContainer";
import { useMusicList } from "./hooks/useMusicList";
import { useCollection } from "./hooks/useCollection";
import { useFavorites } from "./hooks/useFavorites";

export const Application = () => {
  const [currentPage, onCurrentPage] = useState(1);
  const musicList = useMusicList();
  const { collection } = useCollection();
  const { favorites } = useFavorites();
  let itemsOnPage = 12;

  const pagesCount = Math.ceil(musicList.length / itemsOnPage);

  function filterItemsOnPage(element, index) {
    if (
      index < currentPage * itemsOnPage &&
      index >= itemsOnPage * (currentPage - 1)
    )
      return true;
  }
  return (
    <>
      <NavigationHeader />
      <Filter />
      <MusicCardContainer
        musicListToDisplay={musicList.filter(filterItemsOnPage).map((item) => ({
          ...item,
          inCollection: collection.includes(item.itemId),
          inFavorites: favorites.includes(item.itemId),
        }))}
      />
      <Pagination
        currentPage={currentPage}
        onCurrentPage={onCurrentPage}
        pagesCount={pagesCount}
      />
    </>
  );
};
