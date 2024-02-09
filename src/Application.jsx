export const Application = () => {
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
        <div id="like-button">
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
      <div id="items-container">
        <div className="item" id="item-1">
          <button
            type="button"
            className="like-button-add"
            title="like-button-add"
          >
            <img alt="Like" src="src/assets/icons/heart_outline.svg" />
          </button>
          <img
            src="https://i.discogs.com/GCNPRSAsHiTRxtsZj1uTFk48NDTNSh3DRt7YrpHUmMc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDAw/MjkwLTE1NTE1ODQ1/MzEtODczNi5qcGVn.jpeg"
            alt=""
          />
          <div className="info-container">
            <h5>Bohemian Rhapsody</h5>
            <h6>Queen</h6>
            <div className="item-info">
              <div>
                <p>Genre:</p>
                <p>Rock</p>
              </div>
              <div>
                <p>Decade:</p>
                <p>1970-80</p>
              </div>
              <div>
                <p>Country:</p>
                <p>UK</p>
              </div>
            </div>
          </div>
          <button className="add-button" type="button">
            <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
          </button>
          <button className="remove-button button-hidden">
            <p>Remove</p> <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div className="item" id="item-2">
          <button
            type="button"
            className="like-button-add"
            title="like-button-add"
          >
            <img alt="Like" src="src/assets/icons/heart_outline.svg" />
          </button>
          <img
            src="https://i.discogs.com/GCNPRSAsHiTRxtsZj1uTFk48NDTNSh3DRt7YrpHUmMc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDAw/MjkwLTE1NTE1ODQ1/MzEtODczNi5qcGVn.jpeg"
            alt=""
          />
          <div className="info-container">
            <h5>Bohemian Rhapsody</h5>
            <h6>Queen</h6>
            <div className="item-info">
              <div>
                <p>Genre:</p>
                <p>Rock</p>
              </div>
              <div>
                <p>Decade:</p>
                <p>1970-80</p>
              </div>
              <div>
                <p>Country:</p>
                <p>UK</p>
              </div>
            </div>
          </div>
          <button className="add-button" type="button">
            <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
          </button>
          <button className="remove-button button-hidden">
            <p>Remove</p> <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div className="item" id="item-3">
          <button
            type="button"
            className="like-button-add"
            title="like-button-add"
          >
            <img alt="Like" src="src/assets/icons/heart_outline.svg" />
          </button>
          <img
            src="https://i.discogs.com/GCNPRSAsHiTRxtsZj1uTFk48NDTNSh3DRt7YrpHUmMc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDAw/MjkwLTE1NTE1ODQ1/MzEtODczNi5qcGVn.jpeg"
            alt=""
          />
          <div className="info-container">
            <h5>Bohemian Rhapsody</h5>
            <h6>Queen</h6>
            <div className="item-info">
              <div>
                <p>Genre:</p>
                <p>Rock</p>
              </div>
              <div>
                <p>Decade:</p>
                <p>1970-80</p>
              </div>
              <div>
                <p>Country:</p>
                <p>UK</p>
              </div>
            </div>
          </div>
          <button className="add-button" type="button">
            <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
          </button>
          <button className="remove-button button-hidden">
            <p>Remove</p> <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div className="item" id="item-4">
          <button
            type="button"
            className="like-button-add"
            title="like-button-add"
          >
            <img alt="Like" src="src/assets/icons/heart_outline.svg" />
          </button>
          <img
            src="https://i.discogs.com/GCNPRSAsHiTRxtsZj1uTFk48NDTNSh3DRt7YrpHUmMc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDAw/MjkwLTE1NTE1ODQ1/MzEtODczNi5qcGVn.jpeg"
            alt=""
          />
          <div className="info-container">
            <h5>Bohemian Rhapsody</h5>
            <h6>Queen</h6>
            <div className="item-info">
              <div>
                <p>Genre:</p>
                <p>Rock</p>
              </div>
              <div>
                <p>Decade:</p>
                <p>1970-80</p>
              </div>
              <div>
                <p>Country:</p>
                <p>UK</p>
              </div>
            </div>
          </div>
          <button className="add-button" type="button">
            <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
          </button>
          <button className="remove-button button-hidden">
            <p>Remove</p> <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div className="item" id="item-5">
          <button
            type="button"
            className="like-button-add"
            title="like-button-add"
          >
            <img alt="Like" src="src/assets/icons/heart_outline.svg" />
          </button>
          <img
            src="https://i.discogs.com/GCNPRSAsHiTRxtsZj1uTFk48NDTNSh3DRt7YrpHUmMc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDAw/MjkwLTE1NTE1ODQ1/MzEtODczNi5qcGVn.jpeg"
            alt=""
          />
          <div className="info-container">
            <h5>Bohemian Rhapsody</h5>
            <h6>Queen</h6>
            <div className="item-info">
              <div>
                <p>Genre:</p>
                <p>Rock</p>
              </div>
              <div>
                <p>Decade:</p>
                <p>1970-80</p>
              </div>
              <div>
                <p>Country:</p>
                <p>UK</p>
              </div>
            </div>
          </div>
          <button className="add-button" type="button">
            <p>Add</p> <img alt="" src="/src/assets/icons/plus.svg" />
          </button>
          <button className="remove-button button-hidden">
            <p>Remove</p> <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div className="item" id="item-6">
          <button
            type="button"
            className="like-button-add"
            title="like-button-add"
          >
            <img alt="Like" src="src/assets/icons/heart_outline.svg" />
          </button>
          <img
            src="https://i.discogs.com/GCNPRSAsHiTRxtsZj1uTFk48NDTNSh3DRt7YrpHUmMc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDAw/MjkwLTE1NTE1ODQ1/MzEtODczNi5qcGVn.jpeg"
            alt=""
          />
          <div className="info-container">
            <h5>Bohemian Rhapsody</h5>
            <h6>Queen</h6>
            <div className="item-info">
              <div>
                <p>Genre:</p>
                <p>Rock</p>
              </div>
              <div>
                <p>Decade:</p>
                <p>1970-80</p>
              </div>
              <div>
                <p>Country:</p>
                <p>UK</p>
              </div>
            </div>
          </div>
          <button className="add-button" type="button">
            <p>Add</p>
            <img alt="" src="/src/assets/icons/plus.svg" />
          </button>
          <button className="remove-button button-hidden">
            <p>Remove</p> <i className="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
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
