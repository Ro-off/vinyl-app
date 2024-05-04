import { useState } from "react";
import { useNotification } from "./useNotification";

export function useFavorites() {
  const { createNotification } = useNotification();
  const [value, setValue] = useState(
    localStorage.getItem("Favorites")
      ? JSON.parse(localStorage.getItem("Favorites"))
      : []
  );

  function syncLocalStorageWithValue(value) {
    localStorage.setItem("Favorites", JSON.stringify(value));
  }

  function addToValueArr(elem) {
    const newValue = [...value, elem];
    setValue(newValue);
    syncLocalStorageWithValue(newValue);
    createNotification({ text: "Added to favorites" });
  }

  function removeFromValueArr(elem) {
    if (value.includes(elem)) {
      const newValue = value.filter((e) => e !== elem);
      setValue(newValue);
      syncLocalStorageWithValue(newValue);
      createNotification({ text: "Removed from favorites" });
    }
  }

  function toggleValue(elem) {
    value.includes(elem) ? removeFromValueArr(elem) : addToValueArr(elem);
  }

  return {
    favorites: value,
    toggleFavorites: toggleValue,
  };
}
