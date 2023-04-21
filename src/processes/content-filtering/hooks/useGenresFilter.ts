import { ContentFilterQuery, ContentGenreFilterParams } from '@processes/content-filtering';
import { SelectOption } from '@shared/ui';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function useGenresFilter() {
  const searchParams = useSearchParams();

  const getRawGenres = (): string[] => {
    return searchParams.get(ContentFilterQuery.Genres)?.split(',') ?? [];
  };

  const [genres, setGenres] = useState<string[]>(getRawGenres);

  const onGenresSelected = (options: SelectOption[]) => {
    setGenres(options.map(({ value }) => value).filter(Boolean));
  };

  const defaultGenres = (): SelectOption[] => {
    return getRawGenres()
      .map((genre) => ContentGenreFilterParams.options.find(({ value }) => value === genre))
      .filter(Boolean) as SelectOption[];
  };

  return { genres, setGenres, onGenresSelected, defaultGenres };
}