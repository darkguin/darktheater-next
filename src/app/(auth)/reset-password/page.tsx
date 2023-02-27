import './page.scss';

import { ResetPasswordPageStrings as t } from '@core/dictionaries';
import { Routes } from '@core/values';
import { ResetPasswordForm } from '@processes/auth';
import Link from 'next/link';

export default function ResetPasswordPage() {
  return (
    <section>
      <header className="auth-page__title-container">
        <div className="auth-page__subtitle title-bold-2">{t.form.subtitle}</div>
        <div className="auth-page__title title-bold-7">{t.form.title}</div>
      </header>

      <ResetPasswordForm />

      <div className="form__container form__container--info title-regular-1">
        <div>
          <span style={{ paddingRight: '10px' }}>{t.form['pfx_to-sign-in-link']}</span>
          <Link href={Routes.SignIn} as={Routes.SignIn} className="form__link">
            {t.form['to-sign-in-link']}
          </Link>

          <span style={{ padding: '0 10px' }}>{t.form['pfx_to-sign-up-link']}</span>
          <Link href={Routes.SignUp} as={Routes.SignUp} className="form__link">
            {t.form['to-sign-up-link']}
          </Link>
        </div>
      </div>
    </section>
  );
}
