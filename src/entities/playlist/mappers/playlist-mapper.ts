import { MediaMapper } from '@entities/media';
import { ApiPlaylist, Playlist } from '@entities/playlist';
import { ImplementsStatic, Mapper } from '@providers/http-client';

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
      playlistType: api.playlist_type,
      playlistItems: (api.playlist_items || []).map(MediaMapper.map),
    };
  }
}
