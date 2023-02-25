import { ApiMedia } from '@entities/media';

export interface ApiMovie extends ApiMedia {
  source: string;
  preview: string;
  duration: number;
  created_at: Date;
}