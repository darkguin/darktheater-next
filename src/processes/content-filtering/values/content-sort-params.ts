import { SelectOption } from '@shared/ui';

export const ContentSortParams = {
  placeholder: 'Sort by',
  options: [
    { id: 'sort-opt-1', label: 'A-Z', value: 'title' },
    { id: 'sort-opt-2', label: 'Release year', value: 'year' },
    { id: 'sort-opt-3', label: 'IMDB rating', value: 'imdb_rating' },
    { id: 'sort-opt-4', label: 'Kinopoisk rating', value: 'kinopoisk_rating' },
  ] satisfies SelectOption[],
};
