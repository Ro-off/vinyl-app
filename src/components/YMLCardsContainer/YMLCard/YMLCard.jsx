import styles from "./YMLCard.module.css";
import PropTypes from "prop-types";
import * as seedrandom from "seedrandom";
import { YMLCardStack } from "./YMLCardStack/YMLCardStack";

function generateColor(seed) {
  const generator = new seedrandom(seed);
  return `hsl(${generator() * 360}, 74%, 68%)`;
}
export function YMLCard(props) {
  const { title = "Card Title", genreId = 1 } = props;
  const background = generateColor(title);
  return (
    <div className={styles.cardContainer} style={{ background: background }}>
      <h3>{title}</h3>
      <YMLCardStack genreId={genreId} />
    </div>
  );
}

YMLCard.propTypes = {
  title: PropTypes.string.isRequired,
  genreId: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
};
