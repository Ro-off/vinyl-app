import styles from "./GenreCardsContainer.module.css";
import { GenreCard } from "./GenreCard/GenreCard";
import { useGenres } from "../../hooks/useGenres";

export function GenreCardsContainer() {
  const genres = useGenres();
  return (
    <div className={styles.container}>
      <h2>You may like</h2>
      <div className={styles.cardScrollContainer}>
        <div className={styles.cards}>
          {genres.data.map((genre) => (
            <GenreCard key={genre.id} title={genre.title} genreId={genre.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
