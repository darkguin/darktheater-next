import { CollectionType } from '@entities/collection';
import { Media } from '@entities/media';

export interface CollectionItem {
  id: number;
  userId: number;
  createdAt: string;
  type: CollectionType;
  offset?: number;
  content: Media;
}
