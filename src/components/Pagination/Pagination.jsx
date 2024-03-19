import clsx from "clsx";
import PropTypes from "prop-types";
import { useMusicList } from "../../hooks/useMusicList";
import styles from "./Pagination.module.css";

export function Pagination({ currentPage, setCurrentPage }) {
  const { musicList } = useMusicList();
  const itemsOnPage = 12;
  let pagesCount = Math.ceil(musicList.length / itemsOnPage);
  return (
    <div id={styles.pagesContainer}>
      <div id={styles.pages}>
        {Array.from({ length: pagesCount }, (_, i) => (
          <button
            key={i}
            className={clsx(
              styles.pageId,
              i + 1 == currentPage && styles.activePage
            )}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

Pagination.propTypes = {
  listLength: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.any,
};
