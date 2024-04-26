import styles from "./YMLCard.module.css";
import PropTypes from "prop-types";
import { YMLCardStack } from "./YMLCardStack/YMLCardStack";

export function YMLCard(props) {
  const {
    title = "Card Title",
    genreId = 1,
    background = "rgb(255, 182, 64)",
  } = props;
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
