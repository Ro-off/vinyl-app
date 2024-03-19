import styles from "./NavigationHeader.module.css";
export function NavigationHeader() {
  return (
    <header>
      <div
        role="button"
        id={styles.backButton}
        tabIndex={0}
        onClick={window.history.back()}
      >
        <img alt="" src="src/assets/icons/chevron_left.svg" />
        <p>Back</p>
      </div>
      <div id={styles.favoritesButton}>
        <img alt="Liked" src="src/assets/icons/liked.svg" />
      </div>
      <div id={styles.libraryButton}>
        <img alt="Library" src="src/assets/icons/folder.svg" />
      </div>
    </header>
  );
}
