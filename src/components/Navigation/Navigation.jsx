import { Link, NavLink } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <>
      <nav className={css.navigationWrapper}>
        <Link to="/">
          <RiMovie2Line /> Movie search
        </Link>
        <ul className={css.navigationList}>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
