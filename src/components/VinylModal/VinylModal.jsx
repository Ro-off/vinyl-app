import styles from "./VinylModal.module.css";
import { createPortal } from "react-dom";
import { MainButton } from "../buttons/MainButton/MainButton";
import { IconButton } from "../buttons/IconButton/IconButton";
import { PlusIcon } from "../Icon/Plus";
import { DoneIcon } from "../Icon/Done";
import { CloseIcon } from "../Icon/Close";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRelease } from "../../hooks/useRelease";
import { Loader } from "../Loader/Loader";
// import { infinite } from "swr/infinite";
import { PlayerContainer } from "./PlayerContainer/PlayerContainer";

export function VinylModal(props) {
  const {
    onClose,
    inCollection,
    onToggleCollection,
    inFavorites,
    onToggleFavorites,
    itemId,
  } = props;

  const { data, isLoading } = useRelease({ releaseId: itemId });
  const music = data;

  const [isPlaying, setIsPlaying] = useState(false);

  const demoAudio = useRef(null);

  useEffect(() => {
    if (demoAudio.current) {
      if (isPlaying) {
        demoAudio.current.play();
      } else {
        demoAudio.current.pause();
      }
    }

    function changeIsPlayingStatusOnKeyPress(event) {
      if (event.keyCode === 32) {
        setIsPlaying(!isPlaying);
      }
    }
    window.addEventListener("keydown", changeIsPlayingStatusOnKeyPress);

    return () => {
      window.removeEventListener("keydown", changeIsPlayingStatusOnKeyPress);
    };
  }, [setIsPlaying, isPlaying]);

  return createPortal(
    // <Suspense fallback={<Loader />}>
    isLoading ? (
      <Loader />
    ) : (
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
            <PlayerContainer
              imageSrc={music.imageSrc}
              inFavorites={inFavorites}
              onToggleFavorites={onToggleFavorites}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              itemId={itemId}
            />
            <audio ref={demoAudio} src="audio/audioplayback.mp3">
              <track kind="captions" />
            </audio>

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
              onClick={() => onToggleCollection(itemId)}
              isActive={inCollection}
            >
              {inCollection ? (
                <>
                  <p>In collection</p>
                  <DoneIcon />
                </>
              ) : (
                <>
                  <p>Add to collection</p>
                  <PlusIcon />
                </>
              )}
            </MainButton>
          </div>
        </motion.div>

        {/* )} */}
      </AnimatePresence>
    ),
    // </Suspense>
    document.getElementById("app")
  );
}
