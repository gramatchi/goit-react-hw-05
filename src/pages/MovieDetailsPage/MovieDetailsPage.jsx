import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import css from "./MovieDetailsPage.module.css";
import { LifeLine } from "react-loading-indicators";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state)



  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <LifeLine color="red" size="medium" text="" textColor="" />;
  }

  return (
    <div>
      <button onClick={() => navigate(goBackRef.current)}>Go back</button>
      <div className={css.card}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <p className={css.title}>{movie.original_title}</p>
        <p className={css.userScore}>
          User score: {Math.ceil(movie.vote_average * 10)} %
        </p>
        <p className={css.overview}>Overview: {movie.overview}</p>
        <p className={css.genres}>
          Genres: {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
