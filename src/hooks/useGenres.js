import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.genres);

export function useGenres() {
  const { data, isLoading, error } = useSWR("/api/genres", fetcher, {
    suspense: true,
  });
  return { data: data, isLoading, error };
}
