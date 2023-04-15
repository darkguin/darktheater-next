import './CollectionTabs.scss';

import { CollectionType, CollectionTypeList } from '@entities/collection';
import { makeCollectionPath } from '@features/collections/utils';
import { CollectionTabs as Tabs } from '@features/collections/values';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  activeType: CollectionType;
}

function CollectionTabs({ activeType }: Props) {
  return (
    <div className="collection-tabs">
      {CollectionTypeList.map((type: CollectionType) => (
        <Link
          key={type}
          href={makeCollectionPath(type)}
          className={clsx('collection-tabs__tab title-bold-3', type === activeType && 'active')}
        >
          {Tabs[type]?.title}
        </Link>
      ))}
    </div>
  );
}

export default CollectionTabs;
