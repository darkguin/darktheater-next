import { API_BASE_URL, StorageKey } from '@core/values';
import { ApiCollectionItem, CollectionItem, CollectionType } from '@entities/collection';
import { CollectionItemMapper } from '@entities/collection/mappers/collection-item-mapper';
import { ContentType } from '@entities/media';
import { createFetcherHeaders, createFetcherUrl, fetcher } from '@shared/fetcher';
import { isServer } from '@shared/utils';
import { getCookie } from 'cookies-next';
import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { ENDPOINTS } from '../values/endpoints';

export function useCollectionApi(cookies?: () => RequestCookies | ReadonlyRequestCookies) {
  const accessToken = isServer()
    ? cookies?.().get(StorageKey.AccessToken)?.value ?? ''
    : (getCookie(StorageKey.AccessToken) as string) ?? '';

  const fetchByType = (type: CollectionType, page = 1, size = 10): Promise<CollectionItem[]> => {
    const path = ENDPOINTS.COLLECTION.replace(':type', type);
    const url = createFetcherUrl([API_BASE_URL, path], { page, size });

    const options: RequestInit = {
      headers: createFetcherHeaders({ Authorization: `Bearer ${accessToken}` }),
      cache: 'no-store',
    };

    return fetcher<ApiCollectionItem[]>('get', url, options).then(CollectionItemMapper.mapMany);
  };

  const createItem = (
    type: CollectionType,
    contentId: number | string,
    contentType: ContentType,
    offset?: number,
  ): Promise<CollectionItem> => {
    const url = createFetcherUrl([API_BASE_URL, ENDPOINTS.ADD_COLLECTION_ITEM]);

    const options: RequestInit = {
      headers: createFetcherHeaders({ Authorization: `Bearer ${accessToken}` }),
      body: JSON.stringify({
        library_type: type,
        object_id: contentId,
        object_type: contentType,
        offset: offset ?? null,
      }),
      cache: 'no-store',
    };

    return fetcher<ApiCollectionItem>('post', url, options).then(CollectionItemMapper.map);
  };

  const deleteItem = (id: number | string): Promise<void> => {
    const path = ENDPOINTS.DELETE_COLLECTION_ITEM.replace(':id', id.toString());
    const url = createFetcherUrl([API_BASE_URL, path]);

    const options: RequestInit = {
      headers: createFetcherHeaders({ Authorization: `Bearer ${accessToken}` }),
      cache: 'no-store',
    };

    return fetcher<void>('delete', url, options);
  };

  const editItem = (id: number | string, offset: number): Promise<CollectionItem> => {
    const path = ENDPOINTS.EDIT_COLLECTION_ITEM.replace(':id', id.toString());
    const url = createFetcherUrl([API_BASE_URL, path]);

    const options: RequestInit = {
      headers: createFetcherHeaders({ Authorization: `Bearer ${accessToken}` }),
      body: JSON.stringify({ offset }),
      cache: 'no-store',
    };

    return fetcher<ApiCollectionItem>('patch', url, options).then(CollectionItemMapper.map);
  };

  return { fetchByType, createItem, editItem, deleteItem };
}
