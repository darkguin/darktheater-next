'use client';

import './EpisodeCard.scss';

import { Episode } from '@entities/serial';
import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  number: number;
  episode: Episode;
  selected?: boolean;
  onClick?: () => void;
}

function EpisodeCard({ number, episode, selected = false, onClick = () => null }: Props) {
  const image = episode.preview || episode.background;

  return (
    <div className={clsx('episode-card', selected && 'episode-card--selected')} onClick={onClick}>
      <div className="episode-card__image">
        {image ? <Image src={image} alt="card" fill priority sizes="160px" quality={50} /> : null}
      </div>

      <div className="episode-card__title title-light-0">
        {number ? `${number}. ` : null}
        {episode.title}
      </div>
    </div>
  );
}

export default EpisodeCard;