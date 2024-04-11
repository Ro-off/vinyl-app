import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { AppliedFilters } from "../components/AppliedFilters/AppliedFilters";
import { useMusicList } from "../hooks/useMusicList";
import { useSearchParams, Navigate, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const ResultsPage = () => {
  const { collection, toggleCollection, favorites, toggleFavorites } =
    useOutletContext();

  const [params, setParams] = useSearchParams();

  const searchParams = {
    genre: params.get("genre"),
    artist: params.get("artist"),
    country: params.get("country"),
  };

  const musicList = useMusicList();

  const resultsList = musicList.filter(filterItemsBySearchQuery);

  let itemsOnPage = 12;
  const pagesCount = Math.ceil(resultsList.length / itemsOnPage);

  const currentPage = Number(
    params.get("page") === null
      ? 1
      : Number(params.get("page")) > pagesCount
      ? pagesCount
      : Number(params.get("page"))
  );

  if (!searchParams.genre && !searchParams.artist && !searchParams.country) {
    return <Navigate to="/search" />;
  }

  function removeSearchFilter(id, value) {
    const newParams = new URLSearchParams(params);
    newParams.delete(id, value);
    setParams(newParams);
  }

  function changeSearchFilter(id, value) {
    const newParams = new URLSearchParams(params);
    newParams.delete(id, currentPage);
    newParams.append(id, value);
    setParams(newParams);
  }

  function filterItemsByPagination(element, index) {
    if (
      index < currentPage * itemsOnPage &&
      index >= itemsOnPage * (currentPage - 1)
    )
      return true;
  }

  function handlePageChange(e) {
    changeSearchFilter("page", e);
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
        onPageChange={handlePageChange}
        pagesCount={pagesCount}
      />
    </>
  );
};
