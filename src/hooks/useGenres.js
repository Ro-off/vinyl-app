import { useState } from "react";
import description from "../describeData.json/";

export function useGenres() {
  const [value] = useState([...Object.values(description.genres)]);
  return value;
}
