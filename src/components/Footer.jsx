import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const pagesLinks = [
  { label: 'Home', href: '/' },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'Transport', href: '/transport' },
  { label: 'Relay Zones', href: '/relay-zones' },
  { label: 'Volunteers & Community', href: '/volunteers' },
  { label: 'Dawoodi Bohras of Bhopal', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, subject: 'Quick Contact Form' })
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 4000);
  };

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
                <img 
                  src="/bhplLogo.png" 
                  alt="Bhopal Ashara Logo" 
                  className="h-12 w-auto object-contain" 
                />
                <div>
                  <h3 className="font-heading text-lg text-emerald-dark font-bold leading-tight">Dawoodi Bohra</h3>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider">Jamat Bhopal</p>
                </div>
              </div>
              <p className="text-[13px] text-charcoal/70 leading-relaxed mb-6">
                The Bhopal Ashara Mubaraka Relay Centre has been arranged with the spirit of khidmat, mohabbat, and ikhlaas to provide mumineen with a peaceful and well-organized environment during Ashara Mubarakah. Managed by the Dawoodi Bohra community of Bhopal, the centre is designed to ensure a comfortable and memorable experience for all visitors.
              </p>
              
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
                  <a href="tel:+918982675004" className="flex items-center gap-3 text-[13px] text-charcoal/70 hover:text-emerald-dark transition-colors border-b border-charcoal/5 pb-4">
                    <Phone size={14} className="text-gold shrink-0" />
                    +91 89826 75004
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[13px] text-charcoal/70 border-b border-charcoal/5 pb-4">
                  <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                  Qasr-e-Saifee, Bhopal Talkies Rd, near Bank Of India Bank, near Saifia College Road, Bhopal, Madhya Pradesh 462001
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
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-[13px] rounded bg-white border border-gray-100 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-[13px] rounded bg-white border border-gray-100 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                <textarea
                  placeholder="Message"
                  required
                  rows="3"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-[13px] rounded bg-white border border-gray-100 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative overflow-hidden group w-full bg-[#c59c1f] text-white font-medium py-3 rounded hover:bg-gold transition-all text-[13px] shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-shine" />
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Submit Now'}</span>
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-xs font-medium text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-xs font-medium text-center">Failed to send message.</p>
                )}
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

        {/* Bottom Copyright Text & Attribution */}
        <div className="py-8 border-t border-cream/20 border-dashed flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-cream/80 text-[13px] font-medium tracking-wide text-center md:text-left">
            Copyright {new Date().getFullYear()} Dawoodi Bohra Jamat Bhopal. All Rights Reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-cream/80 text-[13px]">
            <span className="tracking-wide">Developed & Managed by</span>
            <a
              href="https://www.fakhriitservices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300"
            >
              <img
                src="/Fakhri_White.png"
                alt="Fakhri IT Services"
                className="h-4 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
