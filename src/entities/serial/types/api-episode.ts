import { ApiMedia } from '@entities/media';

export interface ApiEpisode extends ApiMedia {
  source: string;
  preview: string;
  duration: number;
  created_at: Date;
}
