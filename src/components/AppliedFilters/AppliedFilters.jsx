import { AppliedFiltersCard } from "./AppliedFiltersCard/AppliedFiltersCard";
import styles from "./AppliedFilters.module.css";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export function AppliedFilters(props) {
  const { filtersList, removeSearchFilter } = props;

  return (
    <>
      <div className={styles.header}>
        <p>Filters applied:</p>
        <Link to="/">Reset filters</Link>
      </div>
      <div className={styles.itemList}>
        {Object.keys(filtersList).map((filterPropKey) => {
          if (filtersList[filterPropKey]) {
            return (
              <AppliedFiltersCard
                key={filtersList[filterPropKey]}
                id={filterPropKey}
                value={filtersList[filterPropKey]}
                removeSearchFilter={removeSearchFilter}
              />
            );
          }
        })}
      </div>
    </>
  );
}

AppliedFilters.propTypes = {
  filtersList: propTypes.object.isRequired,
  removeSearchFilter: propTypes.func.isRequired,
};
