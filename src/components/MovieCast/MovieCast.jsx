import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error("Failed to fetch cast:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  if (cast.length === 0) return <h2>No actors found</h2>;

  return (
    <div className={css.container}>
      <ul className={css.actorList}>
        {cast.map((actor) => (
          <li className={css.actorItem} key={actor.id}>
            <img
              className={css.actorImage}
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <p className={css.actorName}>{actor.name}</p>
            <p className={css.actorCharacter}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
