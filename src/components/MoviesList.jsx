import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesList.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
