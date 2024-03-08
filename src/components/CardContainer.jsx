import { renderCard } from "./Card";
import PropTypes from "prop-types";
import { musicList } from "./contentController";

export function CardContainer(prop) {
  console.log("0");
  console.log(prop);
  const {
    currentPage,
    itemsOnPage,
    // collection,
    // favorites,
    // addToCollection,
    // removeFromCollection,
    // addToFavorites,
    // removeFromFavorites,
    // genres,
    // countries,
  } = prop;

  function filterItemsOnPage(element, index) {
    if (
      index < currentPage * itemsOnPage &&
      index >= itemsOnPage * (currentPage - 1)
    )
      return true;
  }
  return (
    <div id="items-container">
      {musicList.filter(filterItemsOnPage).map(renderCard)}
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
