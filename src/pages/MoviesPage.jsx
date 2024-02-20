import { useEffect, useState } from 'react';
import { SearchForm } from '../components/SearchForm';
import { trendingMoviesByName } from '../api';
import { MoviesList } from '../components/MoviesList';

export default function MoviesPage() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    if (value === '') {
      return;
    }

    const controller = new AbortController();

    async function fechData() {
      try {
        const response = await trendingMoviesByName(value, { abortController: controller });
        setData(response.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fechData();

    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <>
      <SearchForm onSearch={setValue} />
      {error && <b>opps</b>}
      <MoviesList moviesList={data} />
    </>
  );
}
