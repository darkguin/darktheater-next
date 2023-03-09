import './Card.scss';

import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface Props {
  width?: string;
  title?: string;
  image?: string;
}

function Card({ title = '', width, image, children }: PropsWithChildren<Props>) {
  return (
    <div className="card__wrapper">
      <div className="card" style={{ width }}>
        {image ? <Image src={image} alt="card" fill sizes="160px" /> : null}

        {children}
      </div>

      <div className="card__title title-light-0_5">{title}</div>
    </div>
  );
}

export default Card;
