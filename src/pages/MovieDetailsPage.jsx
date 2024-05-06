import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdb-api';
import Loader from '../components/loader/Loader';
import ErrorMesage from '../components/errorMessage/ErrorMessage';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoader(true);
        setError(false);
        const res = await getMovieDetails(movieId);
        setMovieDetails(res.data);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMesage />;
  }

  const { title, poster_path, overview, vote_average, genres } = movieDetails;

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMesage />}

      {movieDetails ? (
        <div>
          <div>
            <img
              style={{ width: '300px' }}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          </div>
          <div>
            <h1>{title}</h1>
            <p>User score: {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      ) : (
        <ErrorMesage />
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>
              <p>Cast</p>
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>
              <p>Reviews</p>
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
