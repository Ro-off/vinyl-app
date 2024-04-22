import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { AppliedFilters } from "../components/AppliedFilters/AppliedFilters";
import { useMusicList } from "../hooks/useMusicList";
import { useSearchParams, Navigate, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useGenres } from "../hooks/useGenres";
import { useCountries } from "../hooks/useCountries";

export const ResultsPage = () => {
  const genres = useGenres();
  const countries = useCountries();

  const { collection, toggleCollection, favorites, toggleFavorites } =
    useOutletContext();

  const [params, setParams] = useSearchParams();

  const searchParams = {
    genre: params.get("genre"),
    artist: params.get("artist"),
    country: params.get("country"),
    decade: params.get("decade"),
  };

  let itemsOnPage = 12;

  const currentPage = Number(
    params.get("page") === null
      ? 1
      : // : Number(params.get("page")) > pagesCount
        // ? pagesCount
        Number(params.get("page"))
  );

  const musicList = useMusicList({
    ...searchParams,
    limit: currentPage * itemsOnPage - itemsOnPage,
    offset: 0,
  });

  // const resultsList = musicList.filter(filterItemsBySearchQuery);

  const pagesCount = Math.ceil(musicList.size / itemsOnPage);

  if (
    !searchParams.genre &&
    !searchParams.artist &&
    !searchParams.country &&
    !searchParams.decade
  ) {
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

  // function filterItemsByPagination(element, index) {
  //   if (
  //     index < currentPage * itemsOnPage &&
  //     index >= itemsOnPage * (currentPage - 1)
  //   )
  //     return true;
  // }

  function handlePageChange(e) {
    changeSearchFilter("page", e);
  }

  // function filterItemsBySearchQuery(element) {
  //   let decade = {};
  //   if (searchParams.decade) {
  //     decade.min = Number(searchParams.decade.split("-")[0]);
  //     decade.max = Number(
  //       searchParams.decade.slice(0, 2) + searchParams.decade.split("-")[1]
  //     );
  //   }
  //   if (
  //     (!params.get("genre") ||
  //       String(searchParams.genre).toLowerCase() ===
  //         String(element.genre).toLowerCase()) &&
  //     (!params.get("artist") ||
  //       String(searchParams.artist).toLowerCase() ===
  //         String(element.author).toLowerCase()) &&
  //     (!params.get("country") ||
  //       String(searchParams.country).toLowerCase() ===
  //         String(element.country).toLowerCase()) &&
  //     (!params.get("decade") ||
  //       (String(element.year) >= decade.min &&
  //         String(element.year) <= decade.max))
  //   )
  //     return true;
  // }

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
        filtersList={{
          ...searchParams,
          genre: !searchParams.genre
            ? null
            : String(
                genres.data.find(
                  (genre) => genre.id === Number(searchParams.genre)
                ).title
              ),
          country: !searchParams.country
            ? null
            : String(
                countries.data.find(
                  (country) => country.id === searchParams.country
                ).title
              ),
        }}
        removeSearchFilter={removeSearchFilter}
      />
      <MusicCardContainer
        musicList={musicList.data}
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
