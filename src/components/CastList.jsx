export const CastList = ({ list }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt={item.name} />
          <b>{item.name}</b>
          <p>{item.character}</p>
        </li>
      ))}
    </ul>
  );
};
