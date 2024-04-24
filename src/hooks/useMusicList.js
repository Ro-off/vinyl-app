import { useGenres } from "./useGenres";
import { useCountries } from "./useCountries";
import useSWR from "swr";

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

function translateLocalSearchParamsToServerUrl(url, searchParams) {
  let urlParams = new URLSearchParams(url);
  if (searchParams.artist) {
    urlParams.append("artist", searchParams.artist);
  }
  if (searchParams.genre) {
    urlParams.append("genre", searchParams.genre);
  }
  if (searchParams.decade) {
    urlParams.append("year_from", searchParams.decade.split("-")[0]);
  }
  if (searchParams.decade) {
    urlParams.append(
      "year_to",
      searchParams.decade.slice(0, 2) + searchParams.decade.split("-")[1]
    );
  }
  if (searchParams.country) {
    urlParams.append("country", searchParams.country);
  }
  if (searchParams.offset) {
    urlParams.append("offset", searchParams.offset);
  }
  if (searchParams.limit) {
    urlParams.append("limit", searchParams.limit);
  }
  return url + "?" + urlParams;
}

export function useMusicList(
  searchParams = {
    artist: null,
    genre: null,
    year_from: null,
    year_to: null,
    country: null,
    offset: 0,
    limit: 12,
  }
) {
  const genres = useGenres();
  const countries = useCountries();

  const { data, isLoading, error } = useSWR(["/api/search", searchParams], () =>
    fetcher(
      translateLocalSearchParamsToServerUrl("/api/search", searchParams),
      {
        suspense: true,
      }
    )
  );
  // console.log(data);

  return {
    data:
      isLoading || error
        ? []
        : data.results.map((item) => ({
            // ...item,
            imageSrc: item.thumb_image,
            itemId: item.id,
            name: item.title,
            year: item.year,
            author: item.artist,
            genre: genres.isLoading
              ? "Loading"
              : String(
                  genres.data.find((element) => element.id == [item.genre])
                    .title
                ),
            country: countries.isLoading
              ? "Loading"
              : String(
                  countries.data.find((element) => element.id == [item.country])
                    .title
                ),
          })),
    size: isLoading || error ? 0 : data.total,
  };
}
