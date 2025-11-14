import Script from 'next/script'

interface GoogleAnalyticsProps {
  trackingId: string
}

export default function GoogleAnalytics({ trackingId }: GoogleAnalyticsProps) {
  // Always render in production, use provided trackingId or fallback to G-M6W8NDE5V8
  const finalTrackingId = trackingId || 'G-M6W8NDE5V8'
  
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${finalTrackingId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${finalTrackingId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Helper function to track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Common event trackers for restaurants
export const trackMenuView = () => trackEvent('view_menu', 'engagement', 'menu_page')
export const trackPhoneClick = () => trackEvent('click_phone', 'contact', 'phone_number')
export const trackDirectionsClick = () => trackEvent('click_directions', 'contact', 'google_maps')
export const trackSocialClick = (platform: string) => trackEvent('click_social', 'social_media', platform)
export const trackFormSubmission = (formType: string) => trackEvent('form_submit', 'lead_generation', formType)
