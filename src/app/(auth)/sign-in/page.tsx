import './page.scss';

import { SignInPageStrings as t } from '@core/dictionaries';
import { Route } from '@core/values';
import { SignInForm } from '@processes/auth';
import { setServerCookiesContext } from '@shared/server-cookie';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default function SignInPage() {
  setServerCookiesContext(cookies);
  
  return (
    <section>
      <header className="auth-page__title-container">
        <div className="auth-page__subtitle title-bold-2">{t.form.subtitle}</div>
        <div className="auth-page__title title-bold-7">{t.form.title}</div>
      </header>

      <SignInForm />

      <div className="form__container form__container--info title-regular-1">
        <div>
          <span style={{ paddingRight: 10 }}>{t.form['to-sign-up']}</span>
          <Link href={Route.SignUp} as={Route.SignUp} className="form__link">
            {t.form['to-sign-up-link']}
          </Link>
        </div>
      </div>
    </section>
  );
}
