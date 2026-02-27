import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0" style={{ top: '-180px' }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center top',
            }}
          >
            <source src="/impNeonFlicker.mp4" type="video/mp4" />
            {/* Fallback image in case video doesn't load */}
            <Image 
              src="/impNeonSign.jpg" 
              alt="The Imperial Restaurant" 
              fill
              className="object-cover"
              style={{
                objectPosition: 'center top',
              }}
              priority
            />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col justify-center items-center min-h-screen py-12 md:py-20" style={{ marginTop: '100px' }}>
          <p className="text-lg md:text-2xl font-light text-white mb-3 md:mb-4 italic slide-in-left px-2">
            Your New Old Favorite
          </p>
          <p className="text-sm md:text-lg text-white mb-6 md:mb-8 max-w-2xl mx-auto slide-in-right px-4 leading-relaxed">
            Handcrafted cocktails. Timeless tracks. Your table's waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center fade-in w-full px-4 mt-4">
            <Link href="/menu" className="btn-primary shimmer text-center">
              View Our Menu
            </Link>
            <Link href="/story" className="btn-primary shimmer text-center">
              See What's Happening
            </Link>
          </div>
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full opacity-60 float" style={{animationDelay: '0s', backgroundColor: '#A4343A' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full opacity-60 float" style={{animationDelay: '1s', backgroundColor: '#FFD93D' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-gold rounded-full opacity-60 float" style={{animationDelay: '2s'}}></div>
      </section>



      {/* Photo Gallery Section */}
      <section className="py-12 px-4 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 fade-in">
            <h2 className="heading-lg mb-4" style={{ color: '#A4343A' }}>Experience The Imperial</h2>
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





      {/* Social Proof Section */}
      <section className="py-12 px-4 bg-light-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6" style={{ color: '#A4343A' }}>Follow Our Story</h2>
          <p className="body-text text-warm-gray mb-6 fade-in">
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
