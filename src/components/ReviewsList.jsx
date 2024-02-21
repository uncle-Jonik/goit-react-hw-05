export const ReviewsList = ({ list }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <b>{item.author}</b>
          <p>{item.created_at}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};
