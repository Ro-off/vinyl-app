import { useState } from "react";
import { useNotification } from "./useNotification";

export function useCollection() {
  const { createNotification } = useNotification();
  const [value, setValue] = useState(
    localStorage.getItem("Collection")
      ? JSON.parse(localStorage.getItem("Collection"))
      : []
  );

  function addToValueArr(elem) {
    const newValue = [...value, elem];
    setValue(newValue);
    syncLocalStorageWithValue(newValue);
    createNotification({ text: "Removed from collection" });
  }

  function removeFromValueArr(elem) {
    if (value.includes(elem)) {
      const newValue = value.filter((e) => e !== elem);
      setValue(newValue);
      syncLocalStorageWithValue(newValue);
      createNotification({ text: "Added to collection" });
    }
  }

  function syncLocalStorageWithValue(value) {
    localStorage.setItem("Collection", JSON.stringify(value));
  }

  function toggleValue(elem) {
    value.includes(elem) ? removeFromValueArr(elem) : addToValueArr(elem);
  }
  return {
    collection: value,
    toggleCollection: toggleValue,
  };
}
