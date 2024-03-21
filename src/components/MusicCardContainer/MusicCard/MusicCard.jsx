import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./MusicCard.module.css";
import { HeartFilled } from "../../Icon/HeartFilled";
import { HeartOutline } from "../../Icon/HeartOutline";
import { Plus } from "../../Icon/Plus";
import { Done } from "../../Icon/Done";

export function MusicCard({ music, ...props }) {
  const { inCollection, inFavorites, toggleFavorites, toggleCollection } =
    props;

  const { itemId, name, year, author, imageSrc, genre, country } = music;

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={clsx(styles.likeButton)}
        title="like-button"
        onClick={() => toggleFavorites(itemId)}
      >
        {inFavorites ? (
          <HeartFilled className={styles.icon} />
        ) : (
          <HeartOutline className={styles.icon} />
        )}
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
        className={clsx(styles.button, { [styles.removeButton]: inCollection })}
        type="button"
        onClick={() => toggleCollection(itemId)}
      >
        <p>{inCollection ? "Remove" : "Add"}</p>
        {inCollection ? (
          <Done className={styles.icon} />
        ) : (
          <Plus className={styles.icon} />
        )}
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
