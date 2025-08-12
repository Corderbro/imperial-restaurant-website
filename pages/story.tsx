import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Story() {
  const events = [
    {
      day: "Monday",
      title: "Robert Holland Trivia",
      time: "7:00 PM",
      color: "text-neon-red"
    },
    {
      day: "Friday",
      title: "Weekend Vibes",
      time: "Extended Hours",
      color: "text-neon-yellow"
    },
    {
      day: "Sunday",
      title: "Game Day Specials",
      time: "All Day",
      color: "text-gold"
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="heading-xl text-dark mb-6 text-gradient float">Our Story & Events</h1>
          <p className="body-text text-warm-gray max-w-3xl mx-auto slide-in-left">
            From a 1920s service station to your favorite neighborhood bar.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="feature-card p-8 mb-8">
                <h2 className="heading-lg text-dark mb-6 text-gradient">The Story</h2>
                <p className="body-text text-warm-gray mb-6">
                  The Imperial opened in December 2013, transforming a long-abandoned 1920s service station 
                  into a vibrant neighborhood gastropub. The name was inspired by a Chevrolet Imperial car, 
                  paying homage to the building's automotive heritage.
                </p>
                <p className="body-text text-warm-gray">
                  Today, we're a funky, come-hither bar with a cozy atmosphere perfect for the Oakhurst neighborhood. 
                  Our sprawling patio is dog-friendly, making us a favorite spot for pet owners and their furry friends.
                </p>
              </div>
            </div>
            
            <div className="slide-in-right">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover-lift">
                <Image 
                  src="/impNeonSign.jpg" 
                  alt="The Imperial Neon Sign" 
                  width={500} 
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Vintage Charm</h3>
                  <p className="text-sm opacity-90">The iconic neon sign that lights up Oakhurst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="py-20 px-4 bg-soft-gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="heading-lg text-dark mb-6 text-gradient">Weekly Events</h2>
            <p className="body-text text-warm-gray">
              Join us for these regular happenings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="feature-card text-center hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`font-bold text-lg mb-2 ${event.color} neon-pulse`}>{event.day}</div>
                <h3 className="font-semibold mb-2 text-dark">{event.title}</h3>
                <div className="text-sm text-neon-yellow font-medium">{event.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-dark mb-6 text-gradient">Community</h2>
            <p className="body-text text-warm-gray mb-8 slide-in-left">
              We're proud to be part of the vibrant Oakhurst community, participating in events 
              like Oakhurst Porchfest and local celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="feature-card">
                  <h3 className="heading-md text-neon-red mb-4">What We Offer</h3>
                  <div className="space-y-2 text-sm text-warm-gray text-left">
                    <div className="hover-lift p-2 rounded">• 16 craft beer taps</div>
                    <div className="hover-lift p-2 rounded">• Southern comfort food</div>
                    <div className="hover-lift p-2 rounded">• Dog-friendly patio</div>
                    <div className="hover-lift p-2 rounded">• Live music</div>
                  </div>
                </div>
                <div className="feature-card">
                  <h3 className="heading-md text-neon-yellow mb-4">Perfect For</h3>
                  <div className="space-y-2 text-sm text-warm-gray text-left">
                    <div className="hover-lift p-2 rounded">• Casual dining</div>
                    <div className="hover-lift p-2 rounded">• Group gatherings</div>
                    <div className="hover-lift p-2 rounded">• Game day viewing</div>
                    <div className="hover-lift p-2 rounded">• Private events</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover-lift">
                <Image 
                  src="/impPatio.jpg" 
                  alt="The Imperial Patio" 
                  width={500} 
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Dog-Friendly Patio</h3>
                  <p className="text-sm opacity-90">Where neighbors become friends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-soft-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-dark mb-6 text-gradient">Visit Us</h2>
          <p className="body-text text-warm-gray mb-8 fade-in">
            Come experience The Imperial for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-primary shimmer">
              View Our Menu
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
