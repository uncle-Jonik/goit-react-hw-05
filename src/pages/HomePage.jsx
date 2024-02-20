import { useEffect } from 'react';
import { useState } from 'react';
import { trendingMovies } from '../api';
import { MoviesList } from '../components/MoviesList';

export default function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fechData() {
      try {
        const response = await trendingMovies({ abortController: controller });
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
  }, []);

  return (
    <>
      {error && <b>opps</b>}
      {data.length > 0 && <MoviesList moviesList={data} />}
    </>
  );
}
