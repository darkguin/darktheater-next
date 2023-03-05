import '@styles/globals.scss';

import { VercelAnalyticsWrapper } from '@features/analytics';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Watch movies, TV series and anime for free and without registration only on darktheater',
  description:
    'Watch movies, TV series and anime for free and without registration only on darktheater',
  applicationName: 'darktheater',
  themeColor: '#20242C',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'darktheater',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#20242C" />
      <meta name="msapplication-tap-highlight" content="no" />

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

      <link rel="shortcut icon" href="/favicon.ico" />

      {/*<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />*/}
      {/*<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />*/}
      {/*<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />*/}
      {/*<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />*/}
      {/*<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />*/}
      {/*<meta property="og:type" content="website" />*/}
      {/*<meta property="og:title" content="PWA App" />*/}
      {/*<meta property="og:description" content="Best PWA App in the world" />*/}
      {/*<meta property="og:site_name" content="PWA App" />*/}
      {/*<meta property="og:url" content="https://yourdomain.com" />*/}
      {/*<meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />*/}

      <body id="root">
        {children}

        <Toaster
          position="bottom-right"
          expand={true}
          visibleToasts={6}
          toastOptions={{ className: 'app-toast' }}
          closeButton
          richColors
        />
        <VercelAnalyticsWrapper />
      </body>
    </html>
  );
}