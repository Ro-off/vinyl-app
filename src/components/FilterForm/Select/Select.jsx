import styles from "./Select.module.css";
import propTypes from "prop-types";
import { useState } from "react";
import { ChevronDownIcon } from "../../Icon/ChevronDown";
import clsx from "clsx";

export function Select(props) {
  const {
    name = "Select",
    className = "",
    options,
    value,
    title = "Select value",
    onChange,
    error,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  return (
    <div
      className={clsx(
        className,
        styles.selectContainer,
        { [styles.selectContainerClosed]: !isOpen },
        { [styles.selectContainerOpen]: isOpen },
        { [styles.isError]: error }
      )}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex="0"
    >
      <input type="hidden" value={value} name={name}></input>

      <div className={styles.field}>
        <p>
          {value && options
            ? options.find((element) => element.value === value).title
            : title}
        </p>
      </div>
      <div
        className={clsx(styles.expandButton, { [styles.rotated180]: isOpen })}
      >
        <ChevronDownIcon size={"17"} />
      </div>
      <p className={clsx(styles.errorMassage, { [styles.hidden]: !error })}>
        {error}
      </p>

      <div
        className={clsx(
          styles.dropdownMenu,
          { [styles.hidden]: !isOpen },
          { [styles.dropdownMenuEmpty]: !options }
        )}
      >
        {!options ? (
          <p>No results</p>
        ) : (
          options.map((option) => (
            <button
              type="button"
              onClick={(e) => handleChange(e.target.value)}
              key={name + "-" + option.value}
              value={option.value}
            >
              {option.title}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

Select.propTypes = {
  options: propTypes.array.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  title: propTypes.string,
  error: propTypes.func,
};
