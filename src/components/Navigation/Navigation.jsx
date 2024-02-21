import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ linkFirst, linkSecond, href }) => {
  return (
    <nav className={css.navigation}>
      <ul>
        <li>
          <NavLink to={href.linkFirst}>{linkFirst}</NavLink>
        </li>
        <li>
          <NavLink to={href.linkSecond}>{linkSecond}</NavLink>
        </li>
      </ul>
    </nav>
  );
};
