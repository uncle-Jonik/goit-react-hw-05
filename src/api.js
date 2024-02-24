import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//
//
//
//
export const trendingMovies = async ({ abortController }) => {
  const response = await axios.get('/trending/movie/day', {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGJjODQzOGU2MTk3ODMyZDM3ZTYzM2U0YjJhYTdmZSIsInN1YiI6IjY1YzhhNDU2MjY2Nzc4MDE3YzU5MTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwSNHih0KfqMFrvOBK5RWXqiQ6mEPUgh7p60Sbgrzmk',
    },
    params: {
      language: 'en-US',
      api_key: 'cdbc8438e6197832d37e633e4b2aa7fe',
    },
    signal: abortController.signal,
  });
  return response.data;
};
//
//
//
//
export const trendingMoviesByName = async (movieName, { abortController }) => {
  const response = await axios.get(`/search/movie`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGJjODQzOGU2MTk3ODMyZDM3ZTYzM2U0YjJhYTdmZSIsInN1YiI6IjY1YzhhNDU2MjY2Nzc4MDE3YzU5MTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwSNHih0KfqMFrvOBK5RWXqiQ6mEPUgh7p60Sbgrzmk',
    },
    params: {
      query: movieName,
      include_adult: true,
      language: 'en-US',
      api_key: 'cdbc8438e6197832d37e633e4b2aa7fe',
    },
    signal: abortController.signal,
  });
  return response.data;
};
//
//
//
//
export const trendingMoviesById = async (movieId, { abortController }) => {
  const response = await axios.get(`/movie/${movieId}`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGJjODQzOGU2MTk3ODMyZDM3ZTYzM2U0YjJhYTdmZSIsInN1YiI6IjY1YzhhNDU2MjY2Nzc4MDE3YzU5MTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwSNHih0KfqMFrvOBK5RWXqiQ6mEPUgh7p60Sbgrzmk',
    },
    params: {
      language: 'en-US',
      api_key: 'cdbc8438e6197832d37e633e4b2aa7fe',
    },
    signal: abortController.signal,
  });
  return response.data;
};
//
//
//
//
export const trendingMoviesCredits = async (movieId, { abortController }) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGJjODQzOGU2MTk3ODMyZDM3ZTYzM2U0YjJhYTdmZSIsInN1YiI6IjY1YzhhNDU2MjY2Nzc4MDE3YzU5MTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwSNHih0KfqMFrvOBK5RWXqiQ6mEPUgh7p60Sbgrzmk',
    },
    params: {
      language: 'en-US',
      api_key: 'cdbc8438e6197832d37e633e4b2aa7fe',
    },
    signal: abortController.signal,
  });
  return response.data;
};
//
//
//
//
export const trendingMoviesReviews = async (movieId, { abortController }) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGJjODQzOGU2MTk3ODMyZDM3ZTYzM2U0YjJhYTdmZSIsInN1YiI6IjY1YzhhNDU2MjY2Nzc4MDE3YzU5MTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwSNHih0KfqMFrvOBK5RWXqiQ6mEPUgh7p60Sbgrzmk',
    },
    params: {
      language: 'en-US',
      api_key: 'cdbc8438e6197832d37e633e4b2aa7fe',
    },
    signal: abortController.signal,
  });
  return response.data;
};
