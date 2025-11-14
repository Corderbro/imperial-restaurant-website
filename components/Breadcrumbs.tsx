import Link from 'next/link'
import { useRouter } from 'next/router'

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Breadcrumbs() {
  const router = useRouter()
  const pathname = router.pathname

  // Define breadcrumb mappings
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    '/': [
      { label: 'Home', href: '/' }
    ],
    '/menu': [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/menu' }
    ],
    '/story': [
      { label: 'Home', href: '/' },
      { label: 'Our Story', href: '/story' }
    ],
    '/events': [
      { label: 'Home', href: '/' },
      { label: 'Events', href: '/events' }
    ],
    '/about': [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' }
    ],
    '/contact': [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' }
    ]
  }

  const breadcrumbs = breadcrumbMap[pathname] || [{ label: 'Home', href: '/' }]

  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null
  }

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.label,
      "item": `https://imperial-oakhurst.vercel.app${breadcrumb.href}`
    }))
  }

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-soft-gray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.href} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 text-gray-400 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-dark font-medium" aria-current="page">
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-warm-gray hover:text-neon-red transition-colors"
                  >
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}