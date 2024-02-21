export const MovieDetails = ({ title, img, average, count, overview, genres }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${img}}`} alt="poster_path" />
      <h1>{title}</h1>
      <p>Vote average: {average}</p>
      <p>Vote count: {count}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>
        {genres.map(item => (
          <span key={item.id}>{item.name}</span>
        ))}
      </p>
    </div>
  );
};
