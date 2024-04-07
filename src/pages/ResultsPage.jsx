import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { AppliedFilters } from "../components/AppliedFilters/AppliedFilters";

import { useState } from "react";
import { useMusicList } from "../hooks/useMusicList";
import {
  useSearchParams,
  Navigate,
  useOutletContext,
  useParams,
  useNavigate,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const ResultsPage = () => {
  const { collection, toggleCollection, favorites, toggleFavorites } =
    useOutletContext();
  const { page: pageUrl } = useParams();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(Number(pageUrl));
  const musicList = useMusicList();

  const [params, setParams] = useSearchParams();

  const searchParams = {
    genre: params.get("genre"),
    artist: params.get("artist"),
    country: params.get("country"),
  };

  if (!searchParams.genre && !searchParams.artist && !searchParams.country) {
    return <Navigate to="/search" />;
  }
  const resultsList = musicList.filter(filterItemsBySearchQuery);

  let itemsOnPage = 12;
  const pagesCount = Math.ceil(resultsList.length / itemsOnPage);

  function removeSearchFilter(id, value) {
    const newParams = new URLSearchParams(params);
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

  function changePage(e) {
    setCurrentPage(e);
    navigate("/" + e);
  }

  function filterItemsBySearchQuery(element) {
    if (
      (!params.get("genre") ||
        String(searchParams.genre).toLowerCase() ===
          String(element.genre).toLowerCase()) &&
      (!params.get("artist") ||
        String(searchParams.artist).toLowerCase() ===
          String(element.author).toLowerCase()) &&
      (!params.get("country") ||
        String(searchParams.country).toLowerCase() ===
          String(element.country).toLowerCase())
    )
      return true;
  }

  return (
    <>
      <Helmet>
        <title>
          {"Results: " +
            Object.values(searchParams)
              .filter((e) => e !== null)
              .join(", ")}
        </title>
      </Helmet>

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
        onPageChange={changePage}
        pagesCount={pagesCount}
      />
    </>
  );
};
