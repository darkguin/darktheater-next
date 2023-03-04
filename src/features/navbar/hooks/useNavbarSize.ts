'use client';

import { StorageKey } from '@core/values';
import { NavbarSize } from '@features/navbar';
import { getCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

const ONE_YEAR = 60 * 60 * 24 * 365;

export function useNavbarSize() {
  const [size, setSize] = useState<NavbarSize>();

  useEffect(() => {
    setSize((getCookie(StorageKey.NavbarSize) as NavbarSize) ?? NavbarSize.BIG);
  }, []);

  const setNavbarSize = (size: NavbarSize) => {
    setSize(size);
    setCookie(StorageKey.NavbarSize, size, { path: '/', maxAge: ONE_YEAR });
  };

  return { navbarSize: size, setNavbarSize };
}