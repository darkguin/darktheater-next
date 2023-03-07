import { Media } from '@entities/media';

export function generateMediaTag({ ageLimit, year, imdbRating, genres }: Media) {
  const finalAgeLimit = ageLimit ? `${ageLimit}+` : '';
  const IMDB = imdbRating ? `${imdbRating} IMDB` : '';

  return [finalAgeLimit, IMDB, genres[0], year].filter(Boolean).join(', ');
}
