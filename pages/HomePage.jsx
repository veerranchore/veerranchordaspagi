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
        <div className="flex min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex-col gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 bg-center bg-no-repeat items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8 text-center" 
          style={{
            backgroundImage: 'linear-gradient(rgba(31, 61, 43, 0.75) 0%, rgba(22, 28, 24, 0.9) 100%), url("/assets/images.webp")',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}>
          <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-1 xs:px-2 sm:px-3 md:px-4">
            <h1 className="text-white text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight tracking-tighter uppercase">
              Ranchordas <span className="text-military-yellow">Pagi</span>
            </h1>
            <h2 className="text-white/90 text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium leading-normal uppercase tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.3em] border-y border-white/20 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-4">
              Indian Army Scout | Desert Tracker
            </h2>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-3 md:px-6 lg:px-10 py-12 md:py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-primary dark:text-military-yellow text-xs md:text-sm font-black uppercase tracking-[0.2em]">The Legacy of a Hero</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-primary dark:text-white uppercase">The Unseen Sentinel of the Rann</h2>
          <p className="text-sm md:text-base lg:text-lg text-primary/80 dark:text-white/70 leading-relaxed font-medium">
            Ranchordas Pagi was a legendary desert scout for the Indian Army, known for his extraordinary tracking skills during the 1965 and 1971 wars. His ability to read footprints in the sand guided troops through the treacherous Rann of Kutch when modern navigation failed.
          </p>
          <div className="pt-2 md:pt-4">
            <div className="flex items-center gap-3 md:gap-4 text-primary dark:text-military-yellow font-black uppercase text-xs md:text-sm tracking-widest">
              <span className="w-8 md:w-12 h-[2px] bg-military-yellow"></span>
              <span>Established Scout Corps</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] bg-primary rounded-sm overflow-hidden border-4 md:border-8 border-white dark:border-primary shadow-2xl">
            <img alt="Desert Landscape" className="w-full h-full object-cover grayscale contrast-125 opacity-80" src="/assets/desert.jpg" />
          </div>
          <div className="absolute -bottom-3 md:-bottom-6 -right-3 md:-right-6 bg-military-yellow p-3 md:p-8 text-primary font-black text-sm md:text-2xl uppercase tracking-tighter shadow-xl">
            1901 — 2013
          </div>
        </div>
      </section>

      {/* Navigation Blocks Grid */}
      <section className="bg-primary py-12 md:py-16 lg:py-24 px-3 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <Link to="/journey" className="military-grid-item bg-primary border border-white/10 aspect-square flex flex-col justify-between p-4 md:p-6 lg:p-8 group cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-military-yellow text-3xl md:text-4xl group-hover:scale-110 transition-transform">route</span>
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-white text-lg md:text-xl lg:text-2xl font-black uppercase">Journey</h4>
                <p className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider">The 120-Year Timeline</p>
              </div>
            </Link>
            <Link to="/gallery" className="military-grid-item bg-primary border border-white/10 aspect-square flex flex-col justify-between p-4 md:p-6 lg:p-8 group cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-military-yellow text-3xl md:text-4xl group-hover:scale-110 transition-transform">photo_library</span>
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-white text-lg md:text-xl lg:text-2xl font-black uppercase">Gallery</h4>
                <p className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider">Archival Photography</p>
              </div>
            </Link>
            <Link to="/book" className="military-grid-item bg-primary border border-white/10 aspect-square flex flex-col justify-between p-4 md:p-6 lg:p-8 group cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-military-yellow text-3xl md:text-4xl group-hover:scale-110 transition-transform">menu_book</span>
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-white text-lg md:text-xl lg:text-2xl font-black uppercase">Book</h4>
                <p className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider">Official Biography</p>
              </div>
            </Link>
            <Link to="/contact" className="military-grid-item bg-primary border border-white/10 aspect-square flex flex-col justify-between p-4 md:p-6 lg:p-8 group cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-military-yellow text-3xl md:text-4xl group-hover:scale-110 transition-transform">contact_support</span>
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-white text-lg md:text-xl lg:text-2xl font-black uppercase">Contact</h4>
                <p className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider">Legacy Enquiries</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 md:py-20 lg:py-32 px-3 md:px-6 lg:px-10 bg-military-yellow">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 lg:space-y-8">
          <span className="material-symbols-outlined text-primary text-4xl md:text-5xl lg:text-6xl opacity-20 inline-block">format_quote</span>
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight italic px-2">
            "Service before self. Duty before recognition."
          </h2>
          <div className="w-12 md:w-16 lg:w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs lg:text-sm">The Pagi Creed</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
