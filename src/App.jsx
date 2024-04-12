import { NavLink, Route, Routes } from 'react-router-dom';
import { getTmdbTrendingMovies } from './api/tmdb-api';
import clsx from 'clsx';
import css from './App.module.css';
import Home from './pages/HomePage';
import Movies from './pages/MoviesPage';
import NotFound from './pages/NotFoundPage';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const res = getTmdbTrendingMovies();
console.log(res);
function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
