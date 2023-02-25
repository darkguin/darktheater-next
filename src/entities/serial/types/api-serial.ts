import { ApiMedia } from '@entities/media';
import { ApiSeason } from '@entities/serial';

export interface ApiSerial extends ApiMedia {
  seasons: ApiSeason[];
}
