import styles from "./Select.module.css";
import propTypes from "prop-types";
import { useState } from "react";
import { ChevronDownIcon } from "../../Icon/ChevronDown";
import clsx from "clsx";

export function Select(props) {
  const { values, name = "Select", className = "" } = props;
  console.log(className);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        className,
        styles.selectContainer,
        styles.selectContainerClosed,
        { [styles.selectContainerOpen]: isOpen }
      )}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex="0"
    >
      <input type="hidden"></input>

      <div className={styles.field}>
        <p>{name}</p>
      </div>
      <div
        className={clsx(styles.expandButton, { [styles.rotated180]: isOpen })}
      >
        <ChevronDownIcon size={17} />
      </div>

      <div
        className={clsx(
          styles.dropdownMenu,
          { [styles.hidden]: !isOpen },
          { [styles.dropdownMenuEmpty]: values.length === 0 }
        )}
      >
        {values.length === 0 ? (
          <p>No results</p>
        ) : (
          values.map((value) => <p key={name + "-" + value}>{value}</p>)
        )}
      </div>
    </div>
  );
}

Select.propTypes = {
  values: propTypes.array.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
};
