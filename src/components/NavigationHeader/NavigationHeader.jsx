import styles from "./NavigationHeader.module.css";
import { ChevronLeftIcon } from "../Icon/ChevronLeft";
import { LikedIcon } from "../Icon/Liked";
import { FolderIcon } from "../Icon/Folder";
import { SearchIcon } from "../Icon/Search";
import { useNavigate } from "react-router-dom";

export function NavigationHeader() {
  const currentPath = window.location.pathname;
  const basePath = import.meta.env.BASE_URL;
  const isMainPage = currentPath === basePath;
  const navigate = useNavigate();

  return (
    <header>
      {isMainPage ? (
        <div
          className={styles.headerMainButton}
          role="button"
          tabIndex={0}
          onClick={() => navigate("/search")}
        >
          <SearchIcon className={styles.icon} />
          <p>Search</p>
        </div>
      ) : (
        <div
          role="button"
          className={styles.headerMainButton}
          tabIndex={0}
          onClick={() => window.history.back()}
        >
          <ChevronLeftIcon className={styles.icon} />
          <p>Back</p>
        </div>
      )}
      <div className={styles.favoritesButton}>
        <LikedIcon />
      </div>
      <div className={styles.libraryButton}>
        <FolderIcon />
      </div>
    </header>
  );
}
