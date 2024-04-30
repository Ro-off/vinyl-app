import PropTypes from "prop-types";
import styles from "./IconButton.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";

export function IconButton(props) {
  const {
    defaultChildren,
    onActiveChildren,
    isActive,
    onClick,
    className,
    variant = "default",
  } = props;

  const variants = {
    circle: {
      borderRadius: "50%",
    },
    default: {
      borderRadius: "5px",
    },
  };

  return (
    <motion.button
      type="button"
      className={clsx(styles.iconButton, className)}
      title="like-button"
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={variants}
      animate={variant}
    >
      {!isActive
        ? defaultChildren
        : onActiveChildren
        ? onActiveChildren
        : defaultChildren}
    </motion.button>
  );
}

IconButton.propTypes = {
  defaultChildren: PropTypes.node.isRequired,
  onActiveChildren: PropTypes.node,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["circle", "default"]),
};
