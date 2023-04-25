import { GenresStrings as t } from '@core/dictionaries';
import { SelectOption } from '@shared/ui';

export const ContentGenreFilterParams = {
  placeholder: 'Select genres',
  options: [
    { id: 'filter-genre-1', label: t.Comedy, value: 'Комедия' },
    { id: 'filter-genre-2', label: t.Drama, value: 'Драма' },
    { id: 'filter-genre-3', label: t.Action, value: 'Боевик' },
    { id: 'filter-genre-4', label: t.Romantic, value: 'Романтический' },
    { id: 'filter-genre-5', label: t.Cartoon, value: 'Мультфильм' },
    { id: 'filter-genre-6', label: t.Detective, value: 'Детектив' },
    { id: 'filter-genre-7', label: t.Adventure, value: 'Приключения' },
    { id: 'filter-genre-8', label: t.Family, value: 'Семейный' },
    { id: 'filter-genre-9', label: t.Thriller, value: 'Триллер' },
    { id: 'filter-genre-10', label: t.Fiction, value: 'Фантастика' },
    { id: 'filter-genre-11', label: t.Fantasy, value: 'Фэнтези' },
    { id: 'filter-genre-12', label: t.Criminal, value: 'Криминальный' },
    { id: 'filter-genre-13', label: t.Horror, value: 'Ужасы' },
    { id: 'filter-genre-14', label: t.Historical, value: 'Исторический' },
    { id: 'filter-genre-15', label: t.Documentary, value: 'Документальный' },
    { id: 'filter-genre-16', label: t.Biography, value: 'Биография' },
    { id: 'filter-genre-17', label: t.Western, value: 'Вестерн' },
    { id: 'filter-genre-18', label: t.Military, value: 'Военный' },
    { id: 'filter-genre-19', label: t.Sports, value: 'Спортивный' },
    { id: 'filter-genre-20', label: t.Musical, value: 'Музыкальный' },
  ] satisfies SelectOption[],
};
