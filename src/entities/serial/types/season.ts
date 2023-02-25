import { Media } from '@entities/media';
import { Episode } from '@entities/serial';

export interface Season extends Media {
  episodes: Episode[];
}
