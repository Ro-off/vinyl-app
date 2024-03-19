import clsx from "clsx";
import PropTypes from "prop-types";
import { useGenres } from "../../hooks/useGenres";
import { useCountries } from "../../hooks/useCountries";
import { useFavorites } from "../../hooks/useFavorites";
import { useCollection } from "../../hooks/useCollection";

export function RenderCard({
  itemId,
  name,
  author,
  genreId,
  year,
  countryId,
  imageSrc,
}) {
  const { collection, addToCollection, removeFromCollection } = useCollection();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const genres = useGenres();
  const countries = useCountries();

  return (
    <div className="item" key={itemId}>
      <button
        type="button"
        className={clsx("like-button", "like-button-add", {
          "button-hidden": favorites.includes(itemId),
        })}
        title="like-button"
        onClick={() => addToFavorites(itemId)}
      >
        <img alt="Add to favorites" src="src/assets/icons/heart_outline.svg" />
      </button>
      <button
        type="button"
        className={clsx("like-button", "like-button-rem", {
          "button-hidden": !favorites.includes(itemId),
        })}
        title="like-button"
        onClick={() => removeFromFavorites(itemId)}
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
          "button-hidden": collection.includes(itemId),
        })}
        type="button"
        onClick={() => addToCollection(itemId)}
      >
        <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
      </button>
      <button
        className={clsx("remove-button", "collectionButton", {
          "button-hidden": !collection.includes(itemId),
        })}
        type="button"
        onClick={() => removeFromCollection(itemId)}
      >
        <p>Remove</p> <img alt="" src="/src/assets/icons/done.svg" />
      </button>
    </div>
  );
}

RenderCard.propTypes = {
  itemId: PropTypes.number,
  name: PropTypes.string,
  year: PropTypes.number,
  author: PropTypes.string,
  genreId: PropTypes.number,
  countryId: PropTypes.number,
  imageSrc: PropTypes.string,
};
