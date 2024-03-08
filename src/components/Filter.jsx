export function FilterSection() {
  return (
    <div id="filter">
      <form action="" id="filter-form">
        <input type="text" name="artist" id="artist" placeholder="Genre" />
        <select
          name="genre"
          id="genre"
          title="genre"
          defaultValue="placeholder"
        >
          <option className="filter-placeholder" value="placeholder">
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
          id="decade"
          title="genre"
          defaultValue="placeholder"
        >
          <option className="filter-placeholder" value="placeholder">
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
          id="country"
          title="country"
          defaultValue="placeholder"
        >
          <option className="filter-placeholder" value="placeholder">
            Country
          </option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="ukraine">Ukraine</option>
        </select>
        <input type="submit" value="Search" id="filter-search" />
      </form>
    </div>
  );
}
