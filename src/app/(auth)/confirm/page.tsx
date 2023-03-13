import './page.scss';

import { ConfirmPageStrings as t } from '@core/dictionaries';
import { Route } from '@core/values';
import { ConfirmationType } from '@entities/confirmation';
import { ConfirmResetPasswordForm } from '@processes/auth';
import { setServerCookiesContext } from '@shared/server-cookie';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface Props {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

const confirmationTypes = [
  ConfirmationType.EmailVerification,
  ConfirmationType.PasswordChange,
  ConfirmationType.AccountDeletion,
];

export default function ConfirmPage({ searchParams }: Props) {
  setServerCookiesContext(cookies);
  
  const confirmationType = (searchParams?.type as ConfirmationType) ?? '';
  const token = searchParams?.token ?? '';

  const isValidConfirmationType = confirmationTypes.includes(confirmationType);

  if (!isValidConfirmationType || !token) {
    return redirect(Route.SignIn);
  }

  return (
    <section>
      <header className="auth-page__title-container">
        <div className="auth-page__subtitle title-bold-2">{t.form.subtitle}</div>
        <div className="auth-page__title title-bold-7">{t.form.title}</div>
      </header>

      <ConfirmResetPasswordForm />

      <div className="form__container form__container--info title-regular-1">
        <div>
          <span style={{ paddingRight: '10px' }}>{t.form['pfx_to-sign-in-link']}</span>
          <Link href={Route.SignIn} as={Route.SignIn} className="form__link">
            {t.form['to-sign-in-link']}
          </Link>

          <span style={{ padding: '0 10px' }}>{t.form['pfx_to-sign-up-link']}</span>
          <Link href={Route.SignUp} as={Route.SignUp} className="form__link">
            {t.form['to-sign-up-link']}
          </Link>
        </div>
      </div>
    </section>
  );
}
