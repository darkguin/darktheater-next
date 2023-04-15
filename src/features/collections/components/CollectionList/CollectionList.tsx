'use client';

import './CollectionList.scss';

import { CollectionItem, CollectionType, useCollectionApi } from '@entities/collection';
import { CollectionCard, CollectionListLoader } from '@features/collections/components';
import React, { memo, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  type: CollectionType;
  offset?: number;
  initPage?: number;
  initItems: CollectionItem[];
}

function CollectionList({ type, initItems, initPage = 1, offset = 35 }: Props) {
  const isLoadCompleted = Boolean(initItems.length) || initItems.length <= offset;

  const { fetchByType } = useCollectionApi();

  const [items, setItems] = useState<CollectionItem[]>(initItems);
  const [hasMore, setHasMore] = useState(!isLoadCompleted);
  const [page, setPage] = useState<number>(initPage);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    isFirstRender ? setIsFirstRender(false) : resetCollection();
  }, [type]);

  const resetCollection = async () => {
    setPage(1);
    setItems([]);
    await fetchMoreItems();
  };

  const fetchMoreItems = async () => {
    const fetchedItems = await fetchByType(type, page, offset);

    setPage(page + 1);
    if (!items.length) return setHasMore(false);
    setItems([...items, ...fetchedItems] as CollectionItem[]);
  };

  return (
    <InfiniteScroll
      next={fetchMoreItems}
      hasMore={hasMore}
      loader={<CollectionListLoader />}
      dataLength={items.length}
      scrollableTarget="page__main"
      className="collection-list"
      height="100%"
    >
      {items.map((item) => (
        <CollectionCard key={`card-${item.id}`} data={item} />
      ))}
    </InfiniteScroll>
  );
}

export default memo(CollectionList);
