import { Media } from '@entities/media';
import { PlaylistType } from '@entities/playlist';

export interface Playlist {
  id: number;
  title: string;
  description: string;
  playlistType: PlaylistType;
  playlistItems: Media[];
}
