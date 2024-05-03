import PropTypes from "prop-types";
import styles from "./IconButton.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";

export function IconButton(props) {
  const { children, isActive, onClick, className, variant = "square" } = props;

  return (
    <motion.button
      type="button"
      className={clsx(styles.iconButton, className, styles[variant])}
      title="like-button"
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {{ children }}
    </motion.button>
  );
}

IconButton.PropTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["circle", "default"]),
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
