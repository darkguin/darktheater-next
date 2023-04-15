import './CollectionCard.scss';

import { CollectionItem } from '@entities/collection';
import { generateMediaTag, makeContentPath } from '@features/content';
import Image from 'next/image';

interface Props {
  data: CollectionItem;
}

function CollectionCard({ data }: Props) {
  const contentUrl = makeContentPath(data.content.id, data.content.contentType);

  return (
    <div className="collection-card__wrapper">
      <div className="collection-card">
        <div className="collection-card__image-container">
          <Image
            className="collection-card__image"
            src={data.content.poster}
            alt="poster"
            fill
            priority
            sizes="80px"
          />
        </div>

        <div className="collection-card__content">
          <div className="collection-card__tag title-bold-0">{data.content.contentType}</div>
          <div className="collection-card__title title-bold-1">{data.content.title}</div>
          <div className="collection-card__subtitle title-regular-0">
            {generateMediaTag(data.content)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
