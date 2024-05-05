import { useEffect, useState } from "react";
import styles from "./Tooltip.module.css";
import propTypes from "prop-types";
import { createPortal } from "react-dom";

export function Tooltip(props) {
  const { children, parentRef } = props;

  // const rect = parentRef ? { top: 10, left: 20 } : null;

  const [position, setPosition] = useState(null);

  function handlePointerEnter() {
    const {
      left: parentLeft,
      top: parentTop,
      width: parentWidth,
    } = parentRef.current.getBoundingClientRect();

    setPosition({
      top: parentTop + window.scrollY - 5 - 54.4,
      left: parentLeft + parentWidth / 2 - 85,
    });
  }

  function handlePointerLeave() {
    window.setTimeout(() => {
      if (!parentRef.current.matches(":hover")) setPosition(null);
    }, 1000);
  }

  useEffect(() => {
    const ref = parentRef.current;
    ref.addEventListener("mouseenter", handlePointerEnter);
    ref.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      ref.removeEventListener("mouseenter", handlePointerEnter);
      ref.removeEventListener("mouseleave", handlePointerLeave);
    };
  });

  return position
    ? createPortal(
        <div className={styles.tooltipContainer} style={position}>
          <div className={styles.tooltipContentContainer}>{children}</div>
          <div className={styles.tooltipArrow} />
        </div>,
        document.body
      )
    : null;
}
Tooltip.propTypes = {
  children: propTypes.node.isRequired,
  parentRef: propTypes.object.isRequired,
};
