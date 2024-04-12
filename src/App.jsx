import { NavLink, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import css from './App.module.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

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
