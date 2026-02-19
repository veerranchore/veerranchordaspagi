import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary border-b border-primary/20 px-3 md:px-6 lg:px-10 py-2 md:py-3 flex items-center justify-between shadow-md">
      <Link to="/" className="flex items-center gap-xs sm:gap-sm sm2:gap-sm md:gap-md lg:gap-lg hover:opacity-80 transition-opacity">
        <div className="text-military-yellow size-5 xs:size-6 sm:size-6 sm2:size-6 md:size-7 lg:size-8 xl:size-8 2xl:size-8 flex items-center justify-center">
          <span className="material-symbols-outlined text-lg xs:text-xl sm:text-xl sm2:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">military_tech</span>
        </div>
        <h2 className="text-white text-xs xs:text-xs sm:text-xs sm2:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-black uppercase tracking-tighter">Ranchordas Pagi</h2>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-10">
        <Link to="/" className="text-white/80 hover:text-military-yellow text-xs lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-bold uppercase tracking-widest transition-colors">Home</Link>
        <Link to="/journey" className="text-white/80 hover:text-military-yellow text-xs lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-bold uppercase tracking-widest transition-colors">Journey</Link>
        <Link to="/gallery" className="text-white/80 hover:text-military-yellow text-xs lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-bold uppercase tracking-widest transition-colors">Gallery</Link>
        <Link to="/book" className="text-white/80 hover:text-military-yellow text-xs lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-bold uppercase tracking-widest transition-colors">Book</Link>
        <Link to="/contact" className="text-white/80 hover:text-military-yellow text-xs lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-bold uppercase tracking-widest transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white hover:text-military-yellow transition-colors"
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      {/* CTA Button */}
      <Link to="/book" className="hidden sm:block bg-military-yellow text-primary hover:bg-white px-2 xs:px-2 sm:px-3 sm2:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-1 xs:py-1 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 2xl:py-3 rounded-sm font-black uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-base tracking-[0.1em] transition-all">
        Order Book
      </Link>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-b border-primary/20 lg:hidden">
          <div className="flex flex-col gap-1 xs:gap-1 sm:gap-1.5 md:gap-2 p-2 xs:p-3 sm:p-4 md:p-5">
            <Link to="/" className="text-white/80 hover:text-military-yellow text-xs xs:text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest transition-colors py-1 xs:py-1.5 sm:py-2 md:py-2.5">Home</Link>
            <Link to="/journey" className="text-white/80 hover:text-military-yellow text-xs xs:text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest transition-colors py-1 xs:py-1.5 sm:py-2 md:py-2.5">Journey</Link>
            <Link to="/gallery" className="text-white/80 hover:text-military-yellow text-xs xs:text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest transition-colors py-1 xs:py-1.5 sm:py-2 md:py-2.5">Gallery</Link>
            <Link to="/book" className="text-white/80 hover:text-military-yellow text-xs xs:text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest transition-colors py-1 xs:py-1.5 sm:py-2 md:py-2.5">Book</Link>
            <Link to="/contact" className="text-white/80 hover:text-military-yellow text-xs xs:text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest transition-colors py-1 xs:py-1.5 sm:py-2 md:py-2.5">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
