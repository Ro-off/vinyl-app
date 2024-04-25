import { useState } from "react";

export function useFavorites() {
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
  }

  function removeFromValueArr(elem) {
    if (value.includes(elem)) {
      const newValue = value.filter((e) => e !== elem);
      setValue(newValue);
      syncLocalStorageWithValue(newValue);
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
