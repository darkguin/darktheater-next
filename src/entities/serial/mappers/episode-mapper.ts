import { MediaMapper } from '@entities/media';
import { ApiEpisode, Episode } from '@entities/serial';

import { ImplementsStatic, Mapper } from '@/core';

@ImplementsStatic<Mapper<ApiEpisode, Episode>>()
export class EpisodeMapper {
  static mapMany(items: ApiEpisode[]): Episode[] {
    return items.map(EpisodeMapper.map);
  }

  static map(api: ApiEpisode): Episode {
    return {
      ...MediaMapper.map(api),
      source: api.source,
      preview: api.preview,
      duration: api.duration,
      createdAt: api.created_at,
    };
  }
}
