import styles from "./YMLCardsContainer.module.css";
import { YMLCard } from "./YMLCard/YMLCard";

export function YMLCardsContainer() {
  return (
    <div className={styles.container}>
      <h2>You may like</h2>
      <div className={styles.cards}>
        <YMLCard title="Rock" genreId={4} background="rgb(235, 82, 64)" />
        <YMLCard title="Classic" genreId={2} background="rgb(255, 182, 64)" />
        <YMLCard title="Hip-hop" genreId={1} background="rgb(155, 182, 64)" />
      </div>
    </div>
  );
}
