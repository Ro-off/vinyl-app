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
    genre: genres.isLoading
      ? "Loading"
      : genres.data.find((element) => element.id == [item.genreId]).title,
    country: countries.isLoading
      ? "Loading"
      : countries.data.find((element) => element.id == [item.countryId]).title,
  }));
}
