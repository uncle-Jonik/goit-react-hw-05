import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import { Navigation } from './Navigation/Navigation';
import MovieCast from './MovieCast';
import MovieReviews from './MovieReviews';

export const App = () => {
  return (
    <>
      <Navigation
        linkFirst="HomePage"
        linkSecond="MoviesPage"
        href={{ linkFirst: '/', linkSecond: '/movies' }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
