import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function JourneyPage() {
  const awards = [
    {
      medal: "Samar Seva Star",
      year: "1967",
      title: "Distinguished Service - Indo-Pak War 1965",
      description: "Awarded for distinguished service during the Indo-Pak War of 1965. Established on 11 February 1967, this medal recognized Ranchordas Pagi's crucial role in identifying Pakistani troop movements and providing accurate intelligence about enemy positions. His strategic assistance helped the Indian Army make successful decisions during critical operations. Read the full story of his 1965 war contributions in the book.",
      image: "/assets/medal.png"
    },
    {
      medal: "Sangram Medal",
      year: "1973",
      title: "Military Campaign Medal - 1971",
      description: "Recognized for participation and support in the 1971 Bangladesh Liberation War. Established on 17 January 1973, this medal honored his service in guiding Indian forces through treacherous desert terrain during the 1971 conflict. He tracked enemy movements and helped prevent infiltrations using his unmatched navigation skills. Discover the complete account of his 1971 war heroics in the biography.",
      image: "/assets/medal1.png"
    },
    {
      medal: "Police Medal",
      year: "1975",
      title: "Meritorious Service - Border Surveillance",
      description: "Awarded for outstanding expertise in border surveillance and footprint tracking. Even at age 58, he served as a master tracker with rare expertise in reading footprints—identifying direction, distance, and number of persons. His skills made him invaluable to border security operations. The book reveals the fascinating techniques behind his legendary tracking abilities.",
      image: "/assets/medal2.png"
    }
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#131614] dark:text-[#f1f3f2]">
      <SEO 
        title="Awards & Honors"
        description="Discover the prestigious military awards and honors received by Ranchordas Pagi, including the Samar Seva Star, Sangram Medal, and Police Medal."
        keywords="Samar Seva Star, Sangram Medal, Police Medal, Indian Military Awards, Ranchordas Pagi Awards"
      />
      <Navigation />

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Page Heading */}
        <section className="mb-16 border-l-4 border-primary pl-8 py-4">
          <h2 className="text-5xl font-black text-primary dark:text-white tracking-tighter uppercase leading-none mb-4">
            Awards & <br/>Honors
          </h2>
          <p className="max-w-2xl text-lg text-[#6d7e74] dark:text-[#a1b0a8] font-medium leading-relaxed">
            Recognizing the extraordinary military service and legendary contributions of Ranchordas Pagi through prestigious national awards and medals.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="relative py-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 timeline-line transform md:-translate-x-1/2"></div>
          <div className="space-y-16">
            {awards.map((award, idx) => (
              <div key={idx} className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between w-full`}>
                <div className={`hidden md:block w-[45%] ${idx % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  {/* Empty space for desktop */}
                </div>
                <div className="absolute left-4 md:left-1/2 size-5 timeline-dot rounded-full transform -translate-x-1/2 z-10"></div>
                <div className={`w-full ${idx % 2 === 0 ? 'md:w-[45%] pl-12 md:pl-12' : 'md:w-[45%] pl-12 md:pl-0 md:pr-12'}`}>
                  <div className="bg-white dark:bg-[#1a231e] p-6 border border-[#dee3e0] dark:border-[#2d3630] shadow-sm rounded-sm">
                    <div className="space-y-3">
                      <span className="text-military-yellow font-black text-sm tracking-[0.2em] uppercase">{award.year}</span>
                      <h3 className="text-2xl font-bold text-primary dark:text-white">{award.medal}</h3>
                      <p className="text-lg text-[#6d7e74] dark:text-[#a1b0a8] font-bold uppercase tracking-wide">{award.title}</p>
                      <p className="text-[#6d7e74] dark:text-[#a1b0a8] leading-relaxed text-sm">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Archive Section */}
        <section className="mt-16 max-w-5xl mx-auto rounded-xl bg-background-dark text-white p-6 md:p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[150px]">history_edu</span>
          </div>
          <div className="relative z-10 mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Documentary Archive</h2>
            <div className="h-1 w-16 bg-military-yellow"></div>
          </div>
          <div className="max-w-2xl mx-auto w-full aspect-video rounded-lg overflow-hidden relative z-10 bg-black shadow-xl border border-white/10">
            {/* Replace /assets/video.mp4 with your actual video filename */}
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/assets/video-thumbnail.jpg" // Optional: Add a thumbnail image
            >
              <source src="/assets/documentary.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
