import './CatalogTabs.scss';

import { CatalogType, CatalogTypeList, makeCatalogPath } from '@features/catalog';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  activeType: CatalogType;
}

function CatalogTabs({ activeType }: Props) {
  return (
    <div className="catalog-tabs">
      {CatalogTypeList.map((item: CatalogType, i: number) => (
        <Link
          key={i}
          href={makeCatalogPath(item)}
          className={clsx('catalog-tabs__tab title-bold-4', item === activeType && 'active')}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default CatalogTabs;
