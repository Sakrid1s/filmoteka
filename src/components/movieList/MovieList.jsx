import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`} />
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
