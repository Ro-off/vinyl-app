import PropTypes from "prop-types";
import styles from "./Notification.module.css";
import { clsx } from "clsx";

export function Notification(props) {
  const { text, type = "default" } = props;

  const variants = {
    default: styles.default,
    error: styles.error,
  };

  return (
    <div className={clsx(styles.notificationContainer, variants[type])}>
      <p>{text}</p>
    </div>
  );
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
