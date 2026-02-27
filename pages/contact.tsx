import Layout from '../components/Layout'
import Image from 'next/image'

export default function Contact() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 px-4 bg-off-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight letter-spacing-tight" style={{ color: '#A4343A' }}>
            Contact & Hours
          </h1>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto font-light leading-relaxed">
            Visit us in Oakhurst, Decatur or get in touch.
          </p>
        </div>
      </section>

      <div className="pt-4">
        {/* Contact Information */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Location & Contact */}
              <div className="bg-light-cream rounded-2xl shadow-lg p-8 border border-light-gray">
                <h2 className="text-3xl font-bold mb-6 letter-spacing-tight" style={{ color: '#A4343A' }}>Location & Contact</h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-dark">Address</h3>
                    <address className="font-light leading-relaxed not-italic">
                      726 W College Ave<br />
                      Decatur, GA 30030
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-dark">Phone</h3>
                    <a href="tel:+14044645698" className="text-imperial-red hover:opacity-80 transition-colors font-semibold" style={{ color: '#A4343A' }}>
                      (404) 464-5698
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-dark">Social Media</h3>
                    <div className="flex flex-col gap-2">
                      <a href="https://www.facebook.com/ImperialDecatur/" className="hover:opacity-80 transition-colors font-medium" target="_blank" rel="noopener noreferrer" style={{ color: '#A4343A' }}>
                        Facebook
                      </a>
                      <a href="https://www.instagram.com/theimperialoakhurst/" className="hover:opacity-80 transition-colors font-medium" target="_blank" rel="noopener noreferrer" style={{ color: '#A4343A' }}>
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-light-cream rounded-2xl shadow-lg p-8 border border-light-gray">
                <h2 className="text-3xl font-bold mb-4 letter-spacing-tight" style={{ color: '#A4343A' }}>Hours of Operation</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Monday - Thursday:</span>
                    <span className="font-semibold" style={{ color: '#A4343A' }}>12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Friday - Saturday:</span>
                    <span className="text-neon-red font-semibold">12:00 PM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Sunday:</span>
                    <span className="font-semibold" style={{ color: '#A4343A' }}>12:00 PM - 11:00 PM</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic font-light">* Kitchen closes one hour before bar closing time</p>
                <p className="text-lg font-semibold mt-4 letter-spacing-wide" style={{ color: '#A4343A' }}>But if you're here, we'll stay!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-12 px-4 bg-off-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center letter-spacing-tight" style={{ color: '#A4343A' }}>Find Us</h2>
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] md:h-[500px] relative shadow-lg mb-4">
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
            </div>
            <div className="text-center">
              <a
                href="https://maps.google.com/?q=726+W+College+Ave+Decatur+GA+30030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: '#A4343A',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B1E23'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#A4343A'}
                aria-label="Open full map in Google Maps"
              >
                <span>📍</span> Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-light-cream rounded-2xl shadow-lg p-8 border border-light-gray">
              <h2 className="text-3xl font-bold mb-6 letter-spacing-tight text-center" style={{ color: '#A4343A' }}>Send us a Message</h2>
              <form action="https://formspree.io/f/mwpqylva" method="POST" className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-neon-red focus:border-transparent transition-all font-light" 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-neon-red focus:border-transparent transition-all font-light" 
                    required 
                  />
                </div>
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    className="w-full border border-gray-300 p-4 rounded-lg h-32 focus:ring-2 focus:ring-neon-red focus:border-transparent transition-all resize-none font-light" 
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: '#A4343A',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B1E23'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#A4343A'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
