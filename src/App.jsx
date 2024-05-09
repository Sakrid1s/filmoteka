import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Loader from './components/loader/Loader';

const MoviesPage = lazy(() => import('./pages/moviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const MovieCast = lazy(() => import('./components/movieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/movieReviews/MovieReviews')
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
