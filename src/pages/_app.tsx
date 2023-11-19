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
        <meta
          property="og:site_name"
          content="Oskar Kwaśniewski"
          key="ogsitename"
        />
        <meta property="og:url" content="okwasniewski.com" key="ogurl" />
        <meta
          property="og:image"
          content="https://okwasniewski.com/preview_image.jpg"
          key="ogimage"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
