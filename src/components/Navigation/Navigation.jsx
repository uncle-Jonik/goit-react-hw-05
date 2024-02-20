import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/movies">MoviesPage</NavLink>
        </li>
      </ul>
    </nav>
  );
};
