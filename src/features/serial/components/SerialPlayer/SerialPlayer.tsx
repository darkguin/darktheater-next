'use client';

import './SerialPlayer.scss';

import { Episode, Season, Serial } from '@entities/serial';
import { EpisodeSelector, SeasonSelector } from '@features/serial';
import { Player } from '@shared/ui/Player';
import { useState } from 'react';

interface Props {
  serial: Serial;
}

function SerialPlayer({ serial }: Props) {
  const [season, setSeason] = useState<Season>(serial.seasons[0]);
  const [episode, setEpisode] = useState<Episode>(season.episodes[0]);

  const onEpisodeSelected = (episode: Episode) => {
    setEpisode(episode);
  };

  const onSeasonSelected = (season: Season) => {
    setSeason(season);
    onEpisodeSelected(season.episodes[0]);
  };
  
  return (
    <div className="serial-player">
      <Player poster={episode.background || serial.background} src={episode.source} />

      <SeasonSelector seasons={serial.seasons} onSelect={onSeasonSelected} />
      <EpisodeSelector episodes={season.episodes} onSelect={onEpisodeSelected} />
    </div>
  );
}

export default SerialPlayer;