import styles from "./GenreCardStack.module.css";
import PropTypes from "prop-types";
import * as seedrandom from "seedrandom";

function generateStyle(seed) {
  const generator = new seedrandom(seed);

  const position = {
    bottom: -10 + generator() * 20,
    rotation: -20 + generator() * 40,
    right: generator() * 30,
  };

  return {
    bottom: position.bottom + "px",
    right: position.right + "px",
    transform: `rotate(${position.rotation}deg)`,
  };
}

export function GenreCardStack(props) {
  const { genreId, musicList } = props;

  return (
    <div className={styles.stack}>
      {musicList.data[0] ? (
        <img
          className={styles.image}
          style={generateStyle(genreId + musicList.data[0].name)}
          src={musicList.data[0].imageSrc}
          alt="img"
        />
      ) : null}
      {musicList.data[1] ? (
        <img
          className={styles.image}
          src={musicList.data[1].imageSrc}
          style={generateStyle(genreId + musicList.data[1].name)}
          alt="img"
        />
      ) : null}
      {musicList.data[2] ? (
        <img
          className={styles.image}
          src={musicList.data[2].imageSrc}
          style={generateStyle(genreId + musicList.data[2].name)}
          alt="img"
        />
      ) : null}
    </div>
  );
}

GenreCardStack.propTypes = {
  genreId: PropTypes.number.isRequired,
  musicList: {
    data: PropTypes.array.isRequired,
  },
};
