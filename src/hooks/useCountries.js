import { useState } from "react";
import description from "../describeData.json/";

export function useCountries() {
  const [value] = useState([...Object.values(description.countries)]);
  return value;
}
