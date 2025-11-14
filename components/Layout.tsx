import Header from './Header'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="pt-32 min-h-screen bg-warm-white">
        {children}
      </main>
      <Footer />
    </>
  )
}