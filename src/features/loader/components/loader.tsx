'use client';

import './loader.scss';

import { useLoader } from '@features/loader';
import { FC, memo } from 'react';

const Loader: FC = function () {
  const { isLoading } = useLoader();

  return <> {isLoading ? <div className="loader"></div> : null}</>;
};

export default memo(Loader);