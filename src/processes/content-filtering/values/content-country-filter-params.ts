import { SelectOption } from '@shared/ui';

export const ContentCountryFilterParams = {
  placeholder: 'Select countries',
  options: [
    { id: 'filter-country-1', label: 'USA', value: 'США' },
    { id: 'filter-country-2', label: 'Russia', value: 'Россия' },
    { id: 'filter-country-3', label: 'Japan', value: 'Япония' },
    { id: 'filter-country-4', label: 'Germany ', value: 'Германия' },
    { id: 'filter-country-0', label: 'Foreign', value: 'Зарубежные' },
    { id: 'filter-country-5', label: 'France', value: 'Франция' },
    { id: 'filter-country-6', label: 'Italy', value: 'Италия' },
    { id: 'filter-country-7', label: 'Denmark ', value: 'Дания' },
    { id: 'filter-country-8', label: 'Norway', value: 'Норвегия' },
  ] satisfies SelectOption[],
};
