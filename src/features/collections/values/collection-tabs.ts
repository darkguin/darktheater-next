import { CollectionType } from '@entities/collection';

export type CollectionTabsItem = { id: number; title: string };

export const CollectionTabs: Record<CollectionType, CollectionTabsItem | null> = {
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
  [CollectionType.History]: null,
};