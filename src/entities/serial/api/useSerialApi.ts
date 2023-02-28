import { ApiSerial, Serial, SerialMapper } from '@entities/serial';
import { withHttpClient } from '@providers/http-client';

import { ENDPOINTS } from '../values/endpoints';

export function useSerialApi() {
  const $http = withHttpClient();

  const fetchAll = (page = 1, size = 10): Promise<Serial[]> => {
    return $http
      .get<ApiSerial[]>(ENDPOINTS.SERIALS, { params: { page, size } })
      .then(({ data }) => data)
      .then(SerialMapper.mapMany);
  };

  const fetchById = (id: number | string): Promise<Serial> => {
    const path = ENDPOINTS.SERIALS_ID.replace(':id', id.toString());
    return $http
      .get<ApiSerial>(path)
      .then(({ data }) => data)
      .then(SerialMapper.map);
  };

  return { fetchAll, fetchById };
}
