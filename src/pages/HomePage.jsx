import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { useMusicList } from "../hooks/useMusicList";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  const { collection, toggleCollection, favorites, toggleFavorites } =
    useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const musicList = useMusicList();
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
        onPageChange={setCurrentPage}
        pagesCount={pagesCount}
      />
    </>
  );
};
