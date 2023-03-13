import './page.scss';

import { Route } from '@core/values';
import { PageWrapper } from '@features/page-wrapper';
import { useCurrentUser } from '@processes/auth';
import { setServerCookiesContext } from '@shared/server-cookie';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Profile() {
  setServerCookiesContext(cookies);

  const { fetchCurrentUser } = useCurrentUser();

  await fetchCurrentUser().catch(() => {
    redirect(Route.SignIn);
  });

  return <PageWrapper>Profile Page</PageWrapper>;
}
