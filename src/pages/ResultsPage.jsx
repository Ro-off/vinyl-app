import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { useMusicList } from "../hooks/useMusicList";
import { useCollection } from "../hooks/useCollection";
import { useFavorites } from "../hooks/useFavorites";
import { useParams } from "react-router-dom";

export const ResultsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const musicList = useMusicList();
  const searchFilters = useParams();
  let itemsOnPage = 12;
  const url = window.location;
  console.log(url);

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
    if (element.genre === searchFilters.genre) return true;
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
