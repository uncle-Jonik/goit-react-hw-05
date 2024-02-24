import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trendingMoviesCredits } from '../../api';
import { Loader } from '../Loader';
import { MovieCastList } from './MovieCastList/MovieCastList';

export default function MovieCast() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await trendingMoviesCredits(movieId, { abortController: controller });
        setData(response);
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
  }, [movieId]);
  return (
    <>
      {error && <p>Oops! Something went wrong.</p>}
      {loading ? <Loader /> : <>{data && <MovieCastList items={data} />}</>}
    </>
  );
}
