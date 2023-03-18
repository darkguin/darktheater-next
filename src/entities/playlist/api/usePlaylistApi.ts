import { API_BASE_URL } from '@core/values';
import { ApiPlaylist, Playlist } from '@entities/playlist';
import { PlaylistMapper } from '@entities/playlist/mappers/playlist-mapper';
import { createFetcherUrl, fetcher } from '@shared/fetcher';

import { ENDPOINTS } from '../values/endpoints';

export function usePlaylistApi() {
  const fetchAll = (page = 1, size = 10): Promise<Playlist[]> => {
    const url = createFetcherUrl([API_BASE_URL, ENDPOINTS.PLAYLISTS], { page, size });
    return fetcher<ApiPlaylist[]>('get', url).then(PlaylistMapper.mapMany);
  };

  const fetchById = (id: number | string): Promise<Playlist> => {
    const path = ENDPOINTS.PLAYLISTS_ID.replace(':id', id.toString());
    const url = createFetcherUrl([API_BASE_URL, path]);
    return fetcher<ApiPlaylist>('get', url).then(PlaylistMapper.map);
  };

  return { fetchAll, fetchById };
}
