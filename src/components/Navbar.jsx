import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Ashara', href: '#relay' },
  { label: 'Live Relay', href: '#countdown' },
  { label: 'Masjid in Bhopal', href: '#masjids' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-emerald-dark/95 backdrop-blur-md sticky top-[60px] z-40 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center justify-center gap-1 py-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative px-4 py-3 text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300 group block"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center justify-between py-3">
          <span className="text-cream font-heading text-sm font-semibold">Menu</span>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gold hover:text-gold-light transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="pb-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-cream/80 hover:text-gold hover:bg-white/5 rounded-lg transition-all duration-200 text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
