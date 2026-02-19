import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary border-b border-primary/20 px-2 xs:px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 py-1.5 xs:py-2 sm:py-2 md:py-2.5 lg:py-3 flex items-center justify-between shadow-md">
      <Link to="/" className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 hover:opacity-80 transition-opacity">
        <div className="text-military-yellow size-5 xs:size-5 sm:size-6 md:size-6 lg:size-7 xl:size-8 flex items-center justify-center">
          <span className="material-symbols-outlined text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">military_tech</span>
        </div>
        <h2 className="text-white text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-black uppercase tracking-tighter">Ranchordas Pagi</h2>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-center gap-2 lg:gap-3 xl:gap-4 2xl:gap-6">
        <Link to="/" className="text-white/80 hover:text-military-yellow text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-widest transition-colors">Home</Link>
        <Link to="/journey" className="text-white/80 hover:text-military-yellow text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-widest transition-colors">Journey</Link>
        <Link to="/gallery" className="text-white/80 hover:text-military-yellow text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-widest transition-colors">Gallery</Link>
        <Link to="/book" className="text-white/80 hover:text-military-yellow text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-widest transition-colors">Book</Link>
        <Link to="/contact" className="text-white/80 hover:text-military-yellow text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-widest transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white hover:text-military-yellow transition-colors"
      >
        <span className="material-symbols-outlined text-lg xs:text-xl sm:text-xl md:text-2xl">menu</span>
      </button>



      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-b border-primary/20 lg:hidden">
          <div className="flex flex-col gap-0.5 xs:gap-1 sm:gap-1 md:gap-1.5 p-2 xs:p-2.5 sm:p-3 md:p-4">
            <Link to="/" className="text-white/80 hover:text-military-yellow text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest transition-colors py-1 xs:py-1 sm:py-1.5 md:py-2">Home</Link>
            <Link to="/journey" className="text-white/80 hover:text-military-yellow text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest transition-colors py-1 xs:py-1 sm:py-1.5 md:py-2">Journey</Link>
            <Link to="/gallery" className="text-white/80 hover:text-military-yellow text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest transition-colors py-1 xs:py-1 sm:py-1.5 md:py-2">Gallery</Link>
            <Link to="/book" className="text-white/80 hover:text-military-yellow text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest transition-colors py-1 xs:py-1 sm:py-1.5 md:py-2">Book</Link>
            <Link to="/contact" className="text-white/80 hover:text-military-yellow text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest transition-colors py-1 xs:py-1 sm:py-1.5 md:py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
