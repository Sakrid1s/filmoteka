import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import Loader from './components/loader/Loader';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieCast from './components/movieCast/MovieCast';
import MovieReviews from './components/movieReviews/MovieReviews';

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
