import { ApiMedia } from '@entities/media';
import { PlaylistType } from '@entities/playlist';

export interface ApiPlaylist {
  id: number;
  title: string;
  description: string;
  playlist_type: PlaylistType;
  playlist_items: ApiMedia[];
}
