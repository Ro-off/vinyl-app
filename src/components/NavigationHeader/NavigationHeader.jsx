import styles from "./NavigationHeader.module.css";
import { ChevronLeftIcon } from "../Icon/ChevronLeft";
import { LikedIcon } from "../Icon/Liked";
import { FolderIcon } from "../Icon/Folder";

export function NavigationHeader() {
  return (
    <header>
      <div
        role="button"
        className={styles.backButton}
        tabIndex={0}
        onClick={() => window.history.back()}
      >
        <ChevronLeftIcon className={styles.icon} />
        <p>Back</p>
      </div>
      <div className={styles.favoritesButton}>
        <LikedIcon />
      </div>
      <div className={styles.libraryButton}>
        <FolderIcon />
      </div>
    </header>
  );
}
