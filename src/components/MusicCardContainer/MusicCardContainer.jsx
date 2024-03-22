import { MusicCard } from "./MusicCard/MusicCard";
import PropTypes from "prop-types";
import styles from "./MusicCardContainer.module.css";

export function MusicCardContainer({
  musicList,
  collection,
  favorites,
  toggleCollection,
  toggleFavorites,
}) {
  return (
    <div className={styles.itemsContainer}>
      {musicList.map((music) => (
        <MusicCard
          key={music.itemId}
          music={music}
          inCollection={collection.includes(music.itemId)}
          inFavorites={favorites.includes(music.itemId)}
          onToggleFavorites={toggleFavorites}
          onToggleCollection={toggleCollection}
        />
      ))}
    </div>
  );
}

MusicCardContainer.propTypes = {
  musicList: PropTypes.array.isRequired,
  collection: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  toggleCollection: PropTypes.func.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
};
