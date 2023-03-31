'use client';

import './EpisodeSelector.scss';

import { Episode } from '@entities/serial';
import { EpisodeCard } from '@features/serial';
import { CardList } from '@shared/ui';
import { useEffect, useState } from 'react';
import Swiper from 'swiper';

interface Props {
  episodes: Episode[];
  defaultEpisode?: Episode;
  onSelect?: (episode: Episode) => void;
}

function EpisodeSelector({ episodes = [], defaultEpisode, onSelect = () => null }: Props) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(defaultEpisode ?? episodes[0]);

  const selectEpisode = (episode: Episode) => {
    setSelectedEpisode(episode);
    onSelect(episode);
  };

  useEffect(() => {
    swiper?.slideTo(episodes.indexOf(selectedEpisode) - 1 ?? 0, 10);
  }, [swiper]);

  return (
    <div className="episode-selector">
      <CardList spaceBetween={10} onSwiper={setSwiper}>
        {episodes.map((episode, i) => (
          <EpisodeCard
            key={episode.id}
            number={i + 1}
            episode={episode}
            selected={episode.id === selectedEpisode.id}
            onClick={() => selectEpisode(episode)}
          />
        ))}
      </CardList>
    </div>
  );
}

export default EpisodeSelector;