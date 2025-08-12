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
            <h3 className="font-semibold mb-2">Connect</h3>
            <div className="space-y-1">
              <a href="https://imperial-oakhurst.vercel.app/" className="block hover:underline" target="_blank" rel="noopener noreferrer">
                Website
              </a>
              <a href="https://www.facebook.com/ImperialDecatur/" className="block hover:underline" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.instagram.com/theimperialoakhurst/" className="block hover:underline" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://untappd.com/v/the-imperial/1224591" className="block hover:underline" target="_blank" rel="noopener noreferrer">
                Untappd
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
