import { FilterForm } from "../components/FilterForm/FilterForm";
import { Helmet } from "react-helmet-async";

export const SearchPage = () => {
  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <FilterForm />
    </>
  );
};
