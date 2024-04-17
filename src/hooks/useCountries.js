import { useState } from "react";

export function useCountries() {
  const [value] = useState({
    1: "USA",
    2: "UK",
    3: "France",
    4: "Germany",
    5: "Ukraine",
    6: "Netherlands",
    7: "Italy",
    8: "Spain",
    9: "Sweden",
    10: "Norway",
    11: "Denmark",
    12: "Finland",
    13: "Iceland",
    14: "Australia",
    15: "New Zealand",
    16: "Canada",
    17: "Mexico",
    18: "Brazil",
    19: "Argentina",
    20: "Chile",
  });
  return value;
}
