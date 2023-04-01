import './Card.scss';

import Image from 'next/image';
import { PropsWithChildren } from 'react';

import CardWrapper from '../CardWrapper';

interface Props {
  width?: string;
  title?: string;
  image?: string;
  imageSizes?: string;
  imageQuality?: number;
  href?: string;
}

function Card({
  title = '',
  imageSizes = '160px',
  imageQuality = 75,
  image,
  width,
  href,
  children,
}: PropsWithChildren<Props>) {
  return (
    <CardWrapper href={href} className="card__wrapper">
      <div className="card" style={{ width }}>
        {image ? (
          <Image src={image} alt="card" fill priority sizes={imageSizes} quality={imageQuality} />
        ) : null}

        {children}
      </div>

      <div className="card__title title-light-0_5">{title}</div>
    </CardWrapper>
  );
}

export default Card;
