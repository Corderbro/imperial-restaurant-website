import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-soft-gray shadow-sm">
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
          <Link href="/menu" className="text-dark hover:text-neon-red transition-all duration-300 font-medium uppercase tracking-wider text-sm relative group">
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/story" className="text-dark hover:text-neon-red transition-all duration-300 font-medium uppercase tracking-wider text-sm relative group">
            Story & Events
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-dark hover:text-neon-red transition-all duration-300 font-medium uppercase tracking-wider text-sm relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-dark hover:text-neon-red transition-all duration-300 font-medium uppercase tracking-wider text-sm relative group">
            Contact & Hours
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            aria-label="Open menu" 
            className="text-dark p-2 hover:text-neon-red transition-colors"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-soft-gray shadow-lg">
          <nav className="px-4 py-6 space-y-4">
            <Link 
              href="/menu" 
              className="block text-dark hover:text-neon-red transition-colors font-medium uppercase tracking-wider text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/story" 
              className="block text-dark hover:text-neon-red transition-colors font-medium uppercase tracking-wider text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Story & Events
            </Link>
            <Link 
              href="/about" 
              className="block text-dark hover:text-neon-red transition-colors font-medium uppercase tracking-wider text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-dark hover:text-neon-red transition-colors font-medium uppercase tracking-wider text-sm py-2"
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
