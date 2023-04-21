'use client';

import './CatalogSidebar.scss';

import { CatalogPageStrings as t } from '@core/dictionaries';
import { Route } from '@core/values';
import { CatalogType, makeCatalogPath } from '@features/catalog';
import {
  ContentCountryFilterParams,
  ContentFilterQuery,
  ContentGenreFilterParams,
  ContentSortParams,
  PERIOD_END_POSITION,
  PERIOD_START_POSITION,
  useContentSort,
  useCountriesFilter,
  useGenresFilter,
  usePeriodFilter,
} from '@processes/content-filtering';
import { FontIcon, Icons, Multiselect, Select, TextField } from '@shared/ui';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';

function CatalogSidebar() {
  const currentParams = useSearchParams();

  const { sortOption, defaultSortOption, onSortOptionSelected } = useContentSort();
  const { genres, defaultGenres, onGenresSelected } = useGenresFilter();
  const { countries, defaultCountries, onCountriesSelected } = useCountriesFilter();
  const { period, onStartPeriodChange, onEndPeriodChange } = usePeriodFilter();

  const getDefaultUrl = () => {
    return makeCatalogPath(currentParams.get('type') as CatalogType);
  };

  const getUrlWithFilters = () => {
    const params = new URLSearchParams(currentParams);

    // @NOTE: Clearing old filtering queries
    Object.values(ContentFilterQuery).forEach((name) => params.delete(name));

    if (sortOption) params.set(ContentFilterQuery.SortBy, sortOption);
    if (genres.length) params.set(ContentFilterQuery.Genres, genres.join(','));
    if (countries.length) params.set(ContentFilterQuery.Countries, countries.join(','));
    if (period[0]) params.set(ContentFilterQuery.FromYear, period[0]);
    if (period[1]) params.set(ContentFilterQuery.ToYear, period[1]);

    return `${Route.Catalog}?${params.toString()}`;
  };

  return (
    <div className="catalog-sidebar">
      <Select
        {...ContentSortParams}
        defaultValue={defaultSortOption()}
        onSelect={onSortOptionSelected}
      />

      <div className="catalog-sidebar__title title-bold-2">
        <FontIcon className="catalog-sidebar__title-icon" name={Icons.FILTER} />
        {t.sidebar.filters_title}
      </div>

      <div className="catalog-sidebar__info title-regular-0">
        <FontIcon className="catalog-sidebar__info-icon" name={Icons.INFORMATION} />
        {t.sidebar.filters_description}
      </div>

      <Multiselect
        {...ContentGenreFilterParams}
        defaultValue={defaultGenres()}
        onSelect={onGenresSelected}
      />

      <Multiselect
        {...ContentCountryFilterParams}
        defaultValue={defaultCountries()}
        onSelect={onCountriesSelected}
      />

      <div className="catalog-sidebar__info title-regular-0">
        <FontIcon className="catalog-sidebar__info-icon" name={Icons.INFORMATION} />
        {t.sidebar.period_filter_title}
      </div>

      <div className="catalog-sidebar__row">
        <TextField
          placeholder="from"
          type="number"
          defaultValue={period[0]}
          min={PERIOD_START_POSITION}
          max={PERIOD_END_POSITION}
          onInput={onStartPeriodChange}
        />
        <TextField
          placeholder="to"
          type="number"
          defaultValue={period[1]}
          min={PERIOD_START_POSITION}
          max={PERIOD_END_POSITION}
          onInput={onEndPeriodChange}
        />
      </div>

      <Link href={getUrlWithFilters()} className="catalog-sidebar__button btn btn--contrast">
        {t.sidebar.apply_button}
      </Link>

      <Link href={getDefaultUrl()} className="catalog-sidebar__button btn btn--contrast-text">
        {t.sidebar.reset_button}
      </Link>
    </div>
  );
}

export default memo(CatalogSidebar);
