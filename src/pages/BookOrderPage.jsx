import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function BookOrderPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#131614] dark:text-white min-h-screen">
      <SEO 
        title="Order Biography"
        description="Pre-order the official biography of Veer Ranchhod Pagi. Read the untold story of the desert scout who changed the course of the 1965 and 1971 wars."
        keywords="Ranchordas Pagi Book, Biography, War Hero Book, Indian Army Books, History Book"
      />
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-24 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="text-6xl md:text-8xl font-black text-military-yellow">
            <span className="material-symbols-outlined text-8xl md:text-9xl">lock</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-primary dark:text-white uppercase tracking-tight">
            Coming Soon
          </h1>
          <p className="text-lg text-[#6d7e74] dark:text-[#a1b0a8] font-medium leading-relaxed">
            The official biography of Ranchordas Pagi is currently being prepared. We're working hard to bring you this incredible story of India's greatest scout.
          </p>
          <div className="pt-8">
            <Link to="/" className="inline-flex items-center gap-2 bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-sm font-black uppercase text-sm tracking-widest transition-all">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Home
            </Link>
          </div>
          <p className="text-sm text-[#6d7e74] dark:text-[#a1b0a8] uppercase tracking-widest font-bold pt-8">
            Subscribe to our newsletter to get notified when the book launches
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
