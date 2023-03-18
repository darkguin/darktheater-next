import { MediaMapper } from '@entities/media';
import { ApiMovie } from '@entities/movie/types/api-movie';
import { Movie } from '@entities/movie/types/movie';

import { ImplementsStatic, Mapper } from '@/core';

@ImplementsStatic<Mapper<ApiMovie, Movie>>()
export class MovieMapper {
  static mapMany(items: ApiMovie[]): Movie[] {
    return items.map(MovieMapper.map);
  }

  static map(api: ApiMovie): Movie {
    return {
      ...MediaMapper.map(api),
      source: api.source,
      preview: api.preview,
      duration: api.duration,
      createdAt: api.created_at,
    };
  }
}
