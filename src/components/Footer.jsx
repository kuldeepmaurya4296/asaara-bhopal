import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pagesLinks = [
  { label: 'About Us', href: '/#relay' },
  { label: 'AES - Burhani Masjid', href: '/#masjids' },
  { label: 'AET - Iqbal Maidan', href: '/#masjids' },
  { label: 'AEV - Community Hall', href: '/#masjids' },
  { label: 'Contact', href: '/contact' },
  { label: 'Important Information', href: '/#faq' },
];

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Background layer: half transparent, half emerald-dark */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="flex-1 bg-transparent"></div> {/* Top half, blends with page background */}
        <div className="h-[250px] bg-emerald-dark"></div> {/* Bottom half, solid theme color */}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main White Card */}
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.06)] p-8 lg:p-12 mb-8 border border-charcoal/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Col 1: About Us & Logo */}
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-dark flex items-center justify-center border border-gold/30 shrink-0">
                  <span className="text-gold font-heading text-xl font-bold">B</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-emerald-dark font-bold leading-tight">Bhopal Ashara</h3>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider">Mubarak Relay Centre</p>
                </div>
              </div>
              <p className="text-[13px] text-charcoal/70 leading-relaxed mb-6">
                Premium Islamic event management and live relay platform serving the community during the sacred period of Ashara Mubarak.
              </p>
              <div className="mt-auto flex items-center gap-2 text-[13px] text-charcoal/60 font-medium pt-4">
                <MapPin size={14} className="text-gold shrink-0" />
                Iqbal Maidan, Bhopal, India
              </div>
            </div>

            {/* Col 2: Contact Info */}
            <div>
              <h3 className="font-heading text-xl text-emerald-dark font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-6">
                <li>
                  <a href="mailto:info@asharamubarak.in" className="flex items-center gap-3 text-[13px] text-charcoal/70 hover:text-emerald-dark transition-colors border-b border-charcoal/5 pb-4">
                    <Mail size={14} className="text-gold shrink-0" />
                    info@asharamubarak.in
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-[13px] text-charcoal/70 hover:text-emerald-dark transition-colors border-b border-charcoal/5 pb-4">
                    <Phone size={14} className="text-gold shrink-0" />
                    +91-9876543210
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-charcoal/70 border-b border-charcoal/5 pb-4">
                  <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                  Iqbal Maidan, Bhopal, Madhya Pradesh, India
                </li>
              </ul>
              <div className="flex items-center gap-4 mt-8 pl-1">
                <a href="#" className="text-charcoal/30 hover:text-gold transition-colors"><Facebook size={16} /></a>
                <a href="#" className="text-charcoal/30 hover:text-gold transition-colors"><Twitter size={16} /></a>
                <a href="#" className="text-charcoal/30 hover:text-gold transition-colors"><Instagram size={16} /></a>
                <a href="#" className="text-charcoal/30 hover:text-gold transition-colors"><Youtube size={16} /></a>
              </div>
            </div>

            {/* Col 3: Quick Contact */}
            <div>
              <h3 className="font-heading text-xl text-emerald-dark font-semibold mb-6">Quick Contact</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2.5 text-[13px] rounded bg-white border border-gray-100 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2.5 text-[13px] rounded bg-white border border-gray-100 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="w-full px-4 py-2.5 text-[13px] rounded bg-white border border-gray-100 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                ></textarea>
                <button type="submit" className="relative overflow-hidden group w-full bg-[#c59c1f] text-white font-medium py-3 rounded hover:bg-gold transition-all text-[13px] shadow-sm">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-shine" />
                  <span className="relative z-10">Submit Now</span>
                </button>
              </form>
            </div>

            {/* Col 4: Pages */}
            <div>
              <h3 className="font-heading text-xl text-emerald-dark font-semibold mb-6">Pages</h3>
              <ul className="space-y-4">
                {pagesLinks.map((link, idx) => (
                  <li key={idx}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="flex items-center gap-2 text-[13px] text-charcoal/70 hover:text-gold transition-colors border-b border-charcoal/5 pb-3 group">
                        <ChevronRight size={12} className="text-gold opacity-70 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="flex items-center gap-2 text-[13px] text-charcoal/70 hover:text-gold transition-colors border-b border-charcoal/5 pb-3 group">
                        <ChevronRight size={12} className="text-gold opacity-70 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Text */}
        <div className="py-8 border-t border-cream/20 border-dashed text-center">
          <p className="text-cream text-[13px] font-medium tracking-wide">
            Copyright {new Date().getFullYear()} Bhopal Ashara Mubarak Relay Centre, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
