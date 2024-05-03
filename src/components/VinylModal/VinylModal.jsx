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
import { useState, Suspense } from "react";
import { useRelease } from "../../hooks/useRelease";
import { Loader } from "../Loader/Loader";

export function VinylModal(props) {
  const {
    onClose,
    inCollection,
    onToggleCollection,
    inFavorites,
    onToggleFavorites,
    itemId,
  } = props;

  const { data } = useRelease({ releaseId: itemId });
  const music = data;
  const [isPlaying, setIsPlaying] = useState(false);

  return createPortal(
    <Suspense fallback={<Loader />}>
      <AnimatePresence>
        {/* {isOpen && ( */}

        <motion.div
          className={styles.background}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.modal}>
            <IconButton className={styles.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
            <div className={styles.topBar}>
              <h1 className={styles.songName}>{music.name}</h1>
              <h2 className={styles.artistName}>{music.author}</h2>
            </div>
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
                <PlayIcon />
              </IconButton>
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

        {/* )} */}
      </AnimatePresence>
    </Suspense>,
    document.getElementById("app")
  );
}
