import { isDev } from '@shared/utils/isDev';
import * as process from 'process';

export function getNextApiBaseUrl() {
  return isDev() ? 'http://localhost:4200' : process.env.NEXT_PUBLIC_NEXT_BASE_URL;
}