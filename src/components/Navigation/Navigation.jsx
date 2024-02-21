import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ linkFirst, linkSecond, href }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.navigation}>
      <ul>
        <li>
          <NavLink to={href.linkFirst} className={buildLinkClass}>
            {linkFirst}
          </NavLink>
        </li>
        <li>
          <NavLink to={href.linkSecond} className={buildLinkClass}>
            {linkSecond}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
