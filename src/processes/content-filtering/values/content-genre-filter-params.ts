import { SelectOption } from '@shared/ui';

export const ContentGenreFilterParams = {
  placeholder: 'Select genres',
  options: [
    { id: 'filter-genre-1', label: 'Comedy', value: 'Комедия' },
    { id: 'filter-genre-2', label: 'Drama', value: 'Драма' },
    { id: 'filter-genre-3', label: 'Action', value: 'Боевик' },
    { id: 'filter-genre-4', label: 'Romantic', value: 'Романтический' },
    { id: 'filter-genre-5', label: 'Cartoon', value: 'Мультфильм' },
    { id: 'filter-genre-6', label: 'Detective', value: 'Детектив' },
    { id: 'filter-genre-7', label: 'Adventure', value: 'Приключения' },
    { id: 'filter-genre-8', label: 'Family', value: 'Семейный' },
    { id: 'filter-genre-9', label: 'Thriller', value: 'Триллер' },
    { id: 'filter-genre-10', label: 'Fiction', value: 'Фантастика' },
    { id: 'filter-genre-11', label: 'Fantasy', value: 'Фэнтези' },
    { id: 'filter-genre-12', label: 'Criminal', value: 'Криминальный' },
    { id: 'filter-genre-13', label: 'Horror', value: 'Ужасы' },
    { id: 'filter-genre-14', label: 'Historical', value: 'Исторический' },
    { id: 'filter-genre-15', label: 'Documentary', value: 'Документальный' },
    { id: 'filter-genre-16', label: 'Biography', value: 'Биография' },
    { id: 'filter-genre-17', label: 'Western', value: 'Вестерн' },
    { id: 'filter-genre-18', label: 'Military', value: 'Военный' },
    { id: 'filter-genre-19', label: 'Sports', value: 'Спортивный' },
    { id: 'filter-genre-20', label: 'Musical', value: 'Музыкальный' },
  ] satisfies SelectOption[],
};
