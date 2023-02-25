import { ApiMedia } from '@entities/media';
import { ApiEpisode } from '@entities/serial';

export interface ApiSeason extends ApiMedia {
  episodes: ApiEpisode[];
}
