import { Route } from '@core/values';
import { ContentType } from '@entities/media';

export function makeContentPath(id: number | string, contentType: ContentType) {
  const path = contentType === ContentType.MOVIE ? Route.Movie : Route.Serial;
  return path.replace(':id', id?.toString());
}