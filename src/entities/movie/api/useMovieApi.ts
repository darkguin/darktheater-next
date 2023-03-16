import { API_BASE_URL } from '@core/values';
import { ApiMovie, Movie, MovieMapper } from '@entities/movie';
import { createFetcherUrl, fetcher } from '@shared/fetcher';

import { ENDPOINTS } from '../values/endpoints';

export function useMovieApi() {
  const fetchAll = (page = 1, size = 25): Promise<Movie[]> => {
    const url = createFetcherUrl([API_BASE_URL, ENDPOINTS.MOVIES], { page, size });
    return fetcher<ApiMovie[]>('get', url).then(MovieMapper.mapMany);
  };

  const fetchById = (id: number | string): Promise<Movie> => {
    const path = ENDPOINTS.MOVIES_ID.replace(':id', id.toString());
    const url = createFetcherUrl([API_BASE_URL, path]);

    return fetcher<ApiMovie>('get', url).then(MovieMapper.map);
  };

  return { fetchAll, fetchById };
}
