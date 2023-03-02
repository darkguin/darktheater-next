import './page.scss';

import { SignUpPageStrings as t } from '@core/dictionaries';
import { Routes } from '@core/values';
import { SignUpForm } from '@processes/auth';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <section>
      <header className="auth-page__title-container">
        <div className="auth-page__subtitle title-bold-2">{t.form.subtitle}</div>
        <div className="auth-page__title title-bold-7">{t.form.title}</div>
      </header>

      <SignUpForm />

      <div className="form__container form__container--info title-regular-1">
        <div>
          <span style={{ paddingRight: 10 }}>{t.form['to-sign-in']}</span>
          <Link href={Routes.SignIn} as={Routes.SignIn} className="form__link">
            {t.form['to-sign-in-link']}
          </Link>
        </div>
      </div>

      <div className="form__container title-regular-1" style={{ marginTop: 4 }}>
        <Link href={Routes.ResetPassword} as={Routes.ResetPassword} className="form__link">
          {t.form['to-reset-password-link']}
        </Link>
      </div>
    </section>
  );
}
