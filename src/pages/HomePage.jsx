import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { useMusicList } from "../hooks/useMusicList";
import { useCollection } from "../hooks/useCollection";
import { useFavorites } from "../hooks/useFavorites";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const musicList = useMusicList();
  let itemsOnPage = 12;

  const { collection, toggleCollection } = useCollection();
  const { favorites, toggleFavorites } = useFavorites();

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
      <MusicCardContainer
        musicList={musicList.filter(filterItemsOnPage)}
        collection={collection}
        favorites={favorites}
        toggleCollection={toggleCollection}
        toggleFavorites={toggleFavorites}
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pagesCount={pagesCount}
      />
    </>
  );
};
