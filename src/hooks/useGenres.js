import { useState } from "react";

export function useGenres() {
  const [value] = useState({
    1: "rock",
    2: "pop",
    4: "country",
    5: "hip-hop",
    6: "jazz",
  });
  return value;
}
