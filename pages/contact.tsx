import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Location & Contact</h2>
          <div className="space-y-2">
            <p><strong>Address:</strong><br />
            726 W. College Avenue<br />
            Decatur, GA 30030</p>
            
            <p><strong>Phone:</strong><br />
            (404) 464-5698</p>
            
            <p><strong>Website:</strong><br />
            <a href="http://imperialdecatur.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              imperialdecatur.com
            </a></p>
            
            <p><strong>Social Media:</strong><br />
            <a href="https://www.facebook.com/ImperialDecatur/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Facebook
            </a> • 
            <a href="https://www.instagram.com/theimperialoakhurst/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Instagram
            </a> • 
            <a href="https://untappd.com/v/the-imperial/1224591" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Untappd
            </a></p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Hours of Operation</h2>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Monday:</span>
              <span>4:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Tuesday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Wednesday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Thursday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Friday:</span>
              <span>12:00 PM - 12:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span>12:00 PM - 12:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-2 italic">* Kitchen closes one hour before bar closing time</p>
          
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <h3 className="font-semibold text-sm mb-1">Kitchen Hours</h3>
            <div className="text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Monday:</span>
                <span>4:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday - Thursday:</span>
                <span>12:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday:</span>
                <span>12:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About The Imperial</h2>
        <p className="text-gray-700 mb-4">
          A funky neighborhood gastropub converted from a 1920s service station in the heart of Oakhurst, Decatur. 
          We feature Southern comfort food with a twist, 16 rotating craft beer taps, and a dog-friendly patio.
        </p>
        <p className="text-gray-700">
          Join us for trivia nights, community events, and the best pub grub in Decatur!
        </p>
      </div>
      
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4 max-w-md">
          <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full border p-2 rounded" required />
          <textarea name="message" placeholder="Your Message" className="w-full border p-2 rounded h-32" required />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  )
}
