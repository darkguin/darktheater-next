import './page.scss';

import { AppStrings as t } from '@core/dictionaries';
import { UserRoles, useUserApi } from '@entities/user';
import { SignOutButton } from '@features/auth/components';
import { PageWrapper } from '@features/page-wrapper';
import { Cover, FontIcon, Icons } from '@shared/ui';
import { Avatar } from '@shared/ui/Avatar';
import { cookies } from 'next/headers';

export default async function Profile() {
  const { fetchCurrentUser } = useUserApi(cookies);
  const user = await fetchCurrentUser();

  return (
    <PageWrapper>
      <div className="profile">
        <Cover image={t.cover} />

        <div className="profile__header">
          <div className="profile__avatar">
            <Avatar text={user.username || user.email} variant="square" />
          </div>

          <div className="profile__information">
            <div className="profile__information-title title-bold-6">
              {user.username}
              {user.role !== UserRoles.VIEWER ? (
                <FontIcon name={Icons.VERIFIED} className="badge admin-badge title-medium-4" />
              ) : null}
            </div>
            <div className="profile__information-subtitle title-medium-1">email: {user.email}</div>
          </div>

          <div className="profile__btn-group">
            <SignOutButton className="profile__btn logout title-medium-1">
              <FontIcon name={Icons.EXIT} />
            </SignOutButton>
          </div>
        </div>

        <div className="profile__container">
          <div className="profile__group"></div>
        </div>
      </div>
    </PageWrapper>
  );
}
