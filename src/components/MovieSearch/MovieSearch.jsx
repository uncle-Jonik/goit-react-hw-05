import css from './MovieSearch.module.css';
import { CgSearch } from 'react-icons/cg';

export const MovieSearch = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (query.trim() === '') return alert('');
    onSearch(query);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.movieForm}>
      <input placeholder="What film do you search?" name="search" required />
      <button type="submit">
        <CgSearch />
        search
      </button>
    </form>
  );
};
