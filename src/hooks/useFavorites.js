import { useState, useEffect } from "react";

export function useFavorites() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const localStorageValue = localStorage.getItem("Favorites")
      ? JSON.parse(localStorage.getItem("Favorites"))
      : [];
    setValue(localStorageValue);
  }, [setValue]);

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

  function syncLocalStorageWithValue(value) {
    localStorage.setItem("Favorites", JSON.stringify(value));
  }

  function toggleValue(elem) {
    value.includes(elem) ? removeFromValueArr(elem) : addToValueArr(elem);
  }

  return {
    favorites: value,
    toggleFavorites: toggleValue,
  };
}
