import { AppliedFiltersCard } from "./AppliedFiltersCard/AppliedFiltersCard";
import styles from "./AppliedFilters.module.css";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { useGenres } from "../../hooks/useGenres";
import { useCountries } from "../../hooks/useCountries";

export function AppliedFilters(props) {
  const { filtersList, removeSearchFilter } = props;
  const genres = useGenres();
  const countries = useCountries();

  const filterListWithTitles = {
    genre: filtersList.genre
      ? {
          id: filtersList.genre,
          title: genres.data.find(
            (genre) => genre.id === Number(filtersList.genre)
          ).title,
        }
      : null,
    country: filtersList.country
      ? {
          id: filtersList.country,
          title: String(
            countries.data.find((country) => country.id === filtersList.country)
              .title
          ),
        }
      : null,
    artist: filtersList.artist
      ? { id: filtersList.artist, title: filtersList.artist }
      : null,
    decade: filtersList.decade
      ? { id: filtersList.decade, title: filtersList.decade }
      : null,
  };

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
                value={filterListWithTitles[filterPropKey].id}
                title={filterListWithTitles[filterPropKey].title}
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
