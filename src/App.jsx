import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
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
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<div>Home page</div>} />
          <Route path="/movies" element={<div>Movies page</div>} />
          <Route path="/movies/:id" element={<div>Movie detail Page</div>}>
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
