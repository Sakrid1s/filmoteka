import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../../api/tmdb-api';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import MoviesForm from '../../components/moviesForm/MoviesForm';
import { Link, useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') return;

    const fetchMovieByQuery = async () => {
      try {
        setLoader(true);
        setError(false);
        const res = await getMovieByQuery(movieName);
        setSearchMovie(res.data.results);
        sessionStorage.setItem(
          'searchedMovies',
          JSON.stringify(res.data.results)
        );
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMovieByQuery();
  }, [movieName]);

  useEffect(() => {
    const savedMovies = sessionStorage.getItem('searchedMovies');
    if (savedMovies) {
      setSearchMovie(JSON.parse(savedMovies));
    }
  }, []);

  return (
    <div className={css.container}>
      {loader && <Loader className={css.loader} />}
      {error && <ErrorMessage className={css.errorMessage} />}
      <MoviesForm setSearchParams={setSearchParams} />
      <ul className={css.moviesList}>
        {searchMovie &&
          searchMovie.map(movie => (
            <li key={movie.id} className={css.movieItem}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className={css.movieTitle}>{movie.title}</div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
