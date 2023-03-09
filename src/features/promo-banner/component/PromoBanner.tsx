import './PromoBanner.scss';

import { PromoBanner as t } from '@core/dictionaries';
import Link from 'next/link';

export default function PromoBanner() {
  return (
    <div className="promo-banner">
      <div className="promo-banner__content">
        <article>
          <header className="promo-banner__header title-bold-5">{t.title}</header>
          <main className="promo-banner__body title-regular-1">
            {t.body}

            <ul className="promo-banner__bullets">
              {t.bullets.map((bullet, i) => (
                <li key={i} className="promo-banner__bullet">
                  {bullet}
                </li>
              ))}
            </ul>
          </main>
        </article>

        <Link href={t.link} className="promo-banner__btn btn btn--contrast">
          {t.btnName}
        </Link>
      </div>
    </div>
  );
}
