import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will contact you soon.')
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#131614] dark:text-white">
      <SEO 
        title="Contact Us"
        description="Get in touch with the Ranchordas Pagi Legacy Foundation. Contact us for book inquiries, historical information, or to pay your respects."
        keywords="Contact Ranchordas Pagi Foundation, Legacy Enquiries, Book Inquiry, Tribute"
      />
      <Navigation />

      {/* Hero Section */}
      <div className="relative w-full">
        <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(31, 61, 43, 0.85) 0%, rgba(22, 28, 24, 0.95) 100%), url("/assets/deserts.jpg")'
          }}>
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase">
              Get in <span className="text-military-yellow">Touch</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium leading-normal uppercase tracking-[0.2em]">
              Connect with the Ranchordas Pagi Legacy Foundation
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6 p-8 bg-white dark:bg-[#1c241f] border border-[#dee3e0] dark:border-[#2d3630] rounded-sm shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-military-yellow">
              <span className="material-symbols-outlined text-5xl">location_on</span>
            </div>
            <div>
              <h3 className="text-primary dark:text-white text-xl font-black uppercase mb-2 tracking-tight">Address</h3>
              <p className="text-[#6d7e74] dark:text-[#8ea397] text-sm leading-relaxed font-medium">
                At - Limbala, Post - Mamana<br/>
                Ta - Suigam, Dist - Vav, Tharad<br/>
                Gujarat, India
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-8 bg-white dark:bg-[#1c241f] border border-[#dee3e0] dark:border-[#2d3630] rounded-sm shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-military-yellow">
              <span className="material-symbols-outlined text-5xl">phone</span>
            </div>
            <div>
              <h3 className="text-primary dark:text-white text-xl font-black uppercase mb-2 tracking-tight">Phone</h3>
              <p className="text-[#6d7e74] dark:text-[#8ea397] text-sm leading-relaxed font-medium">
                <a href="tel:+919876543210" className="hover:text-primary dark:hover:text-military-yellow transition-colors">+91 98765 43210</a><br/>
                <a href="tel:+919876543211" className="hover:text-primary dark:hover:text-military-yellow transition-colors">+91 98765 43211</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-8 bg-white dark:bg-[#1c241f] border border-[#dee3e0] dark:border-[#2d3630] rounded-sm shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-military-yellow">
              <span className="material-symbols-outlined text-5xl">mail</span>
            </div>
            <div>
              <h3 className="text-primary dark:text-white text-xl font-black uppercase mb-2 tracking-tight">Email</h3>
              <p className="text-[#6d7e74] dark:text-[#8ea397] text-sm leading-relaxed font-medium">
                <a href="mailto:vsnuwav@gmail.com" className="hover:text-primary dark:hover:text-military-yellow transition-colors">vsnuwav@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white uppercase mb-2 tracking-tight">Send us a Message</h2>
            <p className="text-[#6d7e74] dark:text-[#8ea397] text-lg font-medium mb-8">
              Have questions about the legacy or want to contribute? We'd love to hear from you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-gray-300">First Name</label>
                  <input className="w-full px-4 py-3 bg-background-light dark:bg-[#1f2621] border border-[#dee3e0] dark:border-[#2d3630] rounded focus:ring-2 focus:ring-primary text-sm outline-none transition-all placeholder:text-gray-400" placeholder="Your first name" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-gray-300">Last Name</label>
                  <input className="w-full px-4 py-3 bg-background-light dark:bg-[#1f2621] border border-[#dee3e0] dark:border-[#2d3630] rounded focus:ring-2 focus:ring-primary text-sm outline-none transition-all placeholder:text-gray-400" placeholder="Your last name" type="text" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-gray-300">Email Address</label>
                <input className="w-full px-4 py-3 bg-background-light dark:bg-[#1f2621] border border-[#dee3e0] dark:border-[#2d3630] rounded focus:ring-2 focus:ring-primary text-sm outline-none transition-all placeholder:text-gray-400" placeholder="your.email@example.com" type="email" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-gray-300">Phone Number</label>
                <input className="w-full px-4 py-3 bg-background-light dark:bg-[#1f2621] border border-[#dee3e0] dark:border-[#2d3630] rounded focus:ring-2 focus:ring-primary text-sm outline-none transition-all placeholder:text-gray-400" placeholder="+91 00000 00000" type="tel" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-gray-300">Subject</label>
                <select className="w-full px-4 py-3 bg-background-light dark:bg-[#1f2621] border border-[#dee3e0] dark:border-[#2d3630] rounded focus:ring-2 focus:ring-primary text-sm outline-none appearance-none cursor-pointer">
                  <option>Select a subject</option>
                  <option>Book Inquiry</option>
                  <option>Historical Information</option>
                  <option>Donation & Support</option>
                  <option>Event Participation</option>
                  <option>Media & Press</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-gray-300">Message</label>
                <textarea className="w-full px-4 py-3 bg-background-light dark:bg-[#1f2621] border border-[#dee3e0] dark:border-[#2d3630] rounded focus:ring-2 focus:ring-primary text-sm outline-none transition-all placeholder:text-gray-400 resize-none" placeholder="Your message here..." rows="5" required></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="terms" className="w-4 h-4 cursor-pointer" required />
                <label htmlFor="terms" className="text-sm text-[#6d7e74] dark:text-[#8ea397] cursor-pointer">
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <button className="w-full py-4 bg-military-yellow hover:bg-[#b8962e] text-primary font-extrabold uppercase tracking-widest text-sm rounded shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                <span className="material-symbols-outlined text-[20px]">send</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
