import './page.scss';

import { CollectionType, useCollectionApi } from '@entities/collection';
import { CollectionList, CollectionTabs } from '@features/collections/components';
import { PageWrapper } from '@features/page-wrapper';
import { cookies } from 'next/headers';

interface Props {
  searchParams?: Record<string, string>;
}

const PAGE = 1;
const OFFSET = 35;

export default async function Collections({ searchParams }: Props) {
  const { fetchByType } = useCollectionApi(cookies);

  const type = (searchParams?.type as CollectionType) ?? CollectionType.Favorite;
  const items = await fetchByType(type, PAGE, OFFSET);

  return (
    <PageWrapper sidebar={<div></div>}>
      <CollectionTabs activeType={type} />
      <CollectionList type={type} initItems={items} initPage={PAGE + 1} offset={OFFSET} />
    </PageWrapper>
  );
}
