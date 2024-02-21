import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { trendingMoviesById } from '../api';
import { MovieDetails } from '../components/MovieDetails';
import { Navigation } from '../components/Navigation/Navigation';

export default function MovieDetailsPage() {
  const [data, setData] = useState(null);
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
  }, [movieId]);

  return (
    <>
      {error && <b>opps</b>}

      <div>
        {data && (
          <MovieDetails
            title={data.title}
            img={data.poster_path}
            average={data.vote_average}
            count={data.vote_count}
            overview={data.overview}
            genres={data.genres}
          />
        )}
      </div>

      <div>
        <Navigation
          linkFirst="Cast"
          linkSecond="Reviews"
          href={{ linkFirst: 'cast', linkSecond: 'reviews' }}
        />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
