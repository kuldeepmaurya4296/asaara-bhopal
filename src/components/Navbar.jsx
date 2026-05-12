import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Ashara Relay Centre Update', 
    dropdown: true,
    subItems: [
      { label: 'Accommodations', href: '/accommodations' },
      { label: 'Transport', href: '/transport' },
      { label: 'Relay Centre & Zones', href: '/relay-zones' },
      { label: 'Volunteers & Community', href: '/volunteers' },
      { label: 'Instant Ashara Update', href: '/' }
    ]
  },
  { label: "Dawoodi Bohra's of Bhopal", href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-emerald-dark/95 backdrop-blur-md sticky top-[60px] z-40 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center justify-center gap-2 lg:gap-4 py-1">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              {item.dropdown ? (
                <div 
                  className="flex items-center gap-1 cursor-pointer px-2 lg:px-3 py-3 text-[13px] lg:text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-xl shadow-xl border border-emerald-dark/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <ul className="py-2">
                      {item.subItems.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={sub.href}
                            className="block px-5 py-2.5 text-sm text-charcoal/80 hover:text-emerald-dark hover:bg-cream/50 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`relative px-2 lg:px-3 py-3 text-[13px] lg:text-sm font-medium transition-colors duration-300 group block ${
                    location.pathname === item.href ? 'text-gold' : 'text-cream/80 hover:text-gold'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                    location.pathname === item.href ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`} />
                </Link>
              )}
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
            open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="pb-4 space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-cream/80 hover:text-gold hover:bg-white/5 rounded-lg transition-all duration-200 text-sm font-medium"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 pl-4 ${dropdownOpen ? 'max-h-64' : 'max-h-0'}`}>
                      <ul className="py-2 space-y-1 border-l-2 border-gold/20 ml-4">
                        {item.subItems.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              to={sub.href}
                              onClick={handleLinkClick}
                              className="block px-4 py-2 text-cream/70 hover:text-gold text-sm transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 hover:text-gold hover:bg-white/5 rounded-lg transition-all duration-200 text-sm font-medium ${
                      location.pathname === item.href ? 'text-gold bg-white/5' : 'text-cream/80'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
