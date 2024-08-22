import { useEffect, useState } from "react";
import { fetchMovieSearch } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { LifeLine } from "react-loading-indicators";

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const query = searchParams.get("query");

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchMovieSearch(query);
        if (data.length === 0) {
          setError("No movies found.");
        } else {
          setMovies(data);
        }
      } catch (error) {
        setError("Try again."); 
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    setInputValue(query);
  }, [searchParams]);

  return (
    <div className={css.container}>
      <form onSubmit={handleFormSubmit} className={css.searchContainer}>
        <input
          className={css.input}
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      {isLoading && <LifeLine color="red" size="medium" text="" textColor="" />}
      {error && <p className={css.error}>{error}</p>}

      {!isLoading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
