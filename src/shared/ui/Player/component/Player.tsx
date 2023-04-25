'use client';

import './Player.scss';

import { Player as DarkviPlayer } from '@darkvi/core';
import { HLSModule } from '@darkvi/hls';
import {
  FullscreenControl,
  Loader,
  PlayControl,
  Player as PlayerLayout,
  Poster,
  Time,
  Timeline,
  VolumeControl,
} from '@darkvi/react-ui';

interface Props {
  poster: string;
  src: string;
}

DarkviPlayer.use([HLSModule()]);

function Player({ src, poster }: Props) {
  return (
    <PlayerLayout src={src} crossOrigin="anonymous">
      <Poster src={poster} />
      <Timeline />
      <PlayControl />
      <FullscreenControl />
      <VolumeControl />
      <Time />
      <Loader />
    </PlayerLayout>
  );
}

export default Player;