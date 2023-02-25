export interface ApiMedia {
  id: number | string;
  content_type: string;
  title: string;
  description: string;
  year: number;
  release_date: Date;
  age_limit: number;
  poster: string;
  background: string;
  imdb_rating: number;
  imdb_vote_count: number;
  kinopoisk_rating: number;
  kinopoisk_vote_count: number;
  countries: {
    id: number;
    name: string;
    abbr: string;
  }[];
  genres: {
    id: number;
    name: string;
  }[];
  actors: {
    id: number;
    name: string;
  }[];
  directors: {
    id: number;
    name: string;
  }[];
}
