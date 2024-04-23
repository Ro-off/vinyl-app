import { VinylDiskIcon } from "../Icon/VinylDisk";
import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <VinylDiskIcon className={styles.loaderIcon} />
    </div>
  );
}
