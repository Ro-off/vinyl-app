import styles from "./MainButton.module.css";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

function buttonChildrenSpan(isActive, children) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.span
          // variants={childrenVariants}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            filter: "drop-shadow(0 0 0 transparent)",
          }}
          exit={{
            opacity: 0,
            filter:
              "drop-shadow(0 0 1px var(--text-1)) drop-shadow(0 0 1px var(--text-1)) drop-shadow(0 0 1px var(--text-1)) drop-shadow(0 0 1px var(--text-1))",
          }}
          className={styles.buttonChildrenContainer}
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

export function MainButton(props) {
  const { children, isActive, onClick, className } = props;

  const buttonVariants = {
    active: { background: "var(--accent-text)" },
    inactive: { background: "var(--accent-color)" },
  };

  return (
    <motion.button
      className={clsx(styles.button, className)}
      type="button"
      onClick={onClick}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ cursor: "pointer", filter: "brightness(1.1)" }}
      variants={buttonVariants}
      animate={isActive ? "active" : "inactive"}
    >
      {buttonChildrenSpan(isActive, children)}
      {buttonChildrenSpan(!isActive, children)}
    </motion.button>
  );
}

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
