import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../api/tmdb-api';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import MoviesForm from '../components/moviesForm/MoviesForm';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const movieName = searchParams.get('query') ?? '';
  console.log(searchMovie);

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      try {
        setLoader(true);
        setError(false);
        const res = await getMovieByQuery(movieName);
        setSearchMovie(res.data.results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMovieByQuery();
  }, [movieName]);

  return (
    <div>
      <p>Movies page</p>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <MoviesForm setSearchParams={setSearchParams} />
    </div>
  );
};

export default MoviesPage;
