import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.listItem} key={movie.id}>
          <Link to={`/movies/${movie.id}`} className={css.link}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
