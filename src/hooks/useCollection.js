import { useState } from "react";

const collection = [1, 2, 5, 12];

export function useCollection() {
  const [value, setValue] = useState(collection);

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
    collection: value,
    addToCollection: addToValueArr,
    removeFromCollection: removeFromValueArr,
  };
}
