import { API_BASE_URL } from '@core/values';
import { createFetcherUrl, FetcherParams } from '@shared/fetcher';

export function getApiUrl(path: string, params: FetcherParams = {}) {
  return createFetcherUrl([API_BASE_URL, path], params);
}