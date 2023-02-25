import { Media } from '@entities/media';

export interface Episode extends Media {
  source: string;
  preview: string;
  duration: number;
  createdAt: Date;
}
