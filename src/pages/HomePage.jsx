import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#131614] dark:text-white transition-colors duration-300">
      <SEO 
        title="Home"
        description="Ranchordas Pagi was a legendary Indian Army scout known for his unmatched tracking skills in the 1965 and 1971 Indo-Pak wars. Explore his life, journey, and legacy."
        keywords="Ranchordas Pagi, Indian Army Scout, 1965 War, 1971 War, Desert Tracker, Pagi, Banaskantha Hero"
      />
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="flex min-h-[600px] flex-col gap-6 bg-center bg-no-repeat items-center justify-center p-8 text-center" 
          style={{
            backgroundImage: 'linear-gradient(rgba(31, 61, 43, 0.75) 0%, rgba(22, 28, 24, 0.9) 100%), url("/assets/images.webp")',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}>
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-white text-6xl md:text-8xl font-black leading-tight tracking-tighter uppercase">
              Ranchordas <span className="text-military-yellow">Pagi</span>
            </h1>
            <h2 className="text-white/90 text-lg md:text-2xl font-medium leading-normal uppercase tracking-[0.3em] border-y border-white/20 py-4">
              Indian Army Scout | Desert Tracker
            </h2>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h3 className="text-primary dark:text-military-yellow text-sm font-black uppercase tracking-[0.2em]">The Legacy of a Hero</h3>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-primary dark:text-white uppercase">The Unseen Sentinel of the Rann</h2>
          <p className="text-lg text-primary/80 dark:text-white/70 leading-relaxed font-medium">
            Ranchordas Pagi was a legendary desert scout for the Indian Army, known for his extraordinary tracking skills during the 1965 and 1971 wars. His ability to read footprints in the sand guided troops through the treacherous Rann of Kutch when modern navigation failed.
          </p>
          <div className="pt-4">
            <div className="flex items-center gap-4 text-primary dark:text-military-yellow font-black uppercase text-sm tracking-widest">
              <span className="w-12 h-[2px] bg-military-yellow"></span>
              <span>Established Scout Corps</span>
            </div>
          </div>
        </div>
        <div className="relative max-w-xs mx-auto">
          <div className="aspect-[4/3] bg-primary rounded-sm overflow-hidden border-8 border-white dark:border-primary shadow-2xl">
            <img alt="Desert Landscape" className="w-full h-full object-cover grayscale contrast-125 opacity-80" src="/assets/images.webp" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-military-yellow p-8 text-primary font-black text-2xl uppercase tracking-tighter shadow-xl">
            1901 — 2013
          </div>
        </div>
      </section>

      {/* Navigation Blocks Grid */}
      <section className="bg-primary py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/journey" className="military-grid-item bg-primary border border-white/10 aspect-square flex flex-col justify-between p-8 group cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-military-yellow text-4xl group-hover:scale-110 transition-transform">route</span>
              <div className="space-y-2">
                <h4 className="text-white text-2xl font-black uppercase">Journey</h4>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">The 120-Year Timeline</p>
              </div>
            </Link>
            <Link to="/gallery" className="military-grid-item bg-primary border border-white/10 aspect-square flex flex-col justify-between p-8 group cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-military-yellow text-4xl group-hover:scale-110 transition-transform">photo_library</span>
              <div className="space-y-2">
                <h4 className="text-white text-2xl font-black uppercase">Gallery</h4>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Archival Photography</p>
              </div>
            </Link>
            <Link to="/book" className="military-grid-item bg-primary border border-white/10 aspect-square flex flex-col justify-between p-8 group cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-military-yellow text-4xl group-hover:scale-110 transition-transform">menu_book</span>
              <div className="space-y-2">
                <h4 className="text-white text-2xl font-black uppercase">Book</h4>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Official Biography</p>
              </div>
            </Link>
            <Link to="/contact" className="military-grid-item bg-primary border border-white/10 aspect-square flex flex-col justify-between p-8 group cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-military-yellow text-4xl group-hover:scale-110 transition-transform">contact_support</span>
              <div className="space-y-2">
                <h4 className="text-white text-2xl font-black uppercase">Contact</h4>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Legacy Enquiries</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 md:px-10 bg-military-yellow">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="material-symbols-outlined text-primary text-5xl opacity-20">format_quote</span>
          <h2 className="text-primary text-3xl md:text-5xl font-black uppercase leading-[1.1] tracking-tight italic">
            "Service before self. Duty before recognition."
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">The Pagi Creed</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
