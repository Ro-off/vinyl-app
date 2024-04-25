import { useState } from "react";

export function useCollection() {
  const [value, setValue] = useState(
    localStorage.getItem("Collection")
      ? JSON.parse(localStorage.getItem("Collection"))
      : []
  );

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
