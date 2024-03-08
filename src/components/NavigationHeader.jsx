export function NavigationHeader() {
  return (
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
  );
}
