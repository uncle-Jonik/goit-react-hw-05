import css from './MovieCastList.module.css';

export const MovieCastList = ({ items: { cast } }) => {
  return (
    <div className={css.castWrapper}>
      <ul className={css.castList}>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
