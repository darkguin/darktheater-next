'use client';

import './CatalogList.scss';

import { Movie, useMovieApi } from '@entities/movie';
import { Serial, useSerialApi } from '@entities/serial';
import { CatalogListLoader, CatalogType } from '@features/catalog';
import { Card } from '@shared/ui';
import { memo, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  type: CatalogType;
  offset?: number;
  startPage?: number;
  startItems: Movie[] | Serial[];
}

function CatalogList({ type, startItems, startPage = 1, offset = 25 }: Props) {
  const isSerialsCatalog = type === CatalogType.Serials;

  const { fetchAll: fetchMovies } = useMovieApi();
  const { fetchAll: fetchSerials } = useSerialApi();

  const [items, setItems] = useState<Movie[] | Serial[]>(startItems);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number>(startPage);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    isFirstRender ? setIsFirstRender(false) : resetCatalog();
  }, [type]);

  const resetCatalog = async () => {
    setPage(1);
    setItems([]);
    await fetchMoreItemsFn();
  };

  const fetchMoreItemsFn = async () => {
    const fetchedItems = isSerialsCatalog
      ? await fetchSerials(page, offset)
      : await fetchMovies(page, offset);

    setPage(page + 1);
    if (!items.length) return setHasMore(false);
    setItems([...items, ...fetchedItems] as Movie[] | Serial[]);
  };

  return (
    <InfiniteScroll
      next={fetchMoreItemsFn}
      hasMore={hasMore}
      loader={<CatalogListLoader />}
      dataLength={items.length}
      scrollableTarget="page__main"
      className="catalog-list"
      height="100%"
    >
      {items.map((item) => (
        <Card key={`card-${item.id}`} title={item.title} image={item.poster} imageQuality={25} />
      ))}
    </InfiniteScroll>
  );
}

export default memo(CatalogList);
