import { Suspense, useEffect, useRef, useState } from 'react';
import { BackLink } from '../../components/BackLink.jsx/BackLink';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation';
import { trendingMoviesById } from '../../api';
import { Loader } from '../../components/Loader';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await trendingMoviesById(movieId, { abortController: controller });
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
      <Navigation />

      {error && <p>Oops! Something went wrong.</p>}
      <BackLink href={backLinkRef.current ?? '/movies'}>Back to all Movies</BackLink>

      {loading ? <Loader /> : <>{data && <MovieDetails items={data} />}</>}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
