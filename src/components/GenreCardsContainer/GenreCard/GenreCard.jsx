import styles from "./GenreCard.module.css";
import PropTypes from "prop-types";
import * as seedrandom from "seedrandom";
import { GenreCardStack } from "./GenreCardStack/GenreCardStack";
import { motion } from "framer-motion";
import { useMusicList } from "../../../hooks/useMusicList";

function generateColor(seed) {
  const generator = new seedrandom(seed);
  return `hsl(${generator() * 360}, 74%, 68%)`;
}
export function GenreCard(props) {
  const { title = "Card Title", genreId = 1 } = props;
  const background = generateColor(title);

  const searchParams = {
    genre: genreId,
    limit: 3,
  };
  const musicList = useMusicList(searchParams);

  return musicList.size > 0 ? (
    <motion.div
      className={styles.cardContainer}
      style={{ background: background }}
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <GenreCardStack genreId={genreId} musicList={musicList} />
    </motion.div>
  ) : null;
}

GenreCard.propTypes = {
  title: PropTypes.string.isRequired,
  genreId: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
};
