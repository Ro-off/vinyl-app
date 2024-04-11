import { Filter } from "../components/Filter/Filter";
import { Helmet } from "react-helmet-async";

export const SearchPage = () => {
  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Filter />
    </>
  );
};
