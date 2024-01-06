import { AppProps } from 'next/app';
import Head from 'next/head';
import { Sora } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import '../styles/style.css';

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (p) => {
      if (process.env.NODE_ENV === 'development') p.debug();
    },
  });
}

const sora = Sora({ subsets: ['latin'], display: 'swap' });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const canonical = useMemo(
    () => `https://oskarkwasniewski.dev${router.asPath}`.split('?')?.[0],
    [router.asPath],
  );

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
      <PostHogProvider client={posthog}>
        <main className={sora.className}>
          <Component {...pageProps} />
        </main>
      </PostHogProvider>
    </>
  );
}

export default MyApp;
