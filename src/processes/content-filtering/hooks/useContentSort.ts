import { ContentFilterQuery, ContentSortParams } from '@processes/content-filtering';
import { SelectOption } from '@shared/ui';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function useContentSort() {
  const searchParams = useSearchParams();

  const getRawSortOption = (): string => {
    return searchParams.get(ContentFilterQuery.SortBy) ?? '';
  };

  const [sortOption, setSortOption] = useState<string>(getRawSortOption);

  const onSortOptionSelected = ({ value }: SelectOption) => {
    setSortOption(value);
  };

  const defaultSortOption = (): SelectOption | undefined => {
    const rawSortOption = getRawSortOption();
    if (!rawSortOption) return;
    return ContentSortParams.options.find(({ value }) => value === rawSortOption);
  };

  return { sortOption, defaultSortOption, setSortOption, onSortOptionSelected };
}