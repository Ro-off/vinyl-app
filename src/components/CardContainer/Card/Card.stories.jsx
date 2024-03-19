import { renderCard } from "./Card";

export default {
  title: "Card",
  component: renderCard,
};

const defaultArgs = {
  itemId: "1",
  name: "The Name",
  author: "The Author",
  genreId: "1",
  year: "2021",
  countryId: "1",
  imageSrc:
    "https://i.discogs.com/GCNPRSAsHiTRxtsZj1uTFk48NDTNSh3DRt7YrpHUmMc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDAw/MjkwLTE1NTE1ODQ1/MzEtODczNi5qcGVn.jpeg",
};

export const Default = () => renderCard({ ...defaultArgs });

export const LargeName = () =>
  renderCard({
    ...defaultArgs,
    name: "The Very Long Name of this card item that displays on the page",
  });
