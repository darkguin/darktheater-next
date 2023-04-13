import { Route } from '@core/values';
import { CollectionType } from '@entities/collection';

export function makeCollectionPath(type: CollectionType) {
  return `${Route.Collections}?type=${type}`;
}