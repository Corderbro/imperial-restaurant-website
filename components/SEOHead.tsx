import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  pageType?: 'website' | 'restaurant' | 'menu' | 'about' | 'contact'
  structuredData?: any
}

export default function SEOHead({
  title = "The Imperial Decatur | Neighborhood Pub & Craft Beer Bar",
  description = "Historic neighborhood pub in converted 1920s service station. Georgia craft beers and buzzworthy brews from across the nation. Dog-friendly patio. 726 W College Ave, Decatur, GA.",
  canonical,
  ogImage = "/impNeonSign.jpg",
  ogType = "website",
  pageType = "website",
  structuredData
}: SEOHeadProps) {
  const baseUrl = "https://imperial-oakhurst.vercel.app"
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`

  // Base structured data for The Imperial
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub"],
    "name": "The Imperial",
    "alternateName": "The Imperial Decatur",
    "description": "Historic neighborhood pub in converted 1920s service station featuring Georgia craft beers and buzzworthy brews from across the nation. Dog-friendly patio and trivia nights.",
    "url": baseUrl,
    "telephone": "+14044645698",
    "priceRange": "$$",
    "image": [
      `${baseUrl}/impNeonSign.jpg`,
      `${baseUrl}/impPatio.jpg`,
      `${baseUrl}/impCFS.jpg`,
      `${baseUrl}/impJerkChk.jpg`
    ],
    "logo": `${baseUrl}/ImperialLogo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "726 W. College Avenue",
      "addressLocality": "Decatur",
      "addressRegion": "GA",
      "postalCode": "30030",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.7749,
      "longitude": -84.2907
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "16:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "12:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "12:00",
        "closes": "24:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:00",
        "closes": "23:00"
      }
    ],
    "servesCuisine": [
      "American",
      "Southern",
      "Pub Food",
      "Gastropub"
    ],
    "hasMenu": `${baseUrl}/menu`,
    "acceptsReservations": false,
    "paymentAccepted": ["Cash", "Credit Card"],
    "currenciesAccepted": "USD",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Dog-friendly patio",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Outdoor seating",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Bar",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Trivia nights",
        "value": true
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ImperialDecatur/",
      "https://www.instagram.com/theimperialoakhurst/",
      "https://untappd.com/v/the-imperial/1224591"
    ]
  }

  // Merge with custom structured data if provided
  const finalStructuredData = structuredData ? 
    { ...baseStructuredData, ...structuredData } : 
    baseStructuredData

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
             <meta name="keywords" content="Decatur bar, craft beer Decatur, dog friendly bar Decatur, trivia night Decatur, 1920s service station bar, Robert Holland trivia Decatur, pet friendly patio Decatur, neighborhood pub Decatur, Georgia craft beer, historic bar Decatur, restaurant Decatur GA" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content="The Imperial - Neighborhood Gastropub in Decatur" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="The Imperial" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      <meta property="twitter:image:alt" content="The Imperial - Neighborhood Gastropub in Decatur" />
      
      {/* Local Business Specific */}
      <meta name="geo.region" content="US-GA" />
      <meta name="geo.placename" content="Decatur" />
      <meta name="geo.position" content="33.7749;-84.2907" />
      <meta name="ICBM" content="33.7749, -84.2907" />
      
      {/* Restaurant Specific Meta */}
      <meta name="food-menu" content={`${baseUrl}/menu`} />
      <meta name="opening-hours" content="Mo 16:00-23:00 Tu-Th 12:00-23:00 Fr-Sa 12:00-24:00 Su 12:00-23:00" />
      <meta name="price-range" content="$$" />
      <meta name="cuisine" content="American, Southern, Pub Food" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#dc2626" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for social media */}
      <link rel="dns-prefetch" href="//www.facebook.com" />
      <link rel="dns-prefetch" href="//www.instagram.com" />
      <link rel="dns-prefetch" href="//untappd.com" />
      
      
    </Head>
  )
}