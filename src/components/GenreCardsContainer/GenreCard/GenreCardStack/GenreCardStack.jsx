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
      {(musicList.data || []).map((music) => (
        <img
          className={styles.image}
          style={generateStyle(genreId + music.name)}
          src={music.imageSrc}
          alt={music.name}
          key={music.name}
        />
      ))}
    </div>
  );
}

GenreCardStack.propTypes = {
  genreId: PropTypes.number.isRequired,
  musicList: {
    data: PropTypes.array.isRequired,
  },
};
