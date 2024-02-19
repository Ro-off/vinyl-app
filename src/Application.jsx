import clsx from "clsx";
import { musicListData } from "./musicData.json";
import * as description from "./describeData.json";

export const Application = () => {
  const musicList = musicListData;

  const collection = [1, 2, 5, 12];
  const favorites = [3, 4, 7];

  const genres = description.genres;
  const decades = description.decades;
  const countries = description.countries;

  //todo: add possibility to render only specified cards
  function renderCards(cardRenderer, itemList) {
    return itemList.map(cardRenderer);
  }

  function addToCollection() {
    console.error("Favorites not implemented");
  }

  function removeFromCollection() {
    console.error("Favorites not implemented");
  }

  function addToFavorites() {
    console.error("Favorites not implemented");
  }

  function removeFromFavorites() {
    console.error("Favorites not implemented");
  }

  function renderCard({
    itemId,
    name,
    author,
    genreId,
    decadeId,
    countryId,
    imageSrc,
  }) {
    let inCollection = collection.includes(itemId);
    let inFavorites = favorites.includes(itemId);
    return (
      <div className="item" key={itemId}>
        <button
          type="button"
          className={clsx("like-button", "like-button-add", {
            "button-hidden": inFavorites,
          })}
          title="like-button"
          onClick={() => addToFavorites()}
        >
          <img
            alt="Add to favorites"
            src="src/assets/icons/heart_outline.svg"
          />
        </button>
        <button
          type="button"
          className={clsx("like-button", "like-button-rem", {
            "button-hidden": !inFavorites,
          })}
          title="like-button"
          onClick={() => removeFromFavorites()}
        >
          <img alt="Add to favorites" src="src/assets/icons/heart_filled.svg" />
        </button>
        <img src={imageSrc} alt="" />
        <div className="info-container">
          <h5>{name}</h5>
          <h6>{author}</h6>
          <div className="item-info">
            <div>
              <p>Genre:</p>
              <p>{genres[genreId]}</p>
            </div>
            <div>
              <p>Decade:</p>
              <p>{decades[decadeId]}</p>
            </div>
            <div>
              <p>Country:</p>
              <p>{countries[countryId]}</p>
            </div>
          </div>
        </div>
        <button
          className={clsx("add-button", "collectionButton", {
            "button-hidden": inCollection,
          })}
          type="button"
          onClick={() => addToCollection()}
        >
          <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
        </button>
        <button
          className={clsx("remove-button", "collectionButton", {
            "button-hidden": !inCollection,
          })}
          type="button"
          onClick={() => removeFromCollection()}
        >
          <p>Remove</p> <img alt="" src="/src/assets/icons/done.svg" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <header>
        <div
          role="button"
          id="back-button"
          tabIndex={0}
          onClick={window.history.back()}
        >
          <img alt="" src="src/assets/icons/chevron_left.svg" />
          <p>Back</p>
        </div>
        <div id="favorites-button">
          <img alt="Liked" src="src/assets/icons/liked.svg" />
        </div>
        <div id="library-button">
          <img alt="Library" src="src/assets/icons/folder.svg" />
        </div>
      </header>

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

      <div id="items-container"> {renderCards(renderCard, musicList)} </div>

      <div id="pages-container">
        <div id="pages">
          <button className="page-id" id="active-page">
            1
          </button>
          <button className="page-id">2</button>
          <button className="page-id">3</button>
          <p>...</p>
          <button className="page-id">10</button>
        </div>
      </div>
    </div>
  );
};
