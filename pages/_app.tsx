import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GoogleAnalytics from '../components/GoogleAnalytics'
import { usePerformanceMonitoring } from '../hooks/useAnalytics'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // Initialize performance monitoring
  usePerformanceMonitoring()
  
  // Add social media tracking pixels
  useEffect(() => {
    // Facebook Pixel
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      })(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      
      if (process.env.NEXT_PUBLIC_FB_PIXEL_ID) {
        (window as any).fbq('init', process.env.NEXT_PUBLIC_FB_PIXEL_ID)
        ;(window as any).fbq('track', 'PageView')
      }
    }
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data - Restaurant & LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Restaurant", "LocalBusiness"],
              "name": "The Imperial",
              "description": "Historic neighborhood pub in converted 1920s service station. Georgia craft beers and buzzworthy brews from across the nation. Dog-friendly patio in Oakhurst, Decatur GA.",
              "url": "https://imperial-oakhurst.vercel.app",
              "image": "https://imperial-oakhurst.vercel.app/impNeonSign.jpg",
              "logo": "https://imperial-oakhurst.vercel.app/ImperialLogo.png",
              "telephone": "+1-404-464-5698",
              "email": "info@theimperialdecatur.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "726 W College Ave",
                "addressLocality": "Decatur",
                "addressRegion": "GA",
                "postalCode": "30030",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.7748,
                "longitude": -84.2963
              },
              "openingHours": [
                "Mo 16:00-23:00",
                "Tu-Th 12:00-23:00", 
                "Fr-Sa 12:00-24:00",
                "Su 12:00-23:00"
              ],
              "servesCuisine": ["American", "Southern", "Pub Food"],
              "priceRange": "$$",
              "hasMenu": "https://imperial-oakhurst.vercel.app/menu",
              "acceptsReservations": false,
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Dog Friendly Patio",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Craft Beer",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Historic Venue",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Trivia Nights",
                  "value": true
                }
              ],
              "sameAs": [
                "https://www.facebook.com/ImperialDecatur/",
                "https://www.instagram.com/theimperialoakhurst/",
                "https://untappd.com/v/the-imperial/1224591"
              ]
            })
          }}
        />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//untappd.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
      </Head>
      
      {/* Google Analytics */}
      <GoogleAnalytics trackingId="G-M6W8NDE5V8" />
      
      <Component {...pageProps} />
    </>
  )
}