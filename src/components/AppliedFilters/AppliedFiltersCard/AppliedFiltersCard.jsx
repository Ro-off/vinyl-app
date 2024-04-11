import { CloseIcon } from "../../Icon/Close";
import styles from "./AppliedFiltersCard.module.css";
import propTypes from "prop-types";

export function AppliedFiltersCard(props) {
  const { id, value, removeSearchFilter } = props;
  return (
    <div className={styles.item}>
      <p>{value}</p>
      <button onClick={() => removeSearchFilter(id, value)}>
        <CloseIcon />
      </button>
    </div>
  );
}

AppliedFiltersCard.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  removeSearchFilter: propTypes.func.isRequired,
};
