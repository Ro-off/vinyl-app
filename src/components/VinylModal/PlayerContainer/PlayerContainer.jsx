import { PlayIcon } from "../../Icon/Play";
import { PauseIcon } from "../../Icon/Pause";
import { HeartFilledIcon } from "../../Icon/HeartFilled";
import { HeartOutlineIcon } from "../../Icon/HeartOutline";
import { IconButton } from "../../buttons/IconButton/IconButton";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PlayerContainer.module.css";
import PropTypes from "prop-types";
// import {df} from "../../../../public/imgs/vinylDisk.png";

export function PlayerContainer(props) {
  const {
    imageSrc,
    inFavorites,
    onToggleFavorites,
    isPlaying,
    setIsPlaying,
    itemId,
  } = props;

  return (
    <div className={styles.playerContainer}>
      <IconButton
        className={styles.likeButton}
        onClick={() => onToggleFavorites(itemId)}
      >
        {inFavorites ? <HeartFilledIcon /> : <HeartOutlineIcon />}
      </IconButton>
      <IconButton
        className={styles.playButton}
        onClick={() => setIsPlaying(!isPlaying)}
        variant="circle"
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <motion.div
        className={styles.vinylCoverContainer}
        animate={{ transformOrigin: "top", rotateX: isPlaying ? 90 : 0 }}
      >
        <img className={styles.coverImage} src={imageSrc} alt="Vinyl cover" />
        <div
          className={styles.vinylCoverLabel}
          // animate={{ height: isPlaying ? 50 : 0 }}
        />
      </motion.div>
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className={styles.vinylDiskContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.vinylDisk}>
              <img src="\mg\VinylDisk.png" alt="Vinyl disk" />
              <motion.img
                src={imageSrc}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className={styles.vinylDiskCover}
                alt="Vinyl cover"
              />
              <img
                src="img\ToneArm.png"
                className={styles.toneArmImg}
                alt="Tone arm"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

PlayerContainer.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  onToggleFavorites: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
};
