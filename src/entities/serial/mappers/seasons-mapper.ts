import { MediaMapper } from '@entities/media';
import { ApiSeason, EpisodeMapper, Season } from '@entities/serial';
import { ImplementsStatic, Mapper } from '@providers/http-client';

@ImplementsStatic<Mapper<ApiSeason, Season>>()
export class SeasonsMapper {
  static mapMany(items: ApiSeason[]): Season[] {
    return items.map(SeasonsMapper.map);
  }

  static map(api: ApiSeason): Season {
    return {
      ...MediaMapper.map(api),
      episodes: api.episodes ? EpisodeMapper.mapMany(api.episodes) : [],
    };
  }
}
