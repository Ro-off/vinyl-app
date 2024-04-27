import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./MusicCard.module.css";
import { HeartFilledIcon } from "../../Icon/HeartFilled";
import { HeartOutlineIcon } from "../../Icon/HeartOutline";
import { PlusIcon } from "../../Icon/Plus";
import { DoneIcon } from "../../Icon/Done";
import { motion } from "framer-motion";

export function MusicCard({
  music,
  inCollection,
  inFavorites,
  onToggleFavorites,
  onToggleCollection,
}) {
  const { itemId, name, year, author, imageSrc, genre, country } = music;

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={clsx(styles.likeButton)}
        title="like-button"
        onClick={() => onToggleFavorites(itemId)}
      >
        {inFavorites ? (
          <HeartFilledIcon className={styles.icon} />
        ) : (
          <HeartOutlineIcon className={styles.icon} />
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
      <motion.button
        className={clsx(styles.button, { [styles.removeButton]: inCollection })}
        type="button"
        onClick={() => onToggleCollection(itemId)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <p>{inCollection ? "Remove" : "Add"}</p>
        {inCollection ? (
          <DoneIcon className={styles.icon} />
        ) : (
          <PlusIcon className={styles.icon} />
        )}
      </motion.button>
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
  onToggleFavorites: PropTypes.func.isRequired,
  onToggleCollection: PropTypes.func.isRequired,
};
