import { ContentFilterQuery } from '@processes/content-filtering';
import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export const PERIOD_START_POSITION = 1900;
export const PERIOD_END_POSITION = dayjs().year() + 1;
export const PERIOD_DEFAULT_POSITION = dayjs().year().toString();

export function usePeriodFilter() {
  const searchParams = useSearchParams();

  const [period, setPeriod] = useState<string[]>(() => {
    const fromYear = searchParams.get(ContentFilterQuery.FromYear) ?? '';
    const toYear = searchParams.get(ContentFilterQuery.ToYear) ?? '';

    return [fromYear, toYear];
  });

  const validatePeriodFilter = (target: HTMLInputElement) => {
    if (target.value.length > 4) {
      target.value = target.value.slice(0, 4);
    }

    if (target.value.length !== 4) return;

    if (
      Number(target.value) > PERIOD_END_POSITION ||
      Number(target.value) < PERIOD_START_POSITION
    ) {
      target.value = PERIOD_DEFAULT_POSITION;
    }
  };

  const onStartPeriodChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    validatePeriodFilter(target);
    if (target.value.length < 4) return;
    setPeriod([target.value, period[1]]);
  };

  const onEndPeriodChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    validatePeriodFilter(target);
    if (target.value.length < 4) return;
    setPeriod([period[0], target.value]);
  };

  return { period, setPeriod, onStartPeriodChange, onEndPeriodChange };
}