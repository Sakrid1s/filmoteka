import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/tmdb-api';
import MovieList from '../components/movieList/MovieList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const res = await getTrendingMovies();
        setTrendingMovies(res.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <p>Home page</p>
      <section>
        <MovieList trendingMovies={trendingMovies} />
      </section>
    </div>
  );
};

export default HomePage;
