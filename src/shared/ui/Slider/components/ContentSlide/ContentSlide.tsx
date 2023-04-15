import './ContentSlide.scss';

import { ContentType } from '@entities/media';
import { makeContentPath } from '@features/content';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image?: string;
  title?: string;
  subtitle?: string;
  id: string;
  contentType: ContentType;
}

function ContentSlide({ id, contentType, image = '', title = '', subtitle = '' }: Props) {
  const contentPath = makeContentPath(id, contentType);

  return (
    <div className="content-slide">
      {image ? (
        <Image className="content-slide__image" src={image} alt={title} fill priority />
      ) : null}

      <div className="content-slide__content">
        <div className="content-slide__header">
          <div className="content-slide__subtitle">{subtitle}</div>
          <div className="content-slide__title">{title}</div>
        </div>
      </div>

      <Link href={contentPath} className="content-slide__btn btn btn--short btn--contrast">
        watch
      </Link>
    </div>
  );
}

export default ContentSlide;
