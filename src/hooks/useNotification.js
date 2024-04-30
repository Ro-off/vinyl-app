import { createGlobalState } from "react-hooks-global-state";
const initialState = { notifications: [] };
const { useGlobalState } = createGlobalState(initialState);

export function useNotification() {
  const [notifications, setNotifications] = useGlobalState("notifications");
  function createNotification(notification) {
    setNotifications([...notifications, notification]);
  }
  return { notifications, createNotification };
}
