import styles from "./NavigationHeader.module.css";
import { ChevronLeft } from "../Icon/ChevronLeft";
import { Liked } from "../Icon/Liked";
import { Folder } from "../Icon/Folder";

export function NavigationHeader() {
  return (
    <header>
      <div
        role="button"
        className={styles.backButton}
        tabIndex={0}
        onClick={window.history.back()}
      >
        <ChevronLeft className={styles.icon} />
        <p>Back</p>
      </div>
      <div className={styles.favoritesButton}>
        <Liked />
      </div>
      <div className={styles.libraryButton}>
        <Folder />
      </div>
    </header>
  );
}
