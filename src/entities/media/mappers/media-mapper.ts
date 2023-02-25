import { Actor, ApiMedia, ContentType, Country, Director, Genre, Media } from '@entities/media';
import { ImplementsStatic, Mapper } from '@providers/http-client';

@ImplementsStatic<Mapper<ApiMedia, Media>>()
export class MediaMapper {
  static map(api: ApiMedia): Media {
    return {
      id: api.id,
      contentType: api.content_type as ContentType,
      title: api.title,
      description: api.description,
      year: api.year,
      releaseDate: api.release_date,
      ageLimit: api.age_limit,
      poster: api.poster,
      background: api.background,
      imdbRating: api.imdb_rating,
      imdbVoteCount: api.imdb_vote_count,
      kinopoiskRating: api.kinopoisk_rating,
      kinopoiskVoteCount: api.kinopoisk_vote_count,
      countries: (api.countries as Country[]) || [],
      genres: (api.genres as Genre[]) || [],
      actors: (api.actors as Actor[]) || [],
      directors: (api.directors as Director[]) || [],
    };
  }
}
