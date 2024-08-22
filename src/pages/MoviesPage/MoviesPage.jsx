import { useEffect, useState } from "react";
import { fetchMovieSearch } from "../../services/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query");

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = async () => {
    if (!inputValue) return;
    try {
      searchParams.set("query", inputValue);
      setSearchParams(searchParams);
      const data = await fetchMovieSearch(inputValue);
      setMovies(data);
      setInputValue(""); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        const data = await fetchMovieSearch(query);
        setMovies(data);
      } catch (error) {
        console.log(error);
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
      <div className={css.searchContainer}>
        <input
          className={css.input}
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button onClick={handleSearch} className={css.button}>
          Search
        </button>
      </div>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.listItem}>
            <Link to={`/movies/${movie.id}`} className={css.link} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
