import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-primary border-b border-primary/20 px-4 md:px-10 py-3 flex items-center justify-between shadow-md">
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="size-8 rounded-full overflow-hidden border-2 border-military-yellow flex-shrink-0">
          <img src="/assets/logo.jpg" alt="Ranchordas Pagi Logo" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-military-yellow text-xl font-black uppercase tracking-tighter">Veer Ranchhod Pagi</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-center gap-10">
        <Link to="/" className="text-white/80 hover:text-military-yellow text-sm font-bold uppercase tracking-widest transition-colors">Home</Link>
        <Link to="/journey" className="text-white/80 hover:text-military-yellow text-sm font-bold uppercase tracking-widest transition-colors">Journey</Link>
        <Link to="/gallery" className="text-white/80 hover:text-military-yellow text-sm font-bold uppercase tracking-widest transition-colors">Gallery</Link>
        <Link to="/book" className="text-white/80 hover:text-military-yellow text-sm font-bold uppercase tracking-widest transition-colors">Book</Link>
        <Link to="/contact" className="text-white/80 hover:text-military-yellow text-sm font-bold uppercase tracking-widest transition-colors">Contact</Link>
      </div>
      <Link to="/book" className="bg-military-yellow text-primary hover:bg-white px-6 py-2 rounded-sm font-black uppercase text-xs tracking-[0.1em] transition-all">
        Order Book
      </Link>
    </nav>
  )
}
