import { ApiPlaylist, Playlist } from '@entities/playlist';
import { PlaylistMapper } from '@entities/playlist/mappers/playlist-mapper';
import { withHttpClient } from '@providers/http-client';

import { ENDPOINTS } from '../values/endpoints';

export function usePlaylistApi() {
  const $http = withHttpClient();

  const fetchAll = (page = 1, size = 10): Promise<Playlist[]> => {
    return $http
      .get<ApiPlaylist[]>(ENDPOINTS.PLAYLISTS, { params: { page, size } })
      .then(PlaylistMapper.mapMany);
  };

  const fetchById = (id: number | string): Promise<Playlist> => {
    const path = ENDPOINTS.PLAYLISTS_ID.replace(':id', id.toString());
    return $http.get<ApiPlaylist>(path).then(PlaylistMapper.map);
  };

  return { fetchAll, fetchById };
}
