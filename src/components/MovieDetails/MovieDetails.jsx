import { NavLink } from 'react-router-dom';
import css from './MovieDetails.module.css';
import clsx from 'clsx';

export const MovieDetails = ({
  items: { poster_path, title, vote_average, vote_count, overview, genres },
}) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <div className={css.movieDetailsWrapper}>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
        <div className={css.information}>
          <h1>{title}</h1>
          <p>Vote average: {vote_average}</p>
          <p>Vote count: {vote_count}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(item => item.name).join(', ')}</p>
          <h3>Additional information </h3>
          <div className={css.subpageLink}>
            <NavLink className={buildLinkClass} to="cast">
              Cast
            </NavLink>
            <NavLink className={buildLinkClass} to="reviews">
              Reviews
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
