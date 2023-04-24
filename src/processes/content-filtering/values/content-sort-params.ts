import { SortParamsStrings as t } from '@core/dictionaries';
import { SelectOption } from '@shared/ui';

export const ContentSortParams = {
  placeholder: 'Sort by',
  options: [
    { id: 'sort-opt-1', label: t.ByName, value: 'title' },
    { id: 'sort-opt-2', label: t.ByYear, value: 'year' },
    { id: 'sort-opt-3', label: t.ByIMDB, value: 'imdb_rating' },
    { id: 'sort-opt-4', label: t.ByKinopoisk, value: 'kinopoisk_rating' },
  ] satisfies SelectOption[],
};
