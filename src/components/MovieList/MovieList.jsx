import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <div className={css.movieListBox}>
      <ul className={css.movieList}>
        {items.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link className={css.movieLink} to={`/movies/${id}`} state={location}>
              <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
