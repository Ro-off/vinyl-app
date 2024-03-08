import { musicListData } from "../musicData.json";
import description from "../describeData.json/";

export const musicList = [...Object.values(musicListData)];
export const genres = [...Object.values(description.genres)];
export const countries = [...Object.values(description.countries)];

export const collection = [1, 2, 5, 12];
export const favorites = [3, 4, 7];

export function addToCollection() {
  console.error("Collection not implemented");
}

export function removeFromCollection() {
  console.error("Collection not implemented");
}

export function addToFavorites() {
  console.error("Favorites not implemented");
}

export function removeFromFavorites() {
  console.error("Favorites not implemented");
}
