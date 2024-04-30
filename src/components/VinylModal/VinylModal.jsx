import styles from "./VinylModal.module.css";
import { createPortal } from "react-dom";
import { MainButton } from "../buttons/MainButton/MainButton";
import { IconButton } from "../buttons/IconButton/IconButton";
import { PlusIcon } from "../Icon/Plus";
import { DoneIcon } from "../Icon/Done";
import { HeartFilledIcon } from "../Icon/HeartFilled";
import { HeartOutlineIcon } from "../Icon/HeartOutline";
import { CloseIcon } from "../Icon/Close";
import { PlayIcon } from "../Icon/Play";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function VinylModal(props) {
  const {
    isOpen,
    onClose,
    music,
    inCollection,
    onToggleCollection,
    inFavorites,
    onToggleFavorites,
    itemId,
  } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.background}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.modal}>
            <IconButton
              className={styles.closeButton}
              onClick={onClose}
              defaultChildren={<CloseIcon />}
            />
            <div className={styles.topBar}>
              <h1 className={styles.songName}>{music.name}</h1>
              <h2 className={styles.artistName}>{music.author}</h2>
            </div>
            <div className={styles.playerContainer}>
              <IconButton
                className={styles.likeButton}
                onClick={() => onToggleFavorites(itemId)}
                defaultChildren={<HeartOutlineIcon />}
                onActiveChildren={<HeartFilledIcon />}
                isActive={inFavorites}
              />
              <IconButton
                className={styles.playButton}
                onClick={() => setIsPlaying(!isPlaying)}
                defaultChildren={<PlayIcon />}
                isActive={false}
                variant="circle"
              />
              <img
                className={styles.image}
                src={music.imageSrc}
                alt="Vinyl cover"
              />
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoRow}>
                <p>Year released:</p> <p>{music.year}</p>
              </div>
              <div className={styles.infoRow}>
                <p>Genre:</p> <p>{music.genre}</p>
              </div>
              <div className={styles.infoRow}>
                <p>Country:</p> <p>{music.country}</p>
              </div>
            </div>
            <MainButton
              className={styles.collectionButton}
              defaultChildren={
                <>
                  <p>Add to collection</p>
                  <PlusIcon />
                </>
              }
              onActiveChildren={
                <>
                  <p>In collection</p>
                  <DoneIcon />
                </>
              }
              onClick={() => onToggleCollection(itemId)}
              isActive={inCollection}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("app")
  );
}
