import PropTypes from "prop-types";
import styles from "./Notification.module.css";
import { clsx } from "clsx";
// import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Notification(props) {
  const { text, type = "default" } = props;

  const variants = {
    default: styles.default,
    error: styles.error,
  };

  const timeout = 3000;
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [isMounted]);

  // return createPortal(
  //   <AnimatePresence>
  //     {isMounted && (
  //       <motion.div
  //         className={clsx(styles.notificationContainer, variants[type])}
  //         initial={{ opacity: 0, y: 50 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         exit={{ opacity: 0, y: -50 }}
  //       >
  //         <p>{text}</p>
  //       </motion.div>
  //     )}
  //   </AnimatePresence>,
  //   document.getElementById("notification-root")
  // );
  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          className={clsx(styles.notificationContainer, variants[type])}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <p>{text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
