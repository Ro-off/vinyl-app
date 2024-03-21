import { useState } from "react";

export function useCollection() {
  const [value, setValue] = useState([1, 2, 5, 12]);

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

  function toggleValue(elem) {
    value.includes(elem) ? removeFromValueArr(elem) : addToValueArr(elem);
  }
  return {
    collection: value,
    toggleCollection: toggleValue,
  };
}
