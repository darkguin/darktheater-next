'use client';

import { useAuth } from '@processes/auth';
import { PropsWithChildren, useEffect, useState } from 'react';

function WithAuth({ children }: PropsWithChildren) {
  const { authorized } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    setIsAuthorized(authorized);
  }, [authorized]);

  return <>{isAuthorized ? children : null}</>;
}

export default WithAuth;