import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/impNeonSign.jpg" 
            alt="The Imperial Restaurant" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="heading-xl text-neon-yellow mb-6 font-bold tracking-wide float">
            THE IMPERIAL
          </h1>
          <p className="text-2xl font-light text-white mb-4 italic slide-in-left">
            Your New Old Favorite
          </p>
          <p className="body-text text-white mb-8 max-w-2xl mx-auto slide-in-right">
            Handcrafted cocktails. Timeless tracks. Your table's waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Link href="/menu" className="btn-primary shimmer">
              View Our Menu
            </Link>
            <Link href="/story" className="btn-secondary">
              See What's Happening
            </Link>
          </div>
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-neon-red rounded-full opacity-60 float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-neon-yellow rounded-full opacity-60 float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-gold rounded-full opacity-60 float" style={{animationDelay: '2s'}}></div>
      </section>



      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-soft-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="heading-lg text-dark mb-4 text-gradient">Experience The Imperial</h2>
            <p className="body-text text-warm-gray">Take a look at what makes our neighborhood bar special.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <Image 
                src="/impPatio.jpg" 
                alt="The Imperial Patio" 
                width={400} 
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">Dog-Friendly Patio</h3>
                  <p className="text-sm opacity-90">Sprawling outdoor space perfect for your furry friends</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <Image 
                src="/impNeonSign.jpg" 
                alt="The Imperial Neon Sign" 
                width={400} 
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">Historic Charm</h3>
                  <p className="text-sm opacity-90">Vintage neon sign lighting up Oakhurst</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <Image 
                src="/impWine.jpg" 
                alt="Wine Selection" 
                width={400} 
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">Craft Beverages</h3>
                  <p className="text-sm opacity-90">Carefully curated wine and beer selection</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <Image 
                src="/impCFS.jpg" 
                alt="Chicken Fried Steak" 
                width={400} 
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">Southern Comfort</h3>
                  <p className="text-sm opacity-90">Classic comfort food with a modern twist</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <Image 
                src="/impJerkChk.jpg" 
                alt="Jerk Chicken" 
                width={400} 
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">Bold Flavors</h3>
                  <p className="text-sm opacity-90">International influences meet Southern hospitality</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <Image 
                src="/impPestoBOTW.jpg" 
                alt="Pesto Dish" 
                width={400} 
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">Chef's Specials</h3>
                  <p className="text-sm opacity-90">Fresh, seasonal dishes that surprise and delight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="heading-lg text-dark mb-4 text-gradient">This Week at The Imperial</h2>
            <p className="body-text text-warm-gray">Join us for unforgettable nights filled with great food, craft beer, and even better company.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-dark text-center hover-lift" style={{animationDelay: '0.1s'}}>
              <div className="text-neon-red font-bold text-lg mb-2 neon-pulse">Monday</div>
              <h3 className="font-semibold mb-2 text-dark">Robert Holland Trivia</h3>
              <p className="text-sm text-warm-gray mb-4">7:00 PM - Test your knowledge with the best bar trivia in Decatur</p>
              <Link href="/story" className="text-neon-red hover:text-neon-yellow transition-colors text-sm font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="card-dark text-center hover-lift" style={{animationDelay: '0.2s'}}>
              <div className="text-neon-yellow font-bold text-lg mb-2 neon-pulse">Friday</div>
              <h3 className="font-semibold mb-2 text-dark">Weekend Vibes</h3>
              <p className="text-sm text-warm-gray mb-4">Live music and extended hours until midnight</p>
              <Link href="/story" className="text-neon-red hover:text-neon-yellow transition-colors text-sm font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="card-dark text-center hover-lift" style={{animationDelay: '0.3s'}}>
              <div className="text-gold font-bold text-lg mb-2 neon-pulse">Sunday</div>
              <h3 className="font-semibold mb-2 text-dark">Game Day Specials</h3>
              <p className="text-sm text-warm-gray mb-4">Watch the game with great food and drink specials</p>
              <Link href="/story" className="text-neon-red hover:text-neon-yellow transition-colors text-sm font-semibold">
                Learn More →
        </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Preview */}
      <section className="py-20 px-4 bg-soft-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-dark mb-12 text-gradient">Visit Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-left slide-in-left">
              <h3 className="heading-md text-neon-red mb-6">Hours</h3>
              <div className="space-y-3 text-warm-gray">
                <div className="flex justify-between hover-lift p-2 rounded">
                  <span className="font-medium">Monday:</span>
                  <span>4:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between hover-lift p-2 rounded">
                  <span className="font-medium">Tuesday - Thursday:</span>
                  <span>12:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between hover-lift p-2 rounded">
                  <span className="font-medium">Friday - Saturday:</span>
                  <span>12:00 PM - 12:00 AM</span>
                </div>
                <div className="flex justify-between hover-lift p-2 rounded">
                  <span className="font-medium">Sunday:</span>
                  <span>12:00 PM - 11:00 PM</span>
                </div>
              </div>
              <p className="text-sm text-warm-gray mt-4 italic">* Kitchen closes one hour before bar closing time</p>
            </div>
            
            <div className="text-left slide-in-right">
              <h3 className="heading-md text-neon-yellow mb-6">Location</h3>
              <div className="space-y-4 text-warm-gray">
                <p className="body-text hover-lift">
                  726 W. College Avenue<br />
                  Decatur, GA 30030
                </p>
                <p className="body-text hover-lift">
                  (404) 464-5698
                </p>
                <div className="space-y-2">
                  <a href="https://www.facebook.com/ImperialDecatur/" className="block text-neon-red hover:text-neon-yellow transition-colors hover-lift font-medium">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/theimperialoakhurst/" className="block text-neon-red hover:text-neon-yellow transition-colors hover-lift font-medium">
                    Instagram
                  </a>
                  <a href="https://untappd.com/v/the-imperial/1224591" className="block text-neon-red hover:text-neon-yellow transition-colors hover-lift font-medium">
                    Untappd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-dark mb-8 text-gradient">Follow Our Story</h2>
          <p className="body-text text-warm-gray mb-8 fade-in">
            See what's happening at The Imperial through the eyes of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.instagram.com/theimperialoakhurst/" 
              className="btn-primary shimmer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
            <a 
              href="https://www.facebook.com/ImperialDecatur/" 
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Like on Facebook
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
