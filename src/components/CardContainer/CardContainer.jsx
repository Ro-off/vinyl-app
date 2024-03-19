import { RenderCard } from "./Card";
import PropTypes from "prop-types";
import { useMusicList } from "../../hooks/useMusicList";

export function CardContainer(prop) {
  const { musicList } = useMusicList();
  const { currentPage, itemsOnPage } = prop;

  function filterItemsOnPage(element, index) {
    if (
      index < currentPage * itemsOnPage &&
      index >= itemsOnPage * (currentPage - 1)
    )
      return true;
  }
  return (
    <div id="items-container">
      {musicList.filter(filterItemsOnPage).map(RenderCard)}
    </div>
  );
}

CardContainer.PropsTypes = {
  musicList: PropTypes.array,
  currentPage: PropTypes.number,
  itemsOnPage: PropTypes.number,
  collection: PropTypes.array,
  favorites: PropTypes.array,
  addToCollection: PropTypes.func,
  removeFromCollection: PropTypes.func,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
};
