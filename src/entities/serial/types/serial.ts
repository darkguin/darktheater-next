import { Media } from '@entities/media';
import { Season } from '@entities/serial';

export interface Serial extends Media {
  seasons: Season[];
}
