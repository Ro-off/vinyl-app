import useSWR from "swr";
import { useGenres } from "./useGenres";
import { useCountries } from "./useCountries";

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export function useRelease(props) {
  const genres = useGenres();
  const countries = useCountries();

  const { releaseId } = props;

  const { data, isLoading, error } = useSWR(
    ["/api/releases/", releaseId],
    () => fetcher("/api/releases/" + releaseId),
    { suspense: true }
  );

  return {
    data:
      isLoading || error
        ? []
        : {
            genre: genres.isLoading
              ? "Loading"
              : String(
                  genres.data.find(
                    (element) => element.id == data.release.genre
                  ).title
                ),
            country: genres.isLoading
              ? "Loading"
              : String(
                  countries.data.find(
                    (element) => element.id == data.release.country
                  ).title
                ),
            year: data.release.year,
            imageSrc: data.release.cover_image,
            itemId: data.release.id,
            name: data.release.title,
            author: data.release.artist,
          },
  };
}
