import PropTypes from "prop-types";
import styles from "./MusicCard.module.css";
import { HeartFilledIcon } from "../../Icon/HeartFilled";
import { HeartOutlineIcon } from "../../Icon/HeartOutline";
import { PlusIcon } from "../../Icon/Plus";
import { DoneIcon } from "../../Icon/Done";
import { MainButton } from "../../buttons/MainButton/MainButton";
import { IconButton } from "../../buttons/IconButton/IconButton";
import { useState } from "react";
import { VinylModal } from "../../VinylModal/VinylModal";

export function MusicCard({
  music,
  inCollection,
  inFavorites,
  onToggleFavorites,
  onToggleCollection,
}) {
  const { itemId, name, year, author, imageSrc, genre, country } = music;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.item}>
        <IconButton
          className={styles.likeButton}
          onClick={() => onToggleFavorites(itemId)}
          defaultChildren={<HeartOutlineIcon />}
          onActiveChildren={<HeartFilledIcon />}
          isActive={inFavorites}
        />
        <img src={imageSrc} alt="" />
        <div
          className={styles.infoContainer}
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex="0"
        >
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

        <MainButton
          defaultChildren={
            <>
              <p>Add to Collection</p> <PlusIcon />
            </>
          }
          onActiveChildren={
            <>
              <p>In collection</p> <DoneIcon />
            </>
          }
          isActive={inCollection}
          onClick={() => onToggleCollection(itemId)}
        />
      </div>
      <VinylModal
        inCollection={inCollection}
        onToggleCollection={onToggleCollection}
        inFavorites={inFavorites}
        onToggleFavorites={onToggleFavorites}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemId={itemId}
      />
    </>
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
