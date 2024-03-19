import { useState } from "react";

const favorites = [3, 4, 7];

export function useFavorites() {
  const [value, setValue] = useState(favorites);

  function addToValueArr(elem) {
    const newValue = [...value, elem];
    setValue(newValue);
  }

  function removeFromValueArr(elem) {
    if (value.includes(elem)) {
      const newValue = value.filter((e) => e !== elem);
      setValue(newValue);
    }
  }
  return {
    favorites: value,
    addToFavorites: addToValueArr,
    removeFromFavorites: removeFromValueArr,
  };
}
