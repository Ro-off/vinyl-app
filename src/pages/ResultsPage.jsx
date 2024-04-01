import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { useMusicList } from "../hooks/useMusicList";
import { useCollection } from "../hooks/useCollection";
import { useFavorites } from "../hooks/useFavorites";
import { useSearchParams } from "react-router-dom";

export const ResultsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const musicList = useMusicList();
  const [params] = useSearchParams();
  let itemsOnPage = 12;

  const { collection, toggleCollection } = useCollection();
  const { favorites, toggleFavorites } = useFavorites();

  const resultsList = musicList.filter(filterItemsBySearchQuery);
  const pagesCount = Math.ceil(resultsList.length / itemsOnPage);

  function filterItemsByPagination(element, index) {
    if (
      index < currentPage * itemsOnPage &&
      index >= itemsOnPage * (currentPage - 1)
    )
      return true;
  }

  function filterItemsBySearchQuery(element) {
    if (
      (!params.get("genre") || params.get("genre") === element.genre) &&
      (!params.get("artist") || params.get("artist") === element.artist) &&
      (!params.get("country") || params.get("country") === element.country)
    )
      return true;
  }

  return (
    <>
      <MusicCardContainer
        musicList={resultsList.filter(filterItemsByPagination)}
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
