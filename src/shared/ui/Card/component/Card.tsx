import './Card.scss';

import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface Props {
  width?: string;
  title?: string;
  image?: string;
  imageSizes?: string;
  imageQuality?: number;
}

function Card({
  title = '',
  imageSizes = '160px',
  imageQuality = 75,
  image,
  width,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="card__wrapper">
      <div className="card" style={{ width }}>
        {image ? (
          <Image src={image} alt="card" fill priority sizes={imageSizes} quality={imageQuality} />
        ) : null}

        {children}
      </div>

      <div className="card__title title-light-0_5">{title}</div>
    </div>
  );
}

export default Card;
