import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { AppliedFilters } from "../components/AppliedFilters/AppliedFilters";

import { useState } from "react";
import { useMusicList } from "../hooks/useMusicList";
import { useCollection } from "../hooks/useCollection";
import { useFavorites } from "../hooks/useFavorites";
import { useSearchParams } from "react-router-dom";

export const ResultsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const musicList = useMusicList();
  const [params, setParams] = useSearchParams();

  const { collection, toggleCollection } = useCollection();
  const { favorites, toggleFavorites } = useFavorites();

  const searchParams = {
    genre: params.get("genre"),
    artist: params.get("artist"),
    country: params.get("country"),
  };

  const resultsList = musicList.filter(filterItemsBySearchQuery);

  let itemsOnPage = 12;
  const pagesCount = Math.ceil(resultsList.length / itemsOnPage);

  function removeSearchFilter(id, value) {
    const newParams = params;
    newParams.delete(id, value);
    setParams(newParams);
  }

  function filterItemsByPagination(element, index) {
    if (
      index < currentPage * itemsOnPage &&
      index >= itemsOnPage * (currentPage - 1)
    )
      return true;
  }

  function filterItemsBySearchQuery(element) {
    if (
      (!params.get("genre") || searchParams.genre === element.genre) &&
      (!params.get("artist") || searchParams.artist === element.artist) &&
      (!params.get("country") || searchParams.country === element.country)
    )
      return true;
  }

  return (
    <>
      <AppliedFilters
        filtersList={searchParams}
        removeSearchFilter={removeSearchFilter}
      />
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
