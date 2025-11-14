import Layout from '../components/Layout'
import SEOHead from '../components/SEOHead'

export default function Contact() {
  return (
    <>
      <SEOHead 
        title="Contact | The Imperial Decatur"
        description="Visit The Imperial Decatur at 726 W College Avenue in Oakhurst. Call (404) 464-5698 for reservations. Open Mon 4-11pm, Tue-Thu 12-11pm, Fri-Sat 12-12am, Sun 12-11pm."
        canonical="/contact"
        pageType="contact"
      />
      <Layout>
      <div className="pt-8 px-4 max-w-7xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight letter-spacing-tight">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-champagne-gold letter-spacing-wide">Location & Contact</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-gray-700 font-light">
                726 W. College Avenue<br />
                Decatur, GA 30030
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-700 font-light">
                <a href="tel:+14044645698" className="text-neon-red hover:text-red-700 transition-colors font-semibold">
                  (404) 464-5698
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Website</h3>
              <p className="text-gray-700 font-light">
                <a href="https://imperial-oakhurst.vercel.app/" className="text-neon-red hover:text-red-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer">
                  imperial-oakhurst.vercel.app
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Social Media</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/ImperialDecatur/" className="text-neon-red hover:text-red-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://www.instagram.com/theimperialoakhurst/" className="text-neon-red hover:text-red-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href="https://untappd.com/v/the-imperial/1224591" className="text-neon-red hover:text-red-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer">
                  Untappd
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-burgundy letter-spacing-wide">Hours of Operation</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold">Monday:</span>
              <span>4:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold">Tuesday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold">Wednesday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold">Thursday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold">Friday:</span>
              <span>12:00 PM - 12:00 AM</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold">Saturday:</span>
              <span>12:00 PM - 12:00 AM</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold">Sunday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 italic font-light">* Kitchen closes one hour before bar closing time</p>
          <p className="text-lg text-champagne-gold font-semibold mb-6 letter-spacing-wide">But if you're here, we'll stay!</p>
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Kitchen Hours</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Monday:</span>
                <span>4:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tuesday - Thursday:</span>
                <span>12:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Friday - Saturday:</span>
                <span>12:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span>12:00 PM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Google Map */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
        <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 relative shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8!2d-84.2907!3d33.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5037e83d45b37%3A0x8b19a1e48b5b5b5b!2s726%20W%20College%20Ave%2C%20Decatur%2C%20GA%2030030!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Imperial location on Google Maps"
            aria-label="Map showing The Imperial's location at 726 W College Avenue, Decatur, GA"
          />
          <div className="absolute top-4 right-4">
            <a
              href="https://goo.gl/maps/YourActualGoogleMapsLinkHere"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-medium"
              aria-label="Open full map in Google Maps"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Send us a Message</h2>
        <form action="https://formspree.io/f/mwpqylva" method="POST" className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input 
              type="text" 
              id="contact-name"
              name="name" 
              placeholder="Your Name" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-neon-red focus:border-transparent transition-all" 
              required 
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input 
              type="email" 
              id="contact-email"
              name="email" 
              placeholder="your@email.com" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-neon-red focus:border-transparent transition-all" 
              required 
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea 
              id="contact-message"
              name="message" 
              placeholder="Tell us how we can help..." 
              className="w-full border border-gray-300 p-3 rounded-lg h-32 focus:ring-2 focus:ring-neon-red focus:border-transparent transition-all resize-none" 
              required 
              aria-required="true"
            />
          </div>
          <button 
            type="submit" 
            className="bg-champagne-gold hover:bg-champagne-gold-dark text-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-soft hover:shadow-glow-gold transform hover:scale-105 active:scale-95 w-full"
            aria-label="Send message to The Imperial"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </Layout>
    </>
  )
}
