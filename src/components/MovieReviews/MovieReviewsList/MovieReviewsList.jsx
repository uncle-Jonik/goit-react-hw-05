import css from './MovieReviewsList.module.css';
import { FaRegSadCry } from 'react-icons/fa';

export const MovieReviewsList = ({ items: { results } }) => {
  return (
    <div className={css.movieReviewsWrapper}>
      <ul className={css.reviewsList}>
        {results.length > 0 ? (
          results.map(({ id, content, author_details: { name, avatar_path } }) => (
            <li key={id}>
              <div>
                <img src={`https://image.tmdb.org/t/p/w200${avatar_path}`} alt={name} />
                <h3>{name}</h3>
              </div>
              <article>{content}</article>
              <div></div>
            </li>
          ))
        ) : (
          <div className={css.nothingWrapper}>
            <FaRegSadCry />
            <p>Unfortunately, there are no reviews</p>
          </div>
        )}
      </ul>
    </div>
  );
};
