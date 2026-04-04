import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Analytics from '../components/Analytics'

/** GA4 — matches Admin → Data streams; override in Vercel with NEXT_PUBLIC_GOOGLE_ANALYTICS_ID */
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? 'G-M6W8NDE5V8'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics googleAnalyticsId={GA_MEASUREMENT_ID} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="description" content="The Imperial Oakhurst - Neighborhood gastropub in Decatur, Georgia featuring Southern comfort food, craft beer, and a dog-friendly patio." />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
