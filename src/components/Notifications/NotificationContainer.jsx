import styles from "./NotificationContainer.module.css";
import { useNotification } from "../../hooks/useNotification";
import { Notification } from "./Notification/Notification";
import { AnimatePresence } from "framer-motion";

export function NotificationContainer() {
  const { notifications } = useNotification();
  return (
    <div className={styles.notificationContainer} id="notification-root">
      <AnimatePresence>
        {notifications.map((notification, index) => (
          <Notification
            key={notification.text + "_" + index}
            text={notification.text}
            type={notification.type}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
