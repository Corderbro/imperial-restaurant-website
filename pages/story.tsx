import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Story() {
  const regularEvents = [
    {
      day: "Monday",
      title: "Trivia Night",
      time: "8:00 PM",
      color: "text-imperial-red",
      description: "Join us for the best trivia night in Decatur!"
    },
    {
      day: "Tuesday", 
      title: "DJ Blaq Mozart's Trivia",
      time: "8:00 PM",
      color: "text-warm-gold",
      description: "Friendlier...Younger? DJ Blaq Mozart brings the trivia fun"
    }
  ]

  const specialEvents = [
    {
      day: "Packers Games",
      title: "Game Day Specials",
      time: "When they're on!",
      color: "packers", // Packers green and yellow
      description: "Cheer on the Pack with fellow fans and drink specials. Join us for the best game day atmosphere in Decatur!"
    },
    {
      day: "Community Events",
      title: "Local Celebrations",
      time: "Throughout the year",
      color: "#9B26B0", // Purple
      description: "We participate in local celebrations and neighborhood events. Follow us on social media to stay updated!"
    }
  ]

  return (
    <Layout>
        {/* Page Header */}
        <section className="py-12 px-4 bg-off-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight letter-spacing-tight" style={{ color: '#A4343A' }}>
              Our Story & Events
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto font-light leading-relaxed">
              From a 1920s service station to your favorite neighborhood bar.
            </p>
          </div>
        </section>
        
        <div className="pt-4">

          {/* The Story */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-light-cream rounded-2xl shadow-lg p-8 border border-light-gray">
                  <h2 className="text-3xl font-bold mb-6 letter-spacing-tight" style={{ color: '#A4343A' }}>The Story</h2>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed">
                    The Imperial opened in December 2013, transforming a long abandoned 1920's service station 
                    into a vibrant neighborhood meeting spot serving first-rate food and drink.
                  </p>
                  <p className="text-gray-700 mb-4 font-light leading-relaxed">
                    The name was inspired by a gloriously restored Chrysler Imperial that glided by one day and pays homage to the building's automotive heritage.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4 mt-6 letter-spacing-wide" style={{ color: '#D4B896' }}>Atmosphere</h3>
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
          <section id="events" className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 bg-light-cream rounded-2xl shadow-lg p-8 border border-light-gray">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight letter-spacing-tight" style={{ color: '#A4343A' }}>Events</h2>
                <p className="text-xl text-dark max-w-3xl mx-auto font-light leading-relaxed">
                  Join us for these regular happenings.
                </p>
              </div>
              
              {/* Regular Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {regularEvents.map((event, index) => (
                  <div key={index} className="bg-light-cream rounded-2xl shadow-lg p-8 border border-light-gray hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`font-bold text-lg mb-3 ${event.color} letter-spacing-wide`}>{event.day}</div>
                    <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">{event.title}</h3>
                    <div className={`text-sm ${event.color} font-semibold mb-4`}>{event.time}</div>
                    <p className="text-gray-600 leading-relaxed font-light">{event.description}</p>
                  </div>
                ))}
              </div>

              {/* Special Events - Centered */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
                {specialEvents.map((event, index) => (
                  <div key={index} className="bg-light-cream rounded-2xl shadow-lg p-8 border border-light-gray hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-1/2">
                    {event.color === "packers" ? (
                      <>
                        <div className="font-bold text-lg mb-3 letter-spacing-wide" style={{
                          background: "linear-gradient(90deg, #203731 0%, #FFB612 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>{event.day}</div>
                        <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">{event.title}</h3>
                        <div className="text-sm font-semibold mb-4" style={{
                          background: "linear-gradient(90deg, #203731 0%, #FFB612 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>{event.time}</div>
                      </>
                    ) : (
                      <>
                        <div className="font-bold text-lg mb-3 letter-spacing-wide" style={{ color: event.color }}>{event.day}</div>
                        <h3 className="font-bold text-xl mb-3 text-dark letter-spacing-tight">{event.title}</h3>
                        <div className="text-sm font-semibold mb-4" style={{ color: event.color }}>{event.time}</div>
                      </>
                    )}
                    <p className="text-gray-600 leading-relaxed font-light">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Private Events */}
          <section className="py-12 px-4 bg-off-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight letter-spacing-tight" style={{ color: '#A4343A' }}>Host Your Event at The Imperial</h2>
                <p className="text-xl text-dark max-w-3xl mx-auto font-light leading-relaxed mt-4">
                  Perfect space for your special occasions
                </p>
              </div>
              
              <div className="bg-light-cream rounded-2xl shadow-lg p-8 border border-light-gray max-w-3xl mx-auto">
                <p className="text-gray-700 mb-6 font-light leading-relaxed text-lg">
                  Our space is perfect for:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-light-cream rounded-lg border border-light-gray">
                    <span className="text-xl" style={{ color: '#A4343A' }}>✓</span>
                    <span className="font-medium text-gray-800">Birthday parties (trivia-themed or not)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-light-cream rounded-lg border border-light-gray">
                    <span className="text-xl" style={{ color: '#A4343A' }}>✓</span>
                    <span className="font-medium text-gray-800">Corporate events</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-light-cream rounded-lg border border-light-gray">
                    <span className="text-xl" style={{ color: '#A4343A' }}>✓</span>
                    <span className="font-medium text-gray-800">Fundraisers</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-light-cream rounded-lg border border-light-gray">
                    <span className="text-xl" style={{ color: '#A4343A' }}>✓</span>
                    <span className="font-medium text-gray-800">Rehearsal dinners</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-light-cream rounded-lg border border-light-gray">
                    <span className="text-xl" style={{ color: '#A4343A' }}>✓</span>
                    <span className="font-medium text-gray-800">Watch parties</span>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <a 
                    href="tel:+14044645698" 
                    className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: '#A4343A',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B1E23'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#A4343A'}
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
  )
}