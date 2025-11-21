import Layout from '../components/Layout'
import SEOHead from '../components/SEOHead'
import Link from 'next/link'
import Image from 'next/image'

export default function Story() {
  const events = [
    {
      day: "Monday",
      title: "Trivia Night",
      time: "8:00 PM",
      color: "text-neon-red",
      description: "Join us for the best trivia night in Decatur!"
    },
    {
      day: "Tuesday", 
      title: "DJ Blaq Mozart's Trivia",
      time: "8:00 PM",
      color: "text-neon-yellow",
      description: "Friendlier...Younger? DJ Blaq Mozart brings the trivia fun"
    },
    {
      day: "Happy Hour",
      title: "Drink and App Specials",
      time: "Mon-Fri 4-6 PM & 10-12 AM",
      color: "text-neon-blue",
      description: "Great deals on craft beer, cocktails, and appetizers"
    }
  ]

  return (
    <>
      <SEOHead 
        title="Story & Events | The Imperial Decatur"
        description="Join us for Trivia every Monday and Tuesday at 8pm! Learn about The Imperial's history as a converted 1920s service station in Decatur, GA."
        canonical="/story"
        pageType="about"
      />
      <Layout>
        {/* Page Header */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight letter-spacing-tight">
              Our Story & Events
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto font-light leading-relaxed">
              From a 1920s service station to your favorite neighborhood bar.
            </p>
          </div>
        </section>
        
        <div className="pt-8">

          {/* The Story */}
          <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <h2 className="text-3xl font-bold mb-6 text-dark letter-spacing-tight">The Story</h2>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed">
                    The Imperial opened in December 2013, transforming a long abandoned 1920's service station 
                    into a vibrant neighborhood meeting spot serving first-rate food and drink.
                  </p>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed">
                    The name was inspired by a gloriously restored Chrysler Imperial that glided by one day and pays homage to the building's automotive heritage.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-neon-yellow mb-4 mt-8 letter-spacing-wide">Atmosphere</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Today we're a funky, friendly restaurant with a cozy atmosphere perfect for your casual get-togethers. Our sprawling patio is dog-friendly, making us a favorite spot for pet owners and their furry friends.
                  </p>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image 
                    src="/impNeonSign.jpg" 
                    alt="The Imperial Neon Sign" 
                    width={500} 
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-bold text-xl mb-2 letter-spacing-wide">Vintage Charm</h3>
                    <p className="text-sm opacity-90 font-light leading-relaxed">The iconic neon sign that lights up Decatur</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Events */}
          <section id="events" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight letter-spacing-tight">Events</h2>
                <p className="text-xl text-dark max-w-3xl mx-auto font-light leading-relaxed">
                  Join us for these regular happenings.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {events.map((event, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`font-bold text-lg mb-3 ${event.color} letter-spacing-wide`}>{event.day}</div>
                    <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">{event.title}</h3>
                    <div className="text-sm text-neon-yellow font-semibold mb-4">{event.time}</div>
                    <p className="text-gray-600 leading-relaxed font-light">{event.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-neon-green font-bold text-lg mb-3 letter-spacing-wide">Packers Games</div>
                  <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">Game Day Specials</h3>
                  <div className="text-sm text-neon-green font-semibold mb-4">When they're on!</div>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Cheer on the Pack with fellow fans and drink specials. Join us for the best game day atmosphere in Decatur!
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-neon-purple font-bold text-lg mb-3 letter-spacing-wide">Community Events</div>
                  <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">Local Celebrations</h3>
                  <div className="text-sm text-neon-purple font-semibold mb-4">Throughout the year</div>
                  <p className="text-gray-600 leading-relaxed font-light">
                    We participate in local celebrations and neighborhood events. Follow us on social media to stay updated!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Private Events */}
          <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight letter-spacing-tight">Host Your Event at The Imperial</h2>
                <p className="text-xl text-dark max-w-3xl mx-auto font-light leading-relaxed mt-4">
                  Perfect space for your special occasions
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 max-w-3xl mx-auto">
                <p className="text-gray-700 mb-6 font-light leading-relaxed text-lg">
                  Our space is perfect for:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-neon-red text-xl">✓</span>
                    <span className="font-medium text-gray-800">Birthday parties (trivia-themed or not)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-neon-red text-xl">✓</span>
                    <span className="font-medium text-gray-800">Corporate happy hours</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-neon-red text-xl">✓</span>
                    <span className="font-medium text-gray-800">Fundraisers</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-neon-red text-xl">✓</span>
                    <span className="font-medium text-gray-800">Rehearsal dinners</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-neon-red text-xl">✓</span>
                    <span className="font-medium text-gray-800">Watch parties</span>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="tel:+14044645698" 
                    className="inline-flex items-center gap-2 bg-neon-red hover:bg-neon-red-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-glow-red transform hover:scale-105 active:scale-95"
                    aria-label="Call to discuss your event"
                  >
                    <span>📞</span> Call (404) 464-5698 to discuss your event
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </Layout>
    </>
  )
}