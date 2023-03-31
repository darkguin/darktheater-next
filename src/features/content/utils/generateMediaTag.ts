import { Media } from '@entities/media';

export function generateMediaTag({ ageLimit, year, imdbRating, genres }: Media) {
  const finalAgeLimit = ageLimit ? `${ageLimit}+` : '';
  const IMDB = imdbRating ? `${imdbRating} IMDB` : '';
  const genre = typeof genres[0] === 'string' ? genres[0] : genres[0]?.name;

  return [finalAgeLimit, IMDB, genre, year].filter(Boolean).join(', ');
}
