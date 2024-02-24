import { useSearchParams } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation';
import { useEffect, useState } from 'react';
import { MovieSearch } from '../../components/MovieSearch/MovieSearch';
import { Loader } from '../../components/Loader';
import { MovieList } from '../../components/MovieList/MovieList';
import { trendingMoviesByName } from '../../api';

export default function MoviesPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const search = params.get('search') ?? '';

  const changeSearch = newSearch => {
    params.set('search', newSearch);
    setParams(params);
  };

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await trendingMoviesByName(search, { abortController: controller });
        setData(response.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <Navigation />
      {error && <p>Oops! Something went wrong.</p>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <MovieSearch onSearch={changeSearch} value={search} />
          {data.length > 0 && <MovieList items={data} />}
        </>
      )}
    </>
  );
}
