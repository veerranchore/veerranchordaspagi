import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 px-6 md:px-10 border-t border-military-yellow/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Section */}
          <div className="max-w-sm space-y-6">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 group">
              <div className="size-12 rounded-full overflow-hidden border-2 border-military-yellow flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img src="/assets/logo.jpg" alt="Ranchordas Pagi Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-military-yellow text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-white transition-colors">Veer Ranchhod Pagi</h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mt-1">Legendary Scout</p>
              </div>
            </Link>
            <p className="text-white/70 text-base leading-relaxed font-medium">
              "Service before self. Duty before recognition." <br/>
              Preserving the legacy of India's greatest desert scout and military hero.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <h4 className="text-military-yellow font-black uppercase text-sm tracking-[0.2em] mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/70 hover:text-white hover:translate-x-1 inline-block uppercase text-sm font-bold transition-all duration-300">Home</Link></li>
                <li><Link to="/journey" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/70 hover:text-white hover:translate-x-1 inline-block uppercase text-sm font-bold transition-all duration-300">Awards & Honors</Link></li>
                <li><Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/70 hover:text-white hover:translate-x-1 inline-block uppercase text-sm font-bold transition-all duration-300">Visual Gallery</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-military-yellow font-black uppercase text-sm tracking-[0.2em] mb-6">Action</h4>
              <ul className="space-y-4">
                <li><Link to="/book" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/70 hover:text-white hover:translate-x-1 inline-block uppercase text-sm font-bold transition-all duration-300">Order Biography</Link></li>
                <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/70 hover:text-white hover:translate-x-1 inline-block uppercase text-sm font-bold transition-all duration-300">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/30 text-xs uppercase font-bold tracking-widest">
            © 2024 Ranchordas Pagi Legacy Foundation. <span className="hidden md:inline">|</span> <span className="block md:inline mt-2 md:mt-0">All Rights Reserved.</span>
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-white/30 hover:text-military-yellow text-xs uppercase font-bold tracking-widest transition-colors">Privacy</Link>
            <Link to="#" className="text-white/30 hover:text-military-yellow text-xs uppercase font-bold tracking-widest transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
