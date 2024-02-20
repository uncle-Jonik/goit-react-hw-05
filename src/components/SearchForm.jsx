export const SearchForm = ({ onSearch }) => {
  const hendleSubmit = e => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);

    if (e.target.elements.query.value.trim() === '') {
      return window.alert('EMPTY STRING');
    }
    e.target.reset();
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
