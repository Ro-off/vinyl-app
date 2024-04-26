import styles from "./YMLCardsContainer.module.css";
import { YMLCard } from "./YMLCard/YMLCard";
import { useGenres } from "../../hooks/useGenres";

export function YMLCardsContainer() {
  const genres = useGenres();
  return (
    <div className={styles.container}>
      <h2>You may like</h2>
      <div className={styles.cardScrollContainer}>
        <div className={styles.cards}>
          {genres.data.map((genre) => (
            <YMLCard key={genre.id} title={genre.title} genreId={genre.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
