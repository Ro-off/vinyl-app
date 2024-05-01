import { VinylDiskIcon } from "../Icon/VinylDisk";
import styles from "./Loader.module.css";
// import { createPortal } from "react-dom";

export function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <VinylDiskIcon className={styles.loaderIcon} />
    </div>
  );
}
