import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { MusicCardContainer } from "../components/MusicCardContainer/MusicCardContainer";
import { useMusicList } from "../hooks/useMusicList";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  const { collection, toggleCollection, favorites, toggleFavorites } =
    useOutletContext();
  const { page: pageUrl } = useParams();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(Number(pageUrl));

  const musicList = useMusicList();
  let itemsOnPage = 12;

  const pagesCount = Math.ceil(musicList.length / itemsOnPage);

  //?not working properly with navigate for some reason
  // if (currentPage > pagesCount) changePage(pagesCount);
  // else if (!currentPage) changePage(1);

  function filterItemsOnPage(element, index) {
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
        onPageChange={changePage}
        pagesCount={pagesCount}
      />
    </>
  );
};
