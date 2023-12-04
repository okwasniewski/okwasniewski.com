import { AppProps } from 'next/app';
import Head from 'next/head';
import { Sora } from 'next/font/google';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import '../styles/style.css';

const sora = Sora({ subsets: ['latin'], display: 'swap' });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const canonical = useMemo(
    () => `https://oskarkwasniewski.dev${router.asPath}`.split('?')?.[0],
    [router.asPath],
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Oskar Kwaśniewski"
          key="ogsitename"
        />
        <meta name="author" content="Oskar Kwaśniewski" />
        <meta property="og:url" content={canonical} key="ogurl" />
        <meta
          property="og:image"
          content="https://oskarkwasniewski.dev/preview_image.jpg"
          key="ogimage"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@o_kwasniewski" />
        <meta name="twitter:site" content="@o_kwasniewski" />
      </Head>
      <main className={sora.className}>
        <Component {...pageProps} />
      </main>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-P638V4VQJ2"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-P638V4VQJ2');
        `}
      </Script>
    </>
  );
}

export default MyApp;
