import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader';
import { trendingMovies } from '../../api';

export default function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await trendingMovies({ abortController: controller });
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
  }, []);

  return (
    <>
      <Navigation />

      <h1 className={css.trendText}>Trending today</h1>
      {error && <p className={css.error}>Ooooops... Try reloading the page</p>}
      {loading ? <Loader /> : data.length > 0 && <MovieList items={data} />}
    </>
  );
}
