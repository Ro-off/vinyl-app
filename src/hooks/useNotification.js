import { useEffect } from "react";
import { createGlobalState } from "react-hooks-global-state";
const initialState = { notifications: [] };
const { useGlobalState } = createGlobalState(initialState);

export function useNotification() {
  const timeout = 3000;

  const [notifications, setNotifications] = useGlobalState("notifications");
  function createNotification(notification) {
    setNotifications([...notifications, notification]);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([]);
    }, timeout);

    return () => clearTimeout(timer);
  }, [notifications, setNotifications]);

  return { notifications, createNotification };
}
