import styles from "./MainButton.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import clsx from "clsx";

export function MainButton(props) {
  const {
    defaultChildren,
    onActiveChildren = false,
    isActive,
    onClick,
    className,
  } = props;

  const variants = {
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
      variants={variants}
      animate={isActive ? "active" : "inactive"}
    >
      {!isActive
        ? defaultChildren
        : onActiveChildren
        ? onActiveChildren
        : defaultChildren}
    </motion.button>
  );
}

MainButton.propTypes = {
  defaultChildren: PropTypes.string.isRequired,
  onActiveChildren: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
