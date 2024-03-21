import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

export function Pagination({ currentPage, onCurrentPage, pagesCount }) {
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
            onClick={() => onCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

Pagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onCurrentPage: PropTypes.func.isRequired,
};
