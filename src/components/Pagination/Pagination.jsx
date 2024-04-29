import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

export function Pagination({ currentPage, onPageChange, pagesCount }) {
  function pageButton(i) {
    return (
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
    );
  }

  return (
    <div className={styles.pagesContainer}>
      <div className={styles.pages}>
        {/* {Array.from({ length: pagesCount }, (_, i) => pageButton(i))} */}
        {currentPage - 2 > 0 ? pageButton(0) : null}
        {currentPage - 3 > 0 ? <p>...</p> : null}
        {currentPage > 1 ? pageButton(currentPage - 2) : null}
        {pageButton(currentPage - 1)}
        {currentPage < pagesCount ? pageButton(currentPage) : null}
        {currentPage + 2 < pagesCount ? <p>...</p> : null}
        {currentPage + 1 < pagesCount ? pageButton(pagesCount - 1) : null}
      </div>
    </div>
  );
}

Pagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
