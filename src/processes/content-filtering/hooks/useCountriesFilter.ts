import { ContentCountryFilterParams, ContentFilterQuery } from '@processes/content-filtering';
import { SelectOption } from '@shared/ui';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function useCountriesFilter() {
  const searchParams = useSearchParams();

  const getRawCountries = (): string[] => {
    return searchParams.get(ContentFilterQuery.Countries)?.split(',') ?? [];
  };

  const [countries, setCounties] = useState<string[]>(getRawCountries);

  const onCountriesSelected = (options: SelectOption[]) => {
    setCounties(options.map(({ value }) => value).filter(Boolean));
  };

  const getDefaultCountries = (): SelectOption[] => {
    return getRawCountries()
      .map((country) => ContentCountryFilterParams.options.find(({ value }) => value === country))
      .filter(Boolean) as SelectOption[];
  };

  return { countries, setCounties, getDefaultCountries, onCountriesSelected };
}