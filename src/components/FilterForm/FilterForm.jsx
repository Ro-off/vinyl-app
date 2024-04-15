import styles from "./FilterForm.module.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Select } from "./Select/Select";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";

export function FilterForm() {
  const navigate = useNavigate();

  const artistSchema = Yup.string().min(5);
  const genreSchema = Yup.string().min(5);
  const decadeSchema = Yup.string();
  const countrySchema = Yup.string();

  const searchParamsSchema = Yup.object({
    artist: artistSchema,
    genre: genreSchema,
    decade: decadeSchema,
    country: countrySchema,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   artist: null,
    //   genre: null,
    //   country: null,
    //   decade: null,
    // },
    resolver: yupResolver(searchParamsSchema),
  });

  function navigateToResultsPage(data) {
    let searchParams = new URLSearchParams();
    if (data.artist) searchParams.append("artist", data.artist);
    if (data.genre) searchParams.append("genre", data.genre);
    if (data.country) searchParams.append("country", data.country);
    if (data.decade) searchParams.append("decade", data.decade);
    if (searchParams.size !== 0) navigate("/search/results?" + searchParams);
  }

  function onSubmit(e) {
    // e.preventDefault();
    navigateToResultsPage(e);
  }

  return (
    <div className="filter">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.filterForm}>
        <div className={`${styles.artist} ${styles.nativeInput}`}>
          <input
            className={clsx(styles.field, styles.artist, {
              [styles.error]: errors.artist,
            })}
            type="text"
            name="artist"
            placeholder="Artist"
            {...register("artist")}
          />
          <p className={styles.errorMessage}>{errors.artist?.message}</p>
        </div>

        <Controller
          control={control}
          name="genre"
          render={({ field }) => (
            <Select
              className={`${styles.genre} ${styles.field}`}
              {...field}
              title="Genre"
              options={[
                { value: "rock", title: "Rock" },
                { value: "pop", title: "Pop" },
                { value: "country", title: "Country" },
                { value: "hip-hop", title: "Hip-hop" },
                { value: "jazz", title: "Jazz" },
              ]}
              error={errors.genre?.message}
              onChange={(e) => field.onChange(e)}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="decade"
          render={({ field }) => (
            <Select
              className={`${styles.decade} ${styles.field}`}
              {...field}
              title="Decade"
              options={[
                { value: "1950-60", title: "1950-60 рр." },
                { value: "1960-70", title: "1960-70 рр." },
                { value: "1970-80", title: "1970-80 рр." },
                { value: "1980-90", title: "1980-90 рр." },
                { value: "1990-00", title: "1990-00 рр." },
                { value: "2000-10", title: "2000-10 рр." },
                { value: "2010-20", title: "2010-20 рр." },
                { value: "2020-10", title: "2000-30 рр." },
              ]}
              onChange={(e) => field.onChange(e)}
              error={errors.decade?.message}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <Select
              className={`${styles.country} ${styles.field}`}
              {...field}
              title="Country"
              options={[
                { value: "usa", title: "USA" },
                { value: "uk", title: "UK" },
                { value: "france", title: "France" },
                { value: "germany", title: "Germany" },
                { value: "ukraine", title: "Ukraine" },
              ]}
              onChange={(e) => field.onChange(e)}
              error={errors.country?.message}
            />
          )}
        ></Controller>
        <input
          type="submit"
          value="Search"
          className={`${styles.filterSearch} `}
        />
      </form>
    </div>
  );
}
