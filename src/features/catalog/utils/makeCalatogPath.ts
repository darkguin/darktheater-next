import { Route } from '@core/values';
import { CatalogType } from '@features/catalog';

export function makeCatalogPath(type: CatalogType) {
  return `${Route.Catalog}?type=${type}`;
}