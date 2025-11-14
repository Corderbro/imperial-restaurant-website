import Layout from '../components/Layout'
import SEOHead from '../components/SEOHead'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "name": "The Imperial",
                 "description": "Neighborhood gastropub in Decatur, Georgia, featuring Southern comfort food, craft beer, and a dog-friendly patio.",
        "url": "https://imperial-oakhurst.vercel.app",
        "telephone": "+14044645698",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "726 W. College Avenue",
          "addressLocality": "Decatur", 
          "addressRegion": "GA",
          "postalCode": "30030",
          "addressCountry": "US"
        },
        "hasMenu": "https://imperial-oakhurst.vercel.app/menu",
        "servesCuisine": ["American", "Southern", "Pub Food", "Gastropub"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "reviewCount": "150"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "The Imperial",
        "image": [
          "https://imperial-oakhurst.vercel.app/impNeonSign.jpg",
          "https://imperial-oakhurst.vercel.app/impPatio.jpg"
        ]
      }
    ]
  }

  return (
    <>
      <SEOHead 
        title="The Imperial Decatur | Neighborhood Pub & Craft Beer Bar"
        description="Experience The Imperial - a unique neighborhood gastropub in Decatur, GA. Housed in a converted 1920s service station, we serve Southern comfort food, craft beer, and host trivia nights on our dog-friendly patio."
        canonical="/"
        ogImage="/impNeonSign.jpg"
        structuredData={homeStructuredData}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
              aria-label="The Imperial neon sign flickering"
            >
              <source src="/impNeonFlicker.mp4" type="video/mp4" />
              {/* Fallback image in case video doesn't load */}
                             <Image 
                 src="/impNeonSign.jpg" 
                 alt="The Imperial Restaurant neon sign in Decatur" 
                 fill
                 className="object-cover"
               />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 slide-in-left tracking-tight">
              Your New Old Favorite
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto slide-in-right font-light opacity-95">
              Handcrafted cocktails. Timeless tracks. Your table's waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in">
              <Link href="/menu" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95" aria-label="View The Imperial's menu">
                View Our Menu
              </Link>
              <Link href="/story" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95" aria-label="Learn about our story and events">
                See What's Happening
              </Link>
            </div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-neon-red rounded-full opacity-60 float" style={{animationDelay: '0s'}} aria-hidden="true"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-neon-yellow rounded-full opacity-60 float" style={{animationDelay: '1s'}} aria-hidden="true"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-gold rounded-full opacity-60 float" style={{animationDelay: '2s'}} aria-hidden="true"></div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-24 px-4 bg-white" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 fade-in">
                  <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight letter-spacing-tight">Experience The Imperial</h2>
                  <p className="text-xl text-warm-gray max-w-3xl mx-auto font-light leading-relaxed">Take a look at what makes our neighborhood bar special.</p>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <Image 
                  src="/impPatio.jpg" 
                  alt="Best dog-friendly patio in Decatur GA - The Imperial outdoor dining with pets"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-xl mb-2 letter-spacing-wide">Dog-Friendly Patio</h3>
                    <p className="text-sm opacity-90 font-light leading-relaxed">Sprawling outdoor space perfect for your furry friends</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <Image 
                  src="/impNeonSign.jpg" 
                  alt="Best historic restaurant in Decatur GA - The Imperial vintage neon sign" 
                  width={400} 
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-xl mb-2 letter-spacing-wide">Historic Charm</h3>
                    <p className="text-sm opacity-90 font-light leading-relaxed">Vintage neon sign lighting up Decatur</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <Image 
                  src="/impWine.jpg" 
                  alt="Best craft beer and wine selection in Decatur GA - The Imperial bar drinks" 
                  width={400} 
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-xl mb-2 letter-spacing-wide">Craft Beverages</h3>
                    <p className="text-sm opacity-90 font-light leading-relaxed">Carefully curated wine and beer selection</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Image 
                  src="/impCFS.jpg" 
                  alt="Best chicken fried steak in Decatur GA - The Imperial Southern comfort food" 
                  width={400} 
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">Southern Comfort</h3>
                    <p className="text-sm opacity-90 font-light">Classic comfort food with a modern twist</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Image 
                  src="/impJerkChk.jpg" 
                  alt="Best jerk chicken in Decatur GA - The Imperial Caribbean flavors" 
                  width={400} 
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">Bold Flavors</h3>
                    <p className="text-sm opacity-90 font-light">International influences meet Southern hospitality</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Image 
                  src="/impPestoBOTW.jpg" 
                  alt="Best chef specials in Decatur GA - The Imperial fresh pesto dish" 
                  width={400} 
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">Chef's Specials</h3>
                    <p className="text-sm opacity-90 font-light">Fresh, seasonal dishes that surprise and delight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Event Section */}
        <section className="py-24 px-4 bg-gray-50" aria-labelledby="events-heading">
          <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 fade-in">
                  <h2 id="events-heading" className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight letter-spacing-tight">This Week at The Imperial</h2>
                  <p className="text-xl text-warm-gray max-w-3xl mx-auto font-light leading-relaxed">Join us for unforgettable nights filled with great food, craft beer, and even better company in the heart of Decatur.</p>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 p-8 text-center hover:-translate-y-1 border border-gray-100" style={{animationDelay: '0.1s'}}>
                <div className="text-neon-red font-bold text-lg mb-3 letter-spacing-wide">Monday</div>
                <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">Robert's Trivia Night</h3>
                <p className="text-warm-gray font-light leading-relaxed">8:00 PM - Test your knowledge with the best bar trivia in Decatur</p>
              </article>
              
              <article className="bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 p-8 text-center hover:-translate-y-1 border border-gray-100" style={{animationDelay: '0.2s'}}>
                <div className="text-neon-yellow font-bold text-lg mb-3 letter-spacing-wide">Tuesday</div>
                <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">DJ Blaq Mozart's Trivia</h3>
                <p className="text-warm-gray font-light leading-relaxed">Friendlier...Younger? DJ Blaq Mozart brings the trivia fun</p>
              </article>
              
              <article className="bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 p-8 text-center hover:-translate-y-1 border border-gray-100" style={{animationDelay: '0.3s'}}>
                <div className="text-neon-blue font-bold text-lg mb-3 letter-spacing-wide">Happy Hour</div>
                <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">Drink & App Specials</h3>
                <p className="text-warm-gray font-light leading-relaxed">Mon-Fri 4-6 PM & 10-12 AM - Great deals on craft beer, cocktails, and appetizers</p>
              </article>
            </div>
          </div>
        </section>

        {/* Hours Preview */}
        <section className="py-24 px-4 bg-white" aria-labelledby="visit-heading">
          <div className="max-w-6xl mx-auto text-center">
            <h2 id="visit-heading" className="text-4xl md:text-5xl font-bold text-dark mb-16 tracking-tight letter-spacing-tight">Visit Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="text-left slide-in-left">
                <h3 className="text-2xl font-bold text-neon-red mb-8 letter-spacing-wide">Hours</h3>
                <div className="space-y-4 text-warm-gray" role="table" aria-label="Restaurant hours">
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" role="row">
                    <span className="font-semibold" role="cell">Monday:</span>
                    <span role="cell">4:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" role="row">
                    <span className="font-semibold" role="cell">Tuesday - Thursday:</span>
                    <span role="cell">12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" role="row">
                    <span className="font-semibold" role="cell">Friday - Saturday:</span>
                    <span role="cell">12:00 PM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" role="row">
                    <span className="font-semibold" role="cell">Sunday:</span>
                    <span role="cell">12:00 PM - 11:00 PM</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-6 italic font-light">* Kitchen closes one hour before bar closing time</p>
                <p className="text-lg text-neon-red font-semibold mt-4 letter-spacing-wide">But if you're here, we'll stay!</p>
              </div>
              
              <div className="text-left slide-in-right">
                <h3 className="text-2xl font-bold text-burgundy mb-8 letter-spacing-wide">Location</h3>
                <div className="space-y-6 text-warm-gray">
                  <address className="text-lg font-light not-italic">
                    726 W. College Avenue<br />
                    Decatur, GA 30030
                  </address>
                  <p className="text-lg">
                    <a href="tel:+14044645698" className="text-neon-red hover:text-red-700 transition-colors font-semibold">
                      (404) 464-5698
                    </a>
                  </p>
                  <nav className="space-y-3" aria-label="Social media links">
                    <a href="https://www.facebook.com/ImperialDecatur/" className="block text-neon-red hover:text-red-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer" aria-label="Visit The Imperial on Facebook">
                      Facebook
                    </a>
                    <a href="https://www.instagram.com/theimperialoakhurst/" className="block text-neon-red hover:text-red-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer" aria-label="Follow The Imperial on Instagram">
                      Instagram
                    </a>
                    <a href="https://untappd.com/v/the-imperial/1224591" className="block text-neon-red hover:text-red-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer" aria-label="Check out The Imperial on Untappd">
                      Untappd
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 px-4 bg-gray-50" aria-labelledby="social-heading">
          <div className="max-w-6xl mx-auto text-center">
            <h2 id="social-heading" className="text-4xl md:text-5xl font-bold text-dark mb-8 tracking-tight letter-spacing-tight">Follow Our Story</h2>
            <p className="text-xl text-warm-gray mb-12 fade-in font-light max-w-3xl mx-auto leading-relaxed">
              See what's happening at The Imperial through the eyes of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://www.instagram.com/theimperialoakhurst/" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-soft hover:shadow-large transform hover:scale-105 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Imperial on Instagram"
              >
                Follow on Instagram
              </a>
              <a 
                href="https://www.facebook.com/ImperialDecatur/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-soft hover:shadow-large transform hover:scale-105 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Like The Imperial on Facebook"
              >
                Like on Facebook
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}