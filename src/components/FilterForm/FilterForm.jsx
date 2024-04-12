import styles from "./FilterForm.module.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Select } from "./Select/Select";

export function FilterForm() {
  // const [filterFields, setFilterFields] = useState({
  //   artist: "",
  //   genre: "genre",
  //   country: "country",
  // });

  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      artist: "",
      genre: null,
      country: null,
    },
  });

  // function handleChange(e, field) {
  //   setfilterFields({ ...filterFields, [field]: e.target.value });
  // }

  function navigateToResultsPage(data) {
    let searchParams = new URLSearchParams();
    if (data.artist !== "") searchParams.append("artist", data.artist);
    if (data.genre !== "Genre") searchParams.append("genre", data.genre);
    if (data.country !== "Country")
      searchParams.append("country", data.country);
    if (searchParams.size !== 0) navigate("/search/results?" + searchParams);
  }

  function onSubmit(e) {
    // e.preventDefault();
    navigateToResultsPage(e.data);
  }

  return (
    <div className="filter">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.filterForm}>
        <input
          type="text"
          name="artist"
          className={styles.artist}
          placeholder="Artist"
          {...register("data.artist")}
        />
        <Controller
          control={control}
          name="genre"
          render={({ field: { values, name } }) => (
            <Select className={styles.genre} values={["sda", "asd"]} />
          )}
        ></Controller>
        <select
          name="decade"
          className={styles.decade}
          title="genre"
          defaultValue="placeholder"
        >
          <option className={styles.filterPlaceholder} value="placeholder">
            Decade
          </option>
          <option value="1950-60">1950-60 рр.</option>
          <option value="1960-70">1960-70 рр.</option>
          <option value="1970-80">1970-80 рр.</option>
          <option value="1980-90">1980-90 рр.</option>
          <option value="1990-00">1990-00 рр.</option>
          <option value="2000-10">2000-10 рр.</option>
          <option value="2010-20">2010-20 рр.</option>
          <option value="2020-30">2020-30 рр.</option>
        </select>
        <select
          name="country"
          className={styles.country}
          title="country"
          {...register("data.country")}
          // value={filterFields.country}
          // onChange={(e) => handleChange(e, "country")}
        >
          <option className={styles.filterPlaceholder}>Country</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="ukraine">Ukraine</option>
        </select>
        <input type="submit" value="Search" className={styles.filterSearch} />
      </form>
    </div>
  );
}
