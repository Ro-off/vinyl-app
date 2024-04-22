import styles from "./FilterForm.module.css";
import { useForm, Controller } from "react-hook-form";
import { Select } from "./Select/Select";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import propTypes from "prop-types";
import { useGenres } from "../../hooks/useGenres";
import { useCountries } from "../../hooks/useCountries";

const artistSchema = Yup.string()
  .min(2)
  .max(80)
  .matches(/^[a-zA-Z\s-/]+$/);
const genreSchema = Yup.string();
const decadeSchema = Yup.string().matches(
  /^(1950-60|1960-70|1970-80|1980-90|1990-00|2000-10|2010-20|2020-10)$/
);
const countrySchema = Yup.string();

const searchParamsSchema = Yup.object({
  artist: artistSchema.nullable(true),
  genre: genreSchema.nullable(true),
  decade: decadeSchema.nullable(true),
  country: countrySchema.nullable(true),
});

export function FilterForm(props) {
  const { onSubmit } = props;
  const genres = useGenres();
  const countries = useCountries();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      artist: null,
      genre: null,
      country: null,
      decade: null,
    },
    resolver: yupResolver(searchParamsSchema),
  });

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
              options={
                genres.isLoading
                  ? []
                  : genres.data.map((genre) => ({
                      value: genre.id,
                      title: genre.title,
                    }))
              }
              error={errors.genre?.message}
              isLoading={genres.isLoading}
            />
          )}
        />
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
              error={errors.decade?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <Select
              className={`${styles.country} ${styles.field}`}
              {...field}
              title="Country"
              options={
                countries.isLoading
                  ? []
                  : countries.data.map((country) => ({
                      value: country.id,
                      title: country.title,
                    }))
              }
              isLoading={countries.isLoading}
              error={errors.country?.message}
            />
          )}
        />
        <input
          type="submit"
          value="Search"
          className={clsx(styles.filterSearch, {
            [styles.disabled]: !isDirty,
          })}
          disabled={!isDirty}
        />
      </form>
    </div>
  );
}

FilterForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
