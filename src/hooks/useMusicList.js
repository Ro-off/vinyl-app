import { useGenres } from "./useGenres";
import { useCountries } from "./useCountries";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useMusicList() {
  const genres = useGenres();
  const countries = useCountries();

  const { data, isLoading, error } = useSWR("/api/search", fetcher);

  // console.log("MusicList:");
  // console.log(isLoading ? "Wait... be patient..." : data.results);

  // const [musicList] = useState([...Object.values(musicListData)]);

  return isLoading || error
    ? []
    : data.results.map((item) => ({
        // ...item,
        imageSrc: item.thumb_image,
        itemId: item.id,
        name: item.title,
        year: item.year,
        genre: genres.isLoading
          ? "Loading"
          : String(
              genres.data.find((element) => element.id == [item.genre]).title
            ),
        country: countries.isLoading
          ? "Loading"
          : String(
              countries.data.find((element) => element.id == [item.country])
                .title
            ),
      }));
}
