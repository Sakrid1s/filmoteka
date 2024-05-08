import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../api/tmdb-api';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import MoviesForm from '../components/moviesForm/MoviesForm';
import { Link, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const movieName = searchParams.get('query') ?? '';
  console.log(searchMovie);

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
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <MoviesForm setSearchParams={setSearchParams} />
      {searchMovie && (
        <ul>
          {searchMovie.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
