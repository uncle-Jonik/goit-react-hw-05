import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ href, children }) => {
  return (
    <Link className={css.backLink} to={href}>
      {children}
    </Link>
  );
};
