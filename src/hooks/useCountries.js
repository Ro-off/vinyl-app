import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.countries);

export function useCountries() {
  const { data, isLoading, error } = useSWR("/api/countries", fetcher, {
    suspense: true,
  });
  return { data, isLoading, error };
}
