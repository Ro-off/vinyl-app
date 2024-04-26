import styles from "./YMLCardStack.module.css";
import PropTypes from "prop-types";
import * as seedrandom from "seedrandom";
import { useMusicList } from "../../../../hooks/useMusicList";

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

export function YMLCardStack(props) {
  const { genreId } = props;

  const searchParams = {
    artist: null,
    genre: genreId,
    year_from: null,
    year_to: null,
    decade: null,
    limit: 3,
  };
  const { data } = useMusicList(searchParams);

  return (
    <div className={styles.stack}>
      {data[0] ? (
        <img
          className={styles.image}
          style={generateStyle(genreId + data[0].name)}
          src={data[0].imageSrc}
          alt="img"
        />
      ) : null}
      {data[1] ? (
        <img
          className={styles.image}
          src={data[1].imageSrc}
          style={generateStyle(genreId + data[1].name)}
          alt="img"
        />
      ) : null}
      {data[2] ? (
        <img
          className={styles.image}
          src={data[2].imageSrc}
          style={generateStyle(genreId + data[2].name)}
          alt="img"
        />
      ) : null}
    </div>
  );
}

YMLCardStack.propTypes = {
  genreId: PropTypes.number.isRequired,
};
