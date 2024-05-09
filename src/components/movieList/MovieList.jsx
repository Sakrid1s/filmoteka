import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Trending Movies</h1>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id} className={css.listItem}>
            <Link to={`/movies/${movie.id}`} className={css.link}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
