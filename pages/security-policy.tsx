import Layout from '../components/Layout'
import SEOHead from '../components/SEOHead'

export default function SecurityPolicy() {
  return (
    <>
      <SEOHead 
        title="Security Policy | The Imperial Decatur"
        description="Security policy and responsible disclosure guidelines for The Imperial Decatur website."
        canonical="/security-policy"
        pageType="website"
      />
      <Layout>
        <div className="pt-8 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Security Policy</h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-neon-red">Responsible Disclosure</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The security of The Imperial Decatur website is important to us. If you discover a security 
              vulnerability, we appreciate your help in disclosing it to us in a responsible manner.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 mt-6">How to Report</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Please email security concerns to: <a href="mailto:security@imperialdecatur.com" className="text-neon-red hover:text-red-700 font-semibold">security@imperialdecatur.com</a>
            </p>
            
            <h3 className="text-xl font-semibold mb-4 mt-6">What to Include</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce the issue</li>
              <li>Potential impact assessment</li>
              <li>Your contact information (optional)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4 mt-6">Our Commitment</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>We will respond to your report within 48 hours</li>
              <li>We will keep your report confidential</li>
              <li>We will work with you to understand and resolve the issue</li>
              <li>We will credit you for the discovery (if desired)</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-neon-yellow">Security Measures</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our website implements industry-standard security measures including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>HTTPS encryption for all communications</li>
              <li>Regular security updates and patches</li>
              <li>Content Security Policy (CSP) headers</li>
              <li>XSS and CSRF protection</li>
              <li>Secure hosting infrastructure via Vercel</li>
              <li>Automated security monitoring</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}
