import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Enhanced Contact Bar */}
      <div className="bg-dark text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <a 
              href="tel:+14044645698" 
              className="hover:text-neon-yellow transition-colors font-medium flex items-center gap-1 min-h-[44px] px-2 rounded"
              aria-label="Call The Imperial restaurant"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (404) 464-5698
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="text-gray-200 text-center sm:text-left">726 W. College Ave, Oakhurst</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="text-gray-200 text-center sm:text-left hidden md:inline">Mon: 4pm-11pm • Tue-Thu: 12pm-11pm • Fri-Sat: 12pm-12am • Sun: 12pm-11pm</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://maps.google.com/?q=726+W+College+Ave,+Decatur,+GA+30030" 
              className="hover:text-neon-yellow transition-colors flex items-center gap-1 min-h-[44px] px-2 rounded"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Get directions to The Imperial on Google Maps"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-white bg-opacity-95 backdrop-blur-sm border-b border-soft-gray shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center hover:opacity-90 transition-all duration-300 hover:scale-105">
          <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100">
            <Image 
              src="/ImperialLogo.png" 
              alt="The Imperial" 
              width={200} 
              height={60} 
              className="h-14 w-auto"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/menu" className="text-dark hover:text-neon-red transition-all duration-300 font-semibold uppercase tracking-wider text-sm px-3 py-2 no-underline">
            Menu
          </Link>
          <Link href="/story" className="text-dark hover:text-neon-yellow transition-all duration-300 font-semibold uppercase tracking-wider text-sm px-3 py-2 no-underline">
            Story & Events
          </Link>
          <Link href="/contact" className="text-dark hover:text-neon-blue transition-all duration-300 font-semibold uppercase tracking-wider text-sm px-3 py-2 no-underline">
            Contact & Hours
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="text-dark p-3 hover:text-neon-red transition-colors rounded-lg hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-neon-red focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white border-t border-soft-gray shadow-lg animate-in slide-in-from-top-2 duration-300"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <nav className="px-4 py-6 space-y-2">
            <Link 
              href="/menu" 
              className="block text-dark hover:text-neon-red transition-all duration-300 font-semibold uppercase tracking-wider text-sm py-4 px-4 rounded-lg min-h-[44px] flex items-center border-l-4 border-transparent hover:border-neon-red no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/story" 
              className="block text-dark hover:text-neon-yellow transition-all duration-300 font-semibold uppercase tracking-wider text-sm py-4 px-4 rounded-lg min-h-[44px] flex items-center border-l-4 border-transparent hover:border-neon-yellow no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Story & Events
            </Link>
            <Link 
              href="/contact" 
              className="block text-dark hover:text-neon-blue transition-all duration-300 font-semibold uppercase tracking-wider text-sm py-4 px-4 rounded-lg min-h-[44px] flex items-center border-l-4 border-transparent hover:border-neon-blue no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact & Hours
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
