import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trendingMoviesCredits } from '../api';
import { CastList } from './CastList';

export default function MovieCast() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fechData() {
      try {
        const response = await trendingMoviesCredits(movieId, { abortController: controller });
        setData(response.cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fechData();
  }, [movieId]);

  return (
    <>
      {error && <b>opps</b>}

      {data && <CastList list={data} />}
    </>
  );
}
