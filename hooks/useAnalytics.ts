import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Analytics event types specific to restaurants
export interface RestaurantAnalyticsEvent {
  action: 'menu_view' | 'phone_click' | 'directions_click' | 'social_click' | 'form_submit' | 'reservation_attempt'
  category: 'engagement' | 'contact' | 'social_media' | 'lead_generation' | 'conversion'
  label?: string
  value?: number
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}

export function useAnalytics() {
  const router = useRouter()

  // Track page views
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Google Analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
          page_title: document.title,
          page_location: url,
        })
      }

      // Facebook Pixel
      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'PageView')
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Track custom events
  const trackEvent = (event: RestaurantAnalyticsEvent) => {
    // Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      })
    }

    // Facebook Pixel
    if (typeof window.fbq !== 'undefined') {
      const fbEventMap: Record<string, string> = {
        menu_view: 'ViewContent',
        phone_click: 'Contact',
        form_submit: 'Lead',
        reservation_attempt: 'Schedule'
      }
      
      const fbEvent = fbEventMap[event.action]
      if (fbEvent) {
        window.fbq('track', fbEvent, {
          content_name: event.label,
          value: event.value
        })
      }
    }
  }

  return {
    trackEvent,
    trackMenuView: () => trackEvent({ action: 'menu_view', category: 'engagement', label: 'menu_page' }),
    trackPhoneClick: () => trackEvent({ action: 'phone_click', category: 'contact', label: 'header_phone' }),
    trackDirectionsClick: () => trackEvent({ action: 'directions_click', category: 'contact', label: 'google_maps' }),
    trackSocialClick: (platform: string) => trackEvent({ action: 'social_click', category: 'social_media', label: platform }),
    trackFormSubmission: (formType: string) => trackEvent({ action: 'form_submit', category: 'lead_generation', label: formType }),
    trackReservationAttempt: () => trackEvent({ action: 'reservation_attempt', category: 'conversion', label: 'online_reservation' })
  }
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime
            if (typeof window.gtag !== 'undefined') {
              window.gtag('event', 'LCP', {
                event_category: 'Web Vitals',
                value: Math.round(lcp),
                non_interaction: true,
              })
            }
          }
        }
      })
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime
            if (typeof window.gtag !== 'undefined') {
              window.gtag('event', 'FID', {
                event_category: 'Web Vitals',
                value: Math.round(fid),
                non_interaction: true,
              })
            }
          }
        }
      })
      fidObserver.observe({ type: 'first-input', buffered: true })

      // Cumulative Layout Shift
      let cumulativeLayoutShift = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            cumulativeLayoutShift += (entry as any).value
          }
        }
      })
      clsObserver.observe({ type: 'layout-shift', buffered: true })

      // Report CLS on page unload
      const reportCLS = () => {
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(cumulativeLayoutShift * 1000),
            non_interaction: true,
          })
        }
      }
      window.addEventListener('beforeunload', reportCLS)

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        window.removeEventListener('beforeunload', reportCLS)
      }
    }
  }, [])
}
