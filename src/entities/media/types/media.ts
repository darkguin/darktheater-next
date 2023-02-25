import { ContentType } from '@entities/media';

import { Actor } from './actor';
import { Country } from './country';
import { Director } from './director';
import { Genre } from './genre';

export interface Media {
  id: number | string;
  contentType: ContentType;
  title: string;
  description: string;
  year: number;
  releaseDate: Date;
  ageLimit: number;
  poster: string;
  background: string;
  imdbRating: number;
  imdbVoteCount: number;
  kinopoiskRating: number;
  kinopoiskVoteCount: number;
  countries: Country[];
  genres: Genre[];
  actors: Actor[];
  directors: Director[];
}
