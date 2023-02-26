import './page.scss';

import { ConfirmPageStrings as t } from '@core/dictionaries';
import { Routes } from '@core/values';
import { ConfirmationType } from '@entities/confirmation';
import { ConfirmResetPasswordForm } from '@processes/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ConfirmPage({ searchParams }: Props) {
  const confirmationTypes = [
    ConfirmationType.EmailVerification,
    ConfirmationType.PasswordChange,
    ConfirmationType.AccountDeletion,
  ];

  const confirmationType = (searchParams?.type as ConfirmationType) || '';
  const token = searchParams?.token || '';

  const isValidConfirmationType = confirmationTypes.includes(confirmationType);

  if (!isValidConfirmationType || !token) {
    return redirect(Routes.SignIn);
  }

  return (
    <>
      <section>
        <header className="auth-page__title-container">
          <div className="auth-page__subtitle title-bold-2">{t.form.subtitle}</div>
          <div className="auth-page__title title-bold-7">{t.form.title}</div>
        </header>

        <ConfirmResetPasswordForm />

        <div className="form__container form__container--info title-regular-1">
          <div>
            <span style={{ paddingRight: '10px' }}>{t.form['pfx_to-sign-in-link']}</span>
            <Link href={Routes.SignIn} className="form__link">
              {t.form['to-sign-in-link']}
            </Link>

            <span style={{ padding: '0 10px' }}>{t.form['pfx_to-sign-up-link']}</span>
            <Link href={Routes.SignUp} className="form__link">
              {t.form['to-sign-up-link']}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
