import styles from "./VinylModal.module.css";
import { createPortal } from "react-dom";

export function VinylModal() {
  return createPortal(
    <div className={styles.modal}>
      <div className={styles.topBar}>
        <h1 className={styles.songName}>Song name</h1>
        <h2 className={styles.artistName}> Artist name</h2>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://via.placeholder.com/300"
          alt="Vinyl cover"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoRow}>
          <p>Year released:</p> <p>2001</p>
        </div>
        <div className={styles.infoRow}>
          <p>Genre:</p> <p>Rock</p>
        </div>
        <div className={styles.infoRow}>
          <p>Country:</p> <p>USA</p>
        </div>
      </div>
    </div>,
    document.getElementById("app")
  );
}
