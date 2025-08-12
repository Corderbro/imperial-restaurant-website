import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="pt-8">
        <h1 className="text-3xl font-bold mb-6">About The Imperial</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            The Imperial opened its doors in December 2013, transforming a long-abandoned 1920s service station 
            into a vibrant neighborhood gastropub. The name "Imperial" was inspired by a Chevrolet Imperial car, 
            paying homage to the building's automotive heritage.
          </p>
          <p className="text-gray-700">
            During renovation, we discovered and preserved historic elements including exposed brick walls with 
            vintage painted signs like "Lubrication 75¢" and a hand-hewn bar that adds character to our space.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Atmosphere</h2>
          <p className="text-gray-700 mb-4">
            We're a funky, come-hither bar with a cozy, friendly atmosphere perfect for the Oakhurst neighborhood. 
            Our sprawling patio is dog-friendly, making us a favorite spot for pet owners and their furry friends.
          </p>
          <p className="text-gray-700">
            The converted space features a green roof, vintage signage, and quirky decor that creates a unique 
            dining experience you won't find anywhere else in Decatur.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">🍽️ Southern Comfort Food</h3>
            <p className="text-sm text-gray-600">
              Pure pub grub with Southern comfort and typical bar food with a twist. 
              Our menu features witty descriptions and creative takes on classic dishes.
            </p>
          </div>
          
          <div className="text-center p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">🍺 Craft Beer Selection</h3>
            <p className="text-sm text-gray-600">
              16 rotating taps featuring Georgia craft beers and standards like Guinness and Miller Lite. 
              We're active on Untappd for beer enthusiasts.
            </p>
          </div>
          
          <div className="text-center p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">🎉 Community Events</h3>
            <p className="text-sm text-gray-600">
              Trivia nights, live music, and participation in Oakhurst Porchfest and local Mardi Gras celebrations. 
              We're proud to be part of the neighborhood community.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-700">
              726 W. College Avenue<br />
              Decatur, GA 30030<br />
              In the heart of Oakhurst neighborhood
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Hours</h3>
            <div className="text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Monday:</span>
                <span>4:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday - Thursday:</span>
                <span>12:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday:</span>
                <span>12:00 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}
