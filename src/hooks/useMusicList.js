import { useState } from "react";
import { musicListData } from "../musicData.json";
import { useGenres } from "./useGenres";
import { useCountries } from "./useCountries";

export function useMusicList() {
  const genres = useGenres();
  const countries = useCountries();

  const [value] = useState([...Object.values(musicListData)]);

  return value.map((item) => ({
    ...item,
    genre: genres[item.genreId],
    country: countries[item.countryId],
  }));
}
