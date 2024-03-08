import clsx from "clsx";
import {
  collection,
  favorites,
  genres,
  countries,
  addToFavorites,
  removeFromFavorites,
  addToCollection,
  removeFromCollection,
} from "./contentController";

export function renderCard({
  itemId,
  name,
  author,
  genreId,
  year,
  countryId,
  imageSrc,
}) {
  let inCollection = collection.includes(itemId);
  let inFavorites = favorites.includes(itemId);

  return (
    <div className="item" key={itemId}>
      <button
        type="button"
        className={clsx("like-button", "like-button-add", {
          "button-hidden": inFavorites,
        })}
        title="like-button"
        onClick={() => addToFavorites()}
      >
        <img alt="Add to favorites" src="src/assets/icons/heart_outline.svg" />
      </button>
      <button
        type="button"
        className={clsx("like-button", "like-button-rem", {
          "button-hidden": !inFavorites,
        })}
        title="like-button"
        onClick={() => removeFromFavorites()}
      >
        <img alt="Add to favorites" src="src/assets/icons/heart_filled.svg" />
      </button>
      <img src={imageSrc} alt="" />
      <div className="info-container">
        <h5>{name}</h5>
        <h6>{author}</h6>
        <div className="item-info">
          <div>
            <p>Genre:</p>
            <p>{genres[genreId]}</p>
          </div>
          <div>
            <p>Year:</p>
            <p>{year}</p>
          </div>
          <div>
            <p>Country:</p>
            <p>{countries[countryId]}</p>
          </div>
        </div>
      </div>
      <button
        className={clsx("add-button", "collectionButton", {
          "button-hidden": inCollection,
        })}
        type="button"
        onClick={() => addToCollection()}
      >
        <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
      </button>
      <button
        className={clsx("remove-button", "collectionButton", {
          "button-hidden": !inCollection,
        })}
        type="button"
        onClick={() => removeFromCollection()}
      >
        <p>Remove</p> <img alt="" src="/src/assets/icons/done.svg" />
      </button>
    </div>
  );
}
