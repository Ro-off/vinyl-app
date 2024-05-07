import { useEffect } from "react";

export function useKeyPress(keyCode, callback) {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.keyCode === keyCode) {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [keyCode, callback]);
}
