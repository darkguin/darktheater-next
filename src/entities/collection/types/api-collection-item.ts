import { CollectionType } from '@entities/collection';
import { ApiMedia } from '@entities/media';

export interface ApiCollectionItem {
  id: number;
  user_id: number;
  created_at: string;
  library_type: CollectionType;
  offset?: number;
  object: ApiMedia;
}
