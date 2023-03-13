import './page.scss';

import { PageWrapper } from '@features/page-wrapper';
import { setServerCookiesContext } from '@shared/server-cookie';
import { cookies } from 'next/headers';

export default async function Profile() {
  setServerCookiesContext(cookies);
  
  return <PageWrapper>Profile Page</PageWrapper>;
}
