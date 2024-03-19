import clsx from "clsx";
import PropTypes from "prop-types";
import { useGenres } from "../../../hooks/useGenres";
import { useCountries } from "../../../hooks/useCountries";
import { useFavorites } from "../../../hooks/useFavorites";
import { useCollection } from "../../../hooks/useCollection";
import styles from "./Card.module.css";

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
    <div className={styles.item} key={itemId}>
      <button
        type="button"
        className={clsx(
          styles.likeButton,
          "like-button-add",
          favorites.includes(itemId) && styles.buttonHidden
        )}
        title="like-button"
        onClick={() => addToFavorites(itemId)}
      >
        <img alt="Add to favorites" src="src/assets/icons/heart_outline.svg" />
      </button>
      <button
        type="button"
        className={clsx(
          styles.likeButton,
          "like-button-rem",
          !favorites.includes(itemId) && styles.buttonHidden
        )}
        title="like-button"
        onClick={() => removeFromFavorites(itemId)}
      >
        <img alt="Add to favorites" src="src/assets/icons/heart_filled.svg" />
      </button>
      <img src={imageSrc} alt="" />
      <div className={styles.infoContainer}>
        <h5>{name}</h5>
        <h6>{author}</h6>
        <div className={styles.itemInfo}>
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
        className={clsx(
          styles.addButton,
          styles.collectionButton,
          collection.includes(itemId) && styles.buttonHidden
        )}
        type="button"
        onClick={() => addToCollection(itemId)}
      >
        <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
      </button>
      <button
        className={clsx(
          styles.removeButton,
          styles.collectionButton,
          !collection.includes(itemId) && styles.buttonHidden
        )}
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
