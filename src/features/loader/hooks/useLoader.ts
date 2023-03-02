'use client';

import { useLoaderStore } from '@features/loader';

export function useLoader() {
  const isLoading = useLoaderStore((state) => state.isLoading);
  const setLoading = useLoaderStore((state) => state.setLoading);

  return { isLoading, setLoading };
}