import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../api/tmdb-api';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import MoviesForm from '../components/moviesForm/MoviesForm';

const MoviesPage = () => {
  const [queryMovie, setQueryMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  // const filmName = searcParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      try {
        setLoader(true);
        setError(false);
        const res = await getMovieByQuery();
        setQueryMovie(res.data.results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMovieByQuery();
  }, []);
  return (
    <div>
      <p>Movies page</p>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <MoviesForm />
    </div>
  );
};

export default MoviesPage;
