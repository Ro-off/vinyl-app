import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./MusicCard.module.css";

export function MusicCard({ music, ...props }) {
  const { inCollection, inFavorites, toggleFavorites, toggleCollection } =
    props;

  const { itemId, name, year, author, imageSrc, genre, country } = music;

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={clsx(
          styles.likeButton,
          "like-button-add",
          inFavorites && styles.buttonHidden
        )}
        title="like-button"
        onClick={() => toggleFavorites(itemId)}
      >
        <img alt="Add to favorites" src="src/assets/icons/heart_outline.svg" />
      </button>
      <button
        type="button"
        className={clsx(
          styles.likeButton,
          "like-button-rem",
          !inFavorites && styles.buttonHidden
        )}
        title="like-button"
        onClick={() => toggleFavorites(itemId)}
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
            <p>{genre}</p>
          </div>
          <div>
            <p>Year:</p>
            <p>{year}</p>
          </div>
          <div>
            <p>Country:</p>
            <p>{country}</p>
          </div>
        </div>
      </div>
      <button
        className={clsx(
          styles.addButton,
          styles.collectionButton,
          inCollection && styles.buttonHidden
        )}
        type="button"
        onClick={() => toggleCollection(itemId)}
      >
        <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
      </button>
      <button
        className={clsx(
          styles.removeButton,
          styles.collectionButton,
          !inCollection && styles.buttonHidden
        )}
        type="button"
        onClick={() => toggleCollection(itemId)}
      >
        <p>Remove</p> <img alt="" src="/src/assets/icons/done.svg" />
      </button>
    </div>
  );
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    itemId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  inFavorites: PropTypes.bool.isRequired,
  inCollection: PropTypes.bool.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
  toggleCollection: PropTypes.func.isRequired,
};
