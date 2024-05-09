import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/tmdb-api';
import GoBackBtn from '../../components/goBackBtn/GoBackBtn';
import Loader from '../../components/loader/Loader';
import ErrorMesage from '../../components/errorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state ?? '/movies';

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
    <div className={css.container}>
      {loader && <Loader />}
      {error && <ErrorMesage />}
      <GoBackBtn to={backLinkHref}>Go back to movies</GoBackBtn>
      <div className={css.movieDetails}>
        <div>
          <img
            className={css.movieDetailsImage}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </div>
        <div className={css.movieDetailsInfo}>
          <h1 className={css.movieDetailsInfoTitle}>{title}</h1>
          <p className={css.movieDetailsInfoText}>User score: {vote_average}</p>
          <h2 className={css.movieDetailsInfoSubtitle}>Overview</h2>
          <p className={css.movieDetailsInfoText}>{overview}</p>
          <h2 className={css.movieDetailsInfoSubtitle}>Genres</h2>
          <p className={css.movieDetailsInfoText}>
            {genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h3 className={css.additionalInfoTitle}>Additional information</h3>
        <ul className={css.additionalInfoUl}>
          <li className={css.additionalInfoItem}>
            <Link
              to={`/movies/${movieId}/cast`}
              className={css.additionalInfoLink}
            >
              Cast
            </Link>
          </li>
          <li className={css.additionalInfoItem}>
            <Link
              to={`/movies/${movieId}/reviews`}
              className={css.additionalInfoLink}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
