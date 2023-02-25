import './loader.scss';

import { useLoader } from '@features/loader';
import { FC } from 'react';

export const Loader: FC = function () {
  const { isLoading } = useLoader();

  return <> {isLoading ? <div className="loader"></div> : null}</>;
};
