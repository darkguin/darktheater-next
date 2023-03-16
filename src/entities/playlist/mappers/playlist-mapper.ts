import { MediaMapper } from '@entities/media';
import { ApiPlaylist, Playlist } from '@entities/playlist';

import { ImplementsStatic, Mapper } from '@/core';

@ImplementsStatic<Mapper<ApiPlaylist, Playlist>>()
export class PlaylistMapper {
  static mapMany(items: ApiPlaylist[]): Playlist[] {
    return items.map(PlaylistMapper.map);
  }

  static map(api: ApiPlaylist): Playlist {
    return {
      id: api.id,
      title: api.title,
      description: api.description,
      type: api.playlist_type,
      items: (api.playlist_items || []).map(MediaMapper.map),
    };
  }
}
