import clsx from "clsx";
import PropTypes from "prop-types";
import { musicList } from "./contentController";

export function NavigationPages(props) {
  const itemsOnPage = 12;
  let { currentPage, setCurrentPage } = props;

  let pagesCount = Math.ceil(musicList.length / itemsOnPage);
  return (
    <div id="pages-container">
      <div id="pages">
        {Array.from({ length: pagesCount }, (_, i) => (
          <button
            key={i}
            className={clsx("page-id", {
              "active-page": i + 1 == currentPage,
            })}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

NavigationPages.propTypes = {
  listLength: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.any,
};
