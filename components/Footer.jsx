export default function Footer() {
  return (
    <footer className="bg-primary py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 2xl:mb-20">
          {/* Brand Section */}
          <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4">
            <div className="flex items-center gap-1.5 xs:gap-2 md:gap-3">
              <span className="material-symbols-outlined text-military-yellow text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl">military_tech</span>
              <h3 className="text-white text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-black uppercase tracking-tighter">Ranchordas Pagi</h3>
            </div>
            <p className="text-white/70 text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed font-medium">
              Preserving the legacy of India's greatest desert scout and military hero.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-military-yellow font-black uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-[0.2em] mb-2 xs:mb-3 md:mb-4 lg:mb-6">Navigation</h4>
            <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-2.5">
              <li><a href="/" className="text-white/70 hover:text-military-yellow uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold transition-colors">Home</a></li>
              <li><a href="/journey" className="text-white/70 hover:text-military-yellow uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold transition-colors">Awards</a></li>
              <li><a href="/gallery" className="text-white/70 hover:text-military-yellow uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-military-yellow uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-military-yellow font-black uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-[0.2em] mb-2 xs:mb-3 md:mb-4 lg:mb-6">Resources</h4>
            <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-2.5">
              <li><a href="#" className="text-white/70 hover:text-military-yellow uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-military-yellow uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold transition-colors">History</a></li>
              <li><a href="#" className="text-white/70 hover:text-military-yellow uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold transition-colors">Media Kit</a></li>
              <li><a href="#" className="text-white/70 hover:text-military-yellow uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-military-yellow font-black uppercase text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-[0.2em] mb-2 xs:mb-3 md:mb-4 lg:mb-6">Connect</h4>
            <div className="flex gap-1.5 xs:gap-2 md:gap-3 lg:gap-4 mb-2 xs:mb-3 md:mb-4 lg:mb-6">
              <a href="#" className="flex items-center justify-center w-6 xs:w-7 sm:w-8 md:w-9 lg:w-10 h-6 xs:h-7 sm:h-8 md:h-9 lg:h-10 bg-white/10 hover:bg-military-yellow text-white hover:text-primary rounded transition-all">
                <span className="material-symbols-outlined text-xs xs:text-sm sm:text-base md:text-lg">public</span>
              </a>
              <a href="#" className="flex items-center justify-center w-6 xs:w-7 sm:w-8 md:w-9 lg:w-10 h-6 xs:h-7 sm:h-8 md:h-9 lg:h-10 bg-white/10 hover:bg-military-yellow text-white hover:text-primary rounded transition-all">
                <span className="material-symbols-outlined text-xs xs:text-sm sm:text-base md:text-lg">mail</span>
              </a>
              <a href="#" className="flex items-center justify-center w-6 xs:w-7 sm:w-8 md:w-9 lg:w-10 h-6 xs:h-7 sm:h-8 md:h-9 lg:h-10 bg-white/10 hover:bg-military-yellow text-white hover:text-primary rounded transition-all">
                <span className="material-symbols-outlined text-xs xs:text-sm sm:text-base md:text-lg">phone</span>
              </a>
            </div>
            <p className="text-white/60 text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-widest">Follow our journey</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-4 xs:my-5 sm:my-6 md:my-8 lg:my-10 2xl:my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 text-center sm:text-left">
          <p className="text-white/40 text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase font-bold tracking-widest order-2 sm:order-1">
            © 2024 Ranchordas Pagi Legacy Foundation. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 order-1 sm:order-2">
            <a href="#" className="text-white/40 hover:text-white/70 text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase font-bold tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase font-bold tracking-widest transition-colors">Terms</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase font-bold tracking-widest transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
