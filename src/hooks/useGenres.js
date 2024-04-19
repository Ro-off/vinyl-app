import { useState } from "react";

export function useGenres() {
  const [value] = useState({
    1: "rock",
    2: "pop",
    3: "country",
    4: "hip-hop",
    5: "jazz",
  });
  return value;
}
