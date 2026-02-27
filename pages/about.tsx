import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            About The Imperial
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your neighborhood gastropub in the heart of Oakhurst, Decatur
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-red-600">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Imperial opened its doors in December 2013, transforming a long-abandoned 1920s service station 
                into a vibrant neighborhood gastropub. The name "Imperial" was inspired by a Chevrolet Imperial car, 
                paying homage to the building's automotive heritage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                During renovation, we discovered and preserved historic elements including exposed brick walls with 
                vintage painted signs like "Lubrication 75¢" and a hand-hewn bar that adds character to our space.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-red-600">
                Atmosphere
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We're a funky, come-hither bar with a cozy, friendly atmosphere perfect for the Oakhurst neighborhood. 
                Our sprawling patio is dog-friendly, making us a favorite spot for pet owners and their furry friends.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The converted space features a green roof, vintage signage, and quirky decor that creates a unique 
                dining experience you won't find anywhere else in Decatur.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300 group">
                              <div className="text-center">
                  <h3 className="font-bold text-lg mb-3 text-red-700">Southern Comfort Food</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pure pub grub with Southern comfort and typical bar food with a twist. 
                  Our menu features witty descriptions and creative takes on classic dishes.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
                              <div className="text-center">
                  <h3 className="font-bold text-lg mb-3 text-blue-700">Craft Beer Selection</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  16 rotating taps featuring Georgia craft beers and standards like Guinness and Miller Lite. 
                  We're active on Untappd for beer enthusiasts.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 group">
                              <div className="text-center">
                  <h3 className="font-bold text-lg mb-3 text-green-700">Community Events</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Trivia nights, live music, and participation in Oakhurst Porchfest and local Mardi Gras celebrations. 
                  We're proud to be part of the neighborhood community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Events & Specials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Events & Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-purple-700 mb-2">Monday Trivia</h3>
              <p className="text-sm text-gray-600">8:00 PM</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-yellow-700 mb-2">Tuesday Trivia</h3>
              <p className="text-sm text-gray-600">8:00 PM</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-red-700 mb-2">Happy Hour</h3>
              <p className="text-sm text-gray-600">4-6 PM & 10-12 AM</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-green-700 mb-2">Packers Games</h3>
              <p className="text-sm text-gray-600">When they're on!</p>
            </div>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center">Visit Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-red-600">
                Location
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">726 W. College Avenue</p>
                <p>Decatur, GA 30030</p>
                <p className="text-sm text-gray-600">In the heart of Oakhurst neighborhood</p>
              </div>
              <div className="mt-4">
                <Link href="/contact" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                  Get Directions
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-red-600">
                Hours
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Monday:</span>
                  <span className="text-gray-600">4:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Tuesday - Thursday:</span>
                  <span className="text-gray-600">12:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Friday - Saturday:</span>
                  <span className="text-gray-600">12:00 PM - 12:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-gray-600">12:00 PM - 11:00 PM</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                * Kitchen closes 1 hour earlier
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
            <p className="mb-6 text-red-100">Come experience The Imperial for yourself!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Our Menu
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
