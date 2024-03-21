import { MusicCard } from "./Card/MusicCard";
import PropTypes from "prop-types";
import styles from "./MusicCardContainer.module.css";
import { useCollection } from "../../hooks/useCollection";
import { useFavorites } from "../../hooks/useFavorites";

export function MusicCardContainer({ musicListToDisplay }) {
  const { collection, toggleCollection } = useCollection();
  const { favorites, toggleFavorites } = useFavorites();
  return (
    <div className={styles.itemsContainer}>
      {musicListToDisplay.map((music) => (
        <MusicCard
          key={music.itemId}
          music={music}
          inCollection={collection.includes(music.itemId)}
          inFavorites={favorites.includes(music.itemId)}
          toggleFavorites={toggleFavorites}
          toggleCollection={toggleCollection}
        />
      ))}
    </div>
  );
}

MusicCardContainer.propTypes = {
  musicListToDisplay: PropTypes.array.isRequired,
};
