import PropTypes from "prop-types";
import styles from "./IconButton.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
// import { Children } from "react";

export function IconButton(props) {
  const { onClick, className, variant = "square", children } = props;

  return (
    <motion.button
      type="button"
      className={clsx(styles.iconButton, className, styles[variant])}
      title="like-button"
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onKeyUp={(e) => e.preventDefault()}
    >
      {children}
    </motion.button>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["circle", "default"]),
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
