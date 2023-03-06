'use client';

import { StorageKey } from '@core/values';
import { NavbarSize } from '@features/navbar';
import { setCookie } from 'cookies-next';
import { useState } from 'react';

const ONE_YEAR = 60 * 60 * 24 * 365;

export function useNavbarSize(defaultSize = NavbarSize.BIG) {
  const [size, setSize] = useState<NavbarSize>(defaultSize);

  const setNavbarSize = (size: NavbarSize) => {
    setSize(size);
    setCookie(StorageKey.NavbarSize, size, { path: '/', maxAge: ONE_YEAR });
  };

  return { navbarSize: size, setNavbarSize };
}