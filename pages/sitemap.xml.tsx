import { GetServerSideProps } from 'next'

function generateSiteMap() {
  const baseUrl = 'https://imperial-oakhurst.vercel.app'
  const currentDate = new Date().toISOString()

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Homepage -->
     <url>
       <loc>${baseUrl}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     
     <!-- Menu Page -->
     <url>
       <loc>${baseUrl}/menu</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     
     <!-- About Page -->
     <url>
       <loc>${baseUrl}/about</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     
     <!-- Story & Events Page -->
     <url>
       <loc>${baseUrl}/story</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     
     <!-- Contact Page -->
     <url>
       <loc>${baseUrl}/contact</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the XML sitemap
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  
  // Send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap