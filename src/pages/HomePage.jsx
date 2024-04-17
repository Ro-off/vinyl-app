import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { useMusicList } from "../hooks/useMusicList";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  const { collection, toggleCollection, favorites, toggleFavorites } =
    useOutletContext();
  const musicList = useMusicList();
  let itemsOnPage = 12;

  const pagesCount = Math.ceil(musicList.length / itemsOnPage);

  const [params, setParams] = useSearchParams();

  const currentPage = Number(
    params.get("page") === null
      ? 1
      : Number(params.get("page")) > pagesCount
      ? pagesCount
      : Number(params.get("page"))
  );

  function filterItemsOnPage(element, index) {
    if (
      index < currentPage * itemsOnPage &&
      index >= itemsOnPage * (currentPage - 1)
    )
      return true;
  }

  function handlePageChange(e) {
    changeSearchFilter("page", e);
  }

  function changeSearchFilter(id, value) {
    const newParams = new URLSearchParams(params);
    newParams.delete(id, currentPage);
    newParams.append(id, value);
    setParams(newParams);
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <MusicCardContainer
        musicList={musicList.filter(filterItemsOnPage)}
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