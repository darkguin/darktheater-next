import { Media } from '@entities/media';

export interface Movie extends Media {
  source: string;
  preview: string;
  duration: number;
  createdAt: Date;
}

