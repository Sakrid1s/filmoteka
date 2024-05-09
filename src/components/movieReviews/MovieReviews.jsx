import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { getMovieReviews } from '../../api/tmdb-api';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoader(true);
        setError(false);
        const res = await getMovieReviews(movieId);
        setReviews(res.data.results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchReview();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <h2>Rewiews</h2>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews</p>
      )}
    </div>
  );
};

export default MovieReviews;
