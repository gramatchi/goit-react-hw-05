import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then((data) => setCast(data));
  }, [movieId]);

  if (!cast) return <h2>No actors, sorry no sorry</h2>;

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt=""
          />
          {actor.name} <p>Character: character</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
