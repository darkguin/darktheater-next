import { API_BASE_URL } from '@core/values';
import { ApiSerial, Serial, SerialMapper } from '@entities/serial';
import { createFetcherUrl, fetcher } from '@shared/fetcher';

import { ENDPOINTS } from '../values/endpoints';

export function useSerialApi() {
  const fetchAll = (page = 1, size = 25, params?: Record<string, string>): Promise<Serial[]> => {
    const queryParams = { page, size, ...params };
    const url = createFetcherUrl([API_BASE_URL, ENDPOINTS.SERIALS], queryParams);

    return fetcher<ApiSerial[]>('get', url).then(SerialMapper.mapMany);
  };

  const fetchById = (id: number | string): Promise<Serial> => {
    const path = ENDPOINTS.SERIALS_ID.replace(':id', id.toString());
    const url = createFetcherUrl([API_BASE_URL, path]);

    return fetcher<ApiSerial>('get', url).then(SerialMapper.map);
  };

  return { fetchAll, fetchById };
}
