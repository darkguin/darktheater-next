import { isDev } from '@shared/utils';

export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';
export const NEXT_API_BASE_URL = isDev()
  ? 'http://localhost:4200'
  : process.env.NEXT_PUBLIC_NEXT_BASE_UR || '';