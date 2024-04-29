import styles from "./MainButton.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";
import { motion } from "framer-motion";

export function MainButton(props) {
  const {
    defaultChildren,
    onActiveChildren = false,
    isActive,
    onClick,
  } = props;

  return (
    <motion.button
      className={clsx(styles.button, { [styles.activeButton]: isActive })}
      type="button"
      onClick={onClick}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
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
};
