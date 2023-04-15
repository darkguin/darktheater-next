import './loading.scss';

import { AppStrings as t } from '@core/dictionaries';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="page-loader">
      <div className="page-loader__path"></div>
      <Image
        className="page-loader__image"
        width={28}
        height={28}
        priority
        src={t.logo}
        alt="logo"
      />
    </div>
  );
}