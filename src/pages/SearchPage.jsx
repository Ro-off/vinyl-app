import { FilterForm } from "../components/FilterForm/FilterForm";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const navigate = useNavigate();

  function navigateToResultsPage(data) {
    let searchParams = new URLSearchParams();
    if (data.artist) searchParams.append("artist", data.artist);
    if (data.genre) searchParams.append("genre", data.genre);
    if (data.country) searchParams.append("country", data.country);
    if (data.decade) searchParams.append("decade", data.decade);
    if (searchParams.size !== 0) navigate("/search/results?" + searchParams);
  }

  function onSubmit(values) {
    // e.preventDefault();
    navigateToResultsPage(values);
  }

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <FilterForm onSubmit={onSubmit} />
    </>
  );
};
