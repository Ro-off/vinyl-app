import styles from "./Tooltip.module.css";
import propTypes from "prop-types";

export function Tooltip(props) {
  const { children } = props;

  return (
    <div className={styles.tooltipContainer}>
      <div className={styles.tooltipContentContainer}>{children}</div>
      <div className={styles.tooltipArrow} />
    </div>
  );
}

Tooltip.propTypes = {
  children: propTypes.node.isRequired,
};
