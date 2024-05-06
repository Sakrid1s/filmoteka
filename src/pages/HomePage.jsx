import { useEffect, useState } from 'react';
import { getMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getMovies();
        setMovies(res.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
