import { CollectionType } from '@entities/collection';

export const CollectionTabs = {
  [CollectionType.Favorite]: {
    id: 0,
    title: 'Favorite',
  },
  [CollectionType.WatchLater]: {
    id: 1,
    title: 'Watchlist',
  },
  [CollectionType.Watched]: {
    id: 2,
    title: 'Completed',
  },
} as Record<CollectionType, { id: number; title: string }>;