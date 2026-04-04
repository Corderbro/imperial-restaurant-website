import Script from 'next/script'

interface AnalyticsProps {
  googleAnalyticsId?: string
}

export default function Analytics({ googleAnalyticsId }: AnalyticsProps) {
  if (!googleAnalyticsId) {
    return null
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}', {
            page_title: document.title,
            page_location: window.location.href,
            anonymize_ip: true,
            cookie_flags: 'max-age=7200;secure;samesite=none'
          });
        `}
      </Script>

      {/* Enhanced ecommerce tracking for restaurant events */}
      <Script id="restaurant-analytics" strategy="afterInteractive">
        {`
          // Track menu views
          function trackMenuView() {
            gtag('event', 'view_item_list', {
              item_list_id: 'menu',
              item_list_name: 'Restaurant Menu'
            });
          }

          // Track reservations/calls
          function trackContactAction(action) {
            gtag('event', 'generate_lead', {
              currency: 'USD',
              value: 0,
              event_category: 'Contact',
              event_label: action
            });
          }

          // Track external link clicks
          function trackExternalLink(platform, url) {
            gtag('event', 'click', {
              event_category: 'External Link',
              event_label: platform,
              value: url
            });
          }

          // Auto-track phone clicks
          document.addEventListener('click', function(e) {
            if (e.target.href && e.target.href.startsWith('tel:')) {
              trackContactAction('phone_call');
            }
          });

          // Auto-track direction clicks
          document.addEventListener('click', function(e) {
            if (e.target.href && e.target.href.includes('maps.google.com')) {
              trackContactAction('directions');
            }
          });

          // Track scroll depth for engagement
          let scrollDepths = [25, 50, 75, 100];
          let scrollTracked = [];
          
          window.addEventListener('scroll', function() {
            let scrollPercent = Math.round(
              (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            scrollDepths.forEach(function(depth) {
              if (scrollPercent >= depth && !scrollTracked.includes(depth)) {
                scrollTracked.push(depth);
                gtag('event', 'scroll', {
                  event_category: 'Engagement',
                  event_label: depth + '% scrolled',
                  value: depth
                });
              }
            });
          });

          // Track form submissions
          document.addEventListener('submit', function(e) {
            if (e.target.tagName === 'FORM') {
              gtag('event', 'generate_lead', {
                event_category: 'Form',
                event_label: 'Contact Form Submission'
              });
            }
          });

          // Make tracking functions globally available
          window.trackMenuView = trackMenuView;
          window.trackContactAction = trackContactAction;
          window.trackExternalLink = trackExternalLink;
        `}
      </Script>

      {/* Web Vitals tracking */}
      <Script id="web-vitals" strategy="afterInteractive">
        {`
          function getCLS(onPerfEntry) {
            const cls = new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                  onPerfEntry(entry);
                }
              }
            });
            cls.observe({entryTypes: ['layout-shift']});
          }

          function getFID(onPerfEntry) {
            const fid = new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                onPerfEntry(entry);
              }
            });
            fid.observe({entryTypes: ['first-input']});
          }

          function getLCP(onPerfEntry) {
            const lcp = new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              const lastEntry = entries[entries.length - 1];
              onPerfEntry(lastEntry);
            });
            lcp.observe({entryTypes: ['largest-contentful-paint']});
          }

          function sendToGA(metric) {
            gtag('event', metric.name, {
              value: Math.round(metric.value),
              event_category: 'Web Vitals',
              event_label: metric.id,
              non_interaction: true,
            });
          }

          // Track Core Web Vitals
          getCLS(sendToGA);
          getFID(sendToGA);
          getLCP(sendToGA);
        `}
      </Script>
    </>
  )
}

// Hook for manual event tracking
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  const trackPageView = (url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
        page_title: title,
        page_location: url,
      })
    }
  }

  const trackMenuView = () => {
    if (typeof window !== 'undefined' && window.trackMenuView) {
      window.trackMenuView()
    }
  }

  const trackContactAction = (action: string) => {
    if (typeof window !== 'undefined' && window.trackContactAction) {
      window.trackContactAction(action)
    }
  }

  const trackExternalLink = (platform: string, url: string) => {
    if (typeof window !== 'undefined' && window.trackExternalLink) {
      window.trackExternalLink(platform, url)
    }
  }

  return {
    trackEvent,
    trackPageView,
    trackMenuView,
    trackContactAction,
    trackExternalLink,
  }
}

// Type declarations for global functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    trackMenuView: () => void
    trackContactAction: (action: string) => void
    trackExternalLink: (platform: string, url: string) => void
  }
}
