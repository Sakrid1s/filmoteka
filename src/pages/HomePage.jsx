import { useEffect, useState } from 'react';
import { getMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList/MovieList';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoader(true);
        setError(false);
        const res = await getMovies();
        setMovies(res.data.results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
