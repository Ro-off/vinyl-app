import { useEffect, useState } from "react";

export function useCollection() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const localStorageValue = localStorage.getItem("Collection")
      ? JSON.parse(localStorage.getItem("Collection"))
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
