import styles from "./YMLCard.module.css";
import PropTypes from "prop-types";
import * as seedrandom from "seedrandom";
import { YMLCardStack } from "./YMLCardStack/YMLCardStack";
import { motion } from "framer-motion";
import { useMusicList } from "../../../hooks/useMusicList";

function generateColor(seed) {
  const generator = new seedrandom(seed);
  return `hsl(${generator() * 360}, 74%, 68%)`;
}
export function YMLCard(props) {
  const { title = "Card Title", genreId = 1 } = props;
  const background = generateColor(title);

  const searchParams = {
    artist: null,
    genre: genreId,
    year_from: null,
    year_to: null,
    decade: null,
    limit: 3,
  };
  const musicList = useMusicList(searchParams);

  return musicList.size > 0 ? (
    <motion.div
      className={styles.cardContainer}
      style={{ background: background }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <YMLCardStack genreId={genreId} musicList={musicList} />
    </motion.div>
  ) : null;
}

YMLCard.propTypes = {
  title: PropTypes.string.isRequired,
  genreId: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
};
