import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trendingMoviesById } from '../api';
import { MovieDetails } from '../components/MovieDetails';

export default function MovieDetailsPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fechData() {
      try {
        const response = await trendingMoviesById(movieId, { abortController: controller });
        setData(response);
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
  }, [movieId]);

  return (
    <>
      {error && <b>opps</b>}

      <MovieDetails
        title={data.title}
        img={data.poster_path}
        average={data.vote_average}
        count={data.vote_count}
        overview={data.overview}
        genres={data.genres}
      />
    </>
  );
}
