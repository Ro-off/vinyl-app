import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

export function Pagination({ currentPage, onPageChange, pagesCount }) {
  return (
    <div className={styles.pagesContainer}>
      <div className={styles.pages}>
        {Array.from({ length: pagesCount }, (_, i) => (
          <button
            key={i}
            className={clsx(
              styles.pageId,
              i + 1 == currentPage && styles.activePage
            )}
            onClick={() => onPageChange(i + 1)}
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
  onPageChange: PropTypes.func.isRequired,
};
