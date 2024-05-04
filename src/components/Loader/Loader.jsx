import { VinylDiskIcon } from "../Icon/VinylDisk";
import styles from "./Loader.module.css";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.loaderContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <VinylDiskIcon className={styles.loaderIcon} />
      </motion.div>
    </AnimatePresence>
  );
}
