export enum ContentFilterQuery {
  SortBy = 'content__order_by',
  Genres = 'genre__name__in',
  Countries = 'country__name__in',
  FromYear = 'content__year__gte',
  ToYear = 'content__year__lte',
}