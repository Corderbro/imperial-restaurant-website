export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <h3 className="font-semibold mb-2">The Imperial</h3>
            <p>726 W. College Avenue<br />
            Decatur, GA 30030</p>
            <p className="mt-2">(404) 464-5698</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Hours</h3>
            <p>Mon: 4:00 PM - 11:00 PM<br />
            Tue-Thu: 12:00 PM - 11:00 PM<br />
            Fri-Sat: 12:00 PM - 12:00 AM<br />
            Sun: 12:00 PM - 11:00 PM</p>
            <p className="text-xs text-gray-500 mt-1">* Kitchen closes 1 hour earlier</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Connect With Us</h3>
            <div className="space-y-2">
              <a 
                href="https://www.facebook.com/ImperialDecatur/" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow The Imperial on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/theimperialoakhurst/" 
                className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow The Imperial on Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.348-.441-.348-1.062 0-1.504.695-.882 1.900-1.559 3.197-1.559s2.503.677 3.198 1.559c.348.442.348 1.063 0 1.504-.749.948-1.9 1.559-3.198 1.559z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://untappd.com/v/the-imperial/1224591" 
                className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Check out The Imperial on Untappd"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-.532 1.328c-.532-.212-1.064-.319-1.595-.319-.638 0-1.223.16-1.755.479-.532.32-.851.745-.957 1.277-.106.532-.053 1.011.16 1.437.212.426.532.745.957.957.426.212.851.319 1.277.319.532 0 1.064-.107 1.595-.32l.532 1.329c-.745.319-1.543.479-2.394.479-1.17 0-2.128-.372-2.873-1.117-.745-.745-1.117-1.703-1.117-2.873s.372-2.128 1.117-2.873c.745-.745 1.703-1.117 2.873-1.117.851 0 1.649.16 2.394.479z"/>
                </svg>
                Untappd
              </a>
              <a 
                href="tel:+14044645698" 
                className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
                aria-label="Call The Imperial restaurant"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (404) 464-5698
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-6 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} The Imperial — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
