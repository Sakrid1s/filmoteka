import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList/movieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const res = await getTrendingMovies();
        setTrendingMovies(res.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <MovieList trendingMovies={trendingMovies} />
    </div>
  );
};

export default Home;
