'use client';

import './loader.scss';

import { useLoader } from '@features/loader';

export default function Loader() {
  const { isLoading } = useLoader();

  return <> {isLoading ? <div className="loader"></div> : null}</>;
}
