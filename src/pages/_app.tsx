import { AppProps } from 'next/app';
import '../styles/style.css';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
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
        <meta property="og:url" content="oskarkwasniewski.dev" key="ogurl" />
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
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
