'use client';

import './SeasonSelector.scss';

import { Season } from '@entities/serial';
import { CardList } from '@shared/ui';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Swiper from 'swiper';

interface Props {
  seasons: Season[];
  defaultSeason?: Season;
  onSelect?: (episode: Season) => void;
}

function SeasonSelector({
  seasons = [],
  defaultSeason = seasons[0],
  onSelect = () => null,
}: Props) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<Season>(defaultSeason);

  const selectSeason = (season: Season) => {
    setSelectedSeason(season);
    onSelect(season);
  };

  useEffect(() => {
    swiper?.slideTo(seasons.indexOf(selectedSeason) - 1 ?? 0, 10);
  }, [swiper]);

  return (
    <div className="episode-selector">
      <CardList spaceBetween={10} onSwiper={setSwiper}>
        {seasons.map((season, i) => (
          <div
            className={clsx('season-card', season === selectedSeason && 'season-card--selected')}
            key={season.id}
            onClick={() => selectSeason(season)}
          >
            Season {i + 1}
          </div>
        ))}
      </CardList>
    </div>
  );
}

export default SeasonSelector;