import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (reviews.length === 0)
    return <h2 className={css.noReviews}>No reviews yet</h2>;

  return (
    <div className={css.container}>
      <ul className={css.reviewList}>
        {reviews.map((review) => (
          <li className={css.reviewItem} key={review.id}>
            <p className={css.reviewAuthor}>Author: {review.author}</p>
            <p className={css.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
