import { ApiCollectionItem, CollectionItem } from '@entities/collection';
import { MediaMapper } from '@entities/media';

import { ImplementsStatic, Mapper } from '@/core';

@ImplementsStatic<Mapper<ApiCollectionItem, CollectionItem>>()
export class CollectionItemMapper {
  static mapMany(items: ApiCollectionItem[]): CollectionItem[] {
    return items.map(CollectionItemMapper.map);
  }

  static map(api: ApiCollectionItem): CollectionItem {
    return {
      id: api.id,
      userId: api.user_id,
      createdAt: api.created_at,
      type: api.library_type,
      offset: api.offset,
      content: MediaMapper.map(api.object),
    };
  }
}
