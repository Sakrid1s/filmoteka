import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/moviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieCast from './components/movieCast/MovieCast';
import MovieReviews from './components/movieReviews/MovieReviews';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
