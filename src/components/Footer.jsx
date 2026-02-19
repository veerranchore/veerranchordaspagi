export default function Footer() {
  return (
    <footer className="bg-primary py-12 md:py-16 px-4 md:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="material-symbols-outlined text-military-yellow text-2xl md:text-3xl">military_tech</span>
              <h3 className="text-white text-base md:text-lg font-black uppercase tracking-tighter">Ranchordas Pagi</h3>
            </div>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium">
              Preserving the legacy of India's greatest desert scout and military hero.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-military-yellow font-black uppercase text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-6">Navigation</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="/" className="text-white/70 hover:text-military-yellow uppercase text-xs md:text-sm font-bold transition-colors">Home</a></li>
              <li><a href="/journey" className="text-white/70 hover:text-military-yellow uppercase text-xs md:text-sm font-bold transition-colors">Awards</a></li>
              <li><a href="/gallery" className="text-white/70 hover:text-military-yellow uppercase text-xs md:text-sm font-bold transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-military-yellow uppercase text-xs md:text-sm font-bold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-military-yellow font-black uppercase text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-6">Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-white/70 hover:text-military-yellow uppercase text-xs md:text-sm font-bold transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-military-yellow uppercase text-xs md:text-sm font-bold transition-colors">History</a></li>
              <li><a href="#" className="text-white/70 hover:text-military-yellow uppercase text-xs md:text-sm font-bold transition-colors">Media Kit</a></li>
              <li><a href="#" className="text-white/70 hover:text-military-yellow uppercase text-xs md:text-sm font-bold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-military-yellow font-black uppercase text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-6">Connect</h4>
            <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
              <a href="#" className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-military-yellow text-white hover:text-primary rounded transition-all">
                <span className="material-symbols-outlined text-base md:text-lg">public</span>
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-military-yellow text-white hover:text-primary rounded transition-all">
                <span className="material-symbols-outlined text-base md:text-lg">mail</span>
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-military-yellow text-white hover:text-primary rounded transition-all">
                <span className="material-symbols-outlined text-base md:text-lg">phone</span>
              </a>
            </div>
            <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">Follow our journey</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6 md:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6 text-center sm:text-left">
          <p className="text-white/40 text-[10px] md:text-xs uppercase font-bold tracking-widest order-2 sm:order-1">
            © 2024 Ranchordas Pagi Legacy Foundation. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 md:gap-6 order-1 sm:order-2">
            <a href="#" className="text-white/40 hover:text-white/70 text-[10px] md:text-xs uppercase font-bold tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-[10px] md:text-xs uppercase font-bold tracking-widest transition-colors">Terms</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-[10px] md:text-xs uppercase font-bold tracking-widest transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
