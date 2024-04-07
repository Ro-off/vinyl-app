import styles from "./Filter.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Filter() {
  const [filterFields, setFilterFields] = useState({
    artist: "",
    genre: "genre",
    country: "country",
  });

  const navigate = useNavigate();

  function handleChange(e, field) {
    setFilterFields({ ...filterFields, [field]: e.target.value });
  }

  function navigateToResultsPage() {
    let searchParams = new URLSearchParams();
    if (filterFields.artist !== "")
      searchParams.append("artist", filterFields.artist);
    if (filterFields.genre !== "genre")
      searchParams.append("genre", filterFields.genre);
    if (filterFields.country !== "country")
      searchParams.append("country", filterFields.country);

    if (searchParams.size !== 0) navigate("/search/results/?" + searchParams);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigateToResultsPage();
  }

  return (
    <div className="filter">
      <form onSubmit={handleSubmit} className={styles.filterForm}>
        <input
          type="text"
          name="artist"
          className={styles.artist}
          placeholder="Artist"
          value={filterFields.artist}
          onChange={(e) => handleChange(e, "artist")}
        />
        <select
          name="genre"
          className={styles.genre}
          title="genre"
          defaultValue="placeholder"
          value={filterFields.genre}
          onChange={(e) => handleChange(e, "genre")}
        >
          <option className={styles.filterPlaceholder} value="placeholder">
            Genre
          </option>
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
          <option value="country">Country</option>
          <option value="hip-hop">Hip-Hop</option>
          <option value="jazz">Jazz</option>
        </select>
        <select
          name="decade"
          className={styles.decade}
          title="genre"
          defaultValue="placeholder"
        >
          <option className={styles.filterPlaceholder} value="placeholder">
            Decade
          </option>
          <option value="1950-60">1950-60 рр.</option>
          <option value="1960-70">1960-70 рр.</option>
          <option value="1970-80">1970-80 рр.</option>
          <option value="1980-90">1980-90 рр.</option>
          <option value="1990-00">1990-00 рр.</option>
          <option value="2000-10">2000-10 рр.</option>
          <option value="2010-20">2010-20 рр.</option>
          <option value="2020-30">2020-30 рр.</option>
        </select>
        <select
          name="country"
          className={styles.country}
          title="country"
          defaultValue="placeholder"
          value={filterFields.country}
          onChange={(e) => handleChange(e, "country")}
        >
          <option className={styles.filterPlaceholder} value="placeholder">
            Country
          </option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="ukraine">Ukraine</option>
        </select>
        <input type="submit" value="Search" className={styles.filterSearch} />
      </form>
    </div>
  );
}
