import PropTypes from "prop-types";
import styles from "./Notification.module.css";
import { clsx } from "clsx";
// import { createPortal } from "react-dom";
// import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Notification(props) {
  const { text, type = "default" } = props;

  const variants = {
    default: styles.default,
    error: styles.error,
  };

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
    // <AnimatePresence>
    <motion.div
      className={clsx(styles.notificationContainer, variants[type])}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <p>{text}</p>
    </motion.div>
    // </AnimatePresence>
  );
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
