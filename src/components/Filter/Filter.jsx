import styles from "./Filter.module.css";

export function Filter() {
  return (
    <div className="filter">
      <form action="" className={styles.filterForm}>
        <input
          type="text"
          name="artist"
          className={styles.artist}
          placeholder="Artist"
        />
        <select
          name="genre"
          className={styles.genre}
          title="genre"
          defaultValue="placeholder"
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
