import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary border-b border-primary/20 px-3 md:px-6 lg:px-10 py-2 md:py-3 flex items-center justify-between shadow-md">
      <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
        <div className="text-military-yellow size-6 md:size-8 flex items-center justify-center">
          <span className="material-symbols-outlined text-2xl md:text-3xl">military_tech</span>
        </div>
        <h2 className="text-white text-sm md:text-lg lg:text-xl font-black uppercase tracking-tighter">Ranchordas Pagi</h2>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-center gap-6 xl:gap-10">
        <Link to="/" className="text-white/80 hover:text-military-yellow text-xs xl:text-sm font-bold uppercase tracking-widest transition-colors">Home</Link>
        <Link to="/journey" className="text-white/80 hover:text-military-yellow text-xs xl:text-sm font-bold uppercase tracking-widest transition-colors">Journey</Link>
        <Link to="/gallery" className="text-white/80 hover:text-military-yellow text-xs xl:text-sm font-bold uppercase tracking-widest transition-colors">Gallery</Link>
        <Link to="/book" className="text-white/80 hover:text-military-yellow text-xs xl:text-sm font-bold uppercase tracking-widest transition-colors">Book</Link>
        <Link to="/contact" className="text-white/80 hover:text-military-yellow text-xs xl:text-sm font-bold uppercase tracking-widest transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white hover:text-military-yellow transition-colors"
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      {/* CTA Button */}
      <Link to="/book" className="hidden sm:block bg-military-yellow text-primary hover:bg-white px-3 md:px-6 py-1.5 md:py-2 rounded-sm font-black uppercase text-[10px] md:text-xs tracking-[0.1em] transition-all">
        Order Book
      </Link>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-b border-primary/20 lg:hidden">
          <div className="flex flex-col gap-2 p-4">
            <Link to="/" className="text-white/80 hover:text-military-yellow text-xs font-bold uppercase tracking-widest transition-colors py-2">Home</Link>
            <Link to="/journey" className="text-white/80 hover:text-military-yellow text-xs font-bold uppercase tracking-widest transition-colors py-2">Journey</Link>
            <Link to="/gallery" className="text-white/80 hover:text-military-yellow text-xs font-bold uppercase tracking-widest transition-colors py-2">Gallery</Link>
            <Link to="/book" className="text-white/80 hover:text-military-yellow text-xs font-bold uppercase tracking-widest transition-colors py-2">Book</Link>
            <Link to="/contact" className="text-white/80 hover:text-military-yellow text-xs font-bold uppercase tracking-widest transition-colors py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
