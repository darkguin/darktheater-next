import { ApiMovie, Movie, MovieMapper } from '@entities/movie';
import { withHttpClient } from '@providers/http-client';

import { ENDPOINTS } from '../values/endpoints';

export function useMovieApi() {
  const $http = withHttpClient();

  const fetchAll = (page = 1, size = 10): Promise<Movie[]> => {
    return $http
      .get<ApiMovie[]>(ENDPOINTS.MOVIES, { params: { page, size } })
      .then(({ data }) => data)
      .then(MovieMapper.mapMany);
  };

  const fetchById = (id: number | string): Promise<Movie> => {
    const path = ENDPOINTS.MOVIES_ID.replace(':id', id.toString());
    return $http
      .get<ApiMovie>(path)
      .then(({ data }) => data)
      .then(MovieMapper.map);
  };

  return { fetchAll, fetchById };
}
