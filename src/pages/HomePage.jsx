import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList/MovieList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  console.log(trendingMovies);
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
      <section>
        <MovieList trendingMovies={trendingMovies} />
      </section>
    </div>
  );
};

export default HomePage;
