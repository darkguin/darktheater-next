'use client';

import { useAuth, useAuthTokens } from '@processes/auth';
import { PropsWithChildren } from 'react';

function ClientAuthProvider({ children }: PropsWithChildren) {
  const { setAuthorized } = useAuth();
  const { getAccessToken } = useAuthTokens();

  setAuthorized(Boolean(getAccessToken()));
  
  return <>{children}</>;
}

export default ClientAuthProvider;