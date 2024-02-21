import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trendingMoviesReviews } from '../api';
import { ReviewsList } from './ReviewsList';

export default function MovieReviews() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fechData() {
      try {
        const response = await trendingMoviesReviews(movieId, { abortController: controller });
        setData(response.results);
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

      {data && data.length > 0 ? <ReviewsList list={data} /> : <p>nothing</p>}
    </>
  );
}
