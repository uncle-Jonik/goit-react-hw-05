import { Route, Routes } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import NotFoundPage from '../pages/NotFoundPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
import { Navigation } from './Navigation/Navigation';
// import MovieCast from './MovieCast';
// import MovieReviews from './MovieReviews';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));

export const App = () => {
  return (
    <>
      <Navigation
        linkFirst="HomePage"
        linkSecond="MoviesPage"
        href={{ linkFirst: '/', linkSecond: '/movies' }}
      />

      <Suspense fallback={<b>Loading page....</b>}>
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
    </>
  );
};
