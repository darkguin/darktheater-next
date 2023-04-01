import './ContentDescription.scss';

import { Media } from '@entities/media';
import { generateMediaTag } from '@features/content';
import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  content: Media;
  className?: string;
}

const getDescriptionString = (items: { name: string }[]) => {
  return items.map(({ name }) => name).join(', ') || '';
};

function ContentDescription({ content, className }: Props) {
  const tag = generateMediaTag(content);

  const descriptionRows = [
    { key: 'Genres:', value: getDescriptionString(content.genres) },
    { key: 'Countries:', value: getDescriptionString(content.countries) },
    { key: 'Directors:', value: getDescriptionString(content.directors) },
    { key: 'Actors:', value: getDescriptionString(content.actors) },
  ].filter((i) => Boolean(i.value));

  return (
    <div className={clsx('content-description', className)}>
      <div className="content-description__title title-bold-6">{content.title}</div>

      <div className="content-description__group">
        <div className="content-description__poster">
          <Image
            src={content.poster}
            alt="poster"
            className="content-description__poster-img"
            sizes="170px"
            fill
            priority
          />
        </div>

        <div className="content-description__info">
          <div className="content-description__tag">{tag}</div>

          {descriptionRows.map(({ key, value }) => (
            <div className="content-description__row title-regular-1" key={key}>
              <span className="title-semi-bold-1 text-contrast">{key} </span>
              {value}
            </div>
          ))}
        </div>
      </div>

      <p className="text-contrast title-semi-bold-2">Description:</p>
      <p className="content-description__description title-regular-1">{content.description}</p>
    </div>
  );
}

export default ContentDescription;
