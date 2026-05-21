import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Search, Menu, X, Megaphone, ChevronDown, Hotel, Bus, Layers, Users, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const announcements = [
  "✦ Ashara Mubaraka 1448H – Live Relay Active ✦",
  "✦ Emergency Support Available 24/7 ✦",
  "✦ Waaz Timing Updated – Check Schedule ✦",
  "✦ Volunteer Registration Now Open ✦",
];

const navItems = [
  { label: 'Home', href: '/' },
  { type: 'dropdown', label: 'Ashara Relay Centre Update' },
  { label: "Dawoodi Bohra's of Bhopal", href: '/about' },
  // { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  // { label: 'Reports', href: '/report' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Relay Araz', href: '/relay-araz' },
  { label: 'Contact Us', href: '/contact' },
  // { label: "Relay Araz Old", href: '/relay-araz-old' },
  // { label: "Report Old", href: '/report-old' },
  // { label: "Report", href: '/report' }

];

const dropdownItems = [
  { label: 'Accommodations', href: '/accommodations', icon: Hotel, desc: 'Hotels 2★ to 5★ in Bhopal' },
  { label: 'Transport', href: '/transport', icon: Bus, desc: 'Rail, Air, Road & City transport' },
  { label: 'Relay Centre & Zone', href: '/relay-zones', icon: Layers, desc: '4 zones with relay centres' },
  { label: 'Volunteers & Community', href: '/volunteers', icon: Users, desc: '23 departments & contacts' },
  { label: 'Instant Ashara Update', href: 'https://wa.me/918982675004', icon: MessageCircle, desc: 'Latest updates via WhatsApp', external: true },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const navigate = useNavigate();

  // Measure header height
  useEffect(() => {
    const measureHeader = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    measureHeader();
    window.addEventListener('resize', measureHeader);
    return () => window.removeEventListener('resize', measureHeader);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 200);
  };

  const handleDropdownItemClick = (item) => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    if (item.external) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.href);
    }
  };

  return (
    <>
      <header ref={headerRef} className="fixed top-0 w-full z-50 flex flex-col shadow-md">
        {/* Announcement Marquee */}
        <div className="bg-emerald-dark text-gold py-2.5 overflow-hidden whitespace-nowrap relative">
          <div className="flex items-center animate-marquee">
            {announcements.concat(announcements).map((txt, i) => (
              <span key={i} className="mx-8 text-sm font-medium tracking-wide flex items-center gap-2">
                <Megaphone size={14} className="opacity-70 shrink-0" />
                {txt}
              </span>
            ))}
          </div>
        </div>

        {/* Top Header (Logo, Search, Contact) */}
        {/* <div className="bg-white/95 backdrop-blur-md border-b border-emerald-dark/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img 
                src="/bhplLogo.png" 
                alt="Bhopal Ashara Logo" 
                className="h-10 w-auto object-contain" 
              />
              <div className="hidden sm:block">
                <h1 className="text-sm font-heading font-bold text-emerald-dark leading-tight">Dawoodi Bohra</h1>
                <p className="text-xs text-gold font-medium">Jamat Bhopal</p>
              </div>
            </Link>

          
            <div className="relative w-full max-w-xs hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input
                type="search"
                placeholder="Search services, masjids..."
                className="w-full pl-9 pr-4 py-2 rounded-full bg-cream border border-emerald-dark/10 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              />
            </div>

            <div className="flex items-center gap-4 text-sm text-charcoal shrink-0">
              <div className="hidden lg:flex items-center gap-4">
                <a href="tel:+918982675004" className="flex items-center gap-1.5 hover:text-emerald-dark transition-colors">
                  <Phone size={14} className="text-gold" />
                  <span>+91 89826 75004</span>
                </a>
                <a href="mailto:info@asharaMubaraka.in" className="flex items-center gap-1.5 hover:text-emerald-dark transition-colors">
                  <Mail size={14} className="text-gold" />
                  <span>info@asharaMubaraka.in</span>
                </a>
              </div>

              
              <button
                className="md:hidden p-2 text-charcoal hover:text-emerald-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Navbar (Links) */}
        <nav className="bg-emerald-dark/95 backdrop-blur-md border-b border-gold/20 hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-1 py-1">
              {navItems.map((item) => {
                if (item.type === 'dropdown') {
                  return (
                    <li
                      key={item.label}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`relative px-4 py-3 text-sm font-medium transition-colors duration-300 group flex items-center gap-1.5 ${isDropdownOpen ? 'text-gold' : 'text-cream/80 hover:text-gold'
                          }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                        <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gold rounded-full transition-all duration-300 ${isDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'
                          }`} />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-0 top-full mt-1 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-dark/10 overflow-hidden z-50"
                          >
                            <div className="h-1 bg-gradient-to-r from-emerald-dark via-gold to-emerald-dark" />

                            <div className="p-2">
                              {dropdownItems.map((dropItem) => (
                                <button
                                  key={dropItem.href}
                                  onClick={() => handleDropdownItemClick(dropItem)}
                                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-emerald-dark/5 transition-all duration-200 group/item"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-emerald-dark/5 flex items-center justify-center shrink-0 group-hover/item:bg-gold/10 transition-colors">
                                    <dropItem.icon size={16} className="text-emerald-dark group-hover/item:text-gold transition-colors" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-charcoal group-hover/item:text-emerald-dark transition-colors flex items-center gap-1.5">
                                      {dropItem.label}
                                      {dropItem.external && (
                                        <span className="text-[8px] bg-green-500/10 text-green-600 px-1.5 py-0.5 rounded-full font-bold uppercase">WhatsApp</span>
                                      )}
                                    </p>
                                    <p className="text-[11px] text-charcoal/40 leading-tight">{dropItem.desc}</p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    {item.href.startsWith('/') && !item.href.includes('#') ? (
                      <Link
                        to={item.href}
                        className="relative px-4 py-3 text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300 group block"
                      >
                        {item.label}
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-full" />
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="relative px-4 py-3 text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300 group block"
                      >
                        {item.label}
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-full" />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>

      {/* Spacer to push content down since header is now fixed */}
      <div style={{ height: `${headerHeight}px` }} />

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-cream shadow-2xl z-[70] md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-emerald-dark/10">
                <span className="font-heading font-bold text-emerald-dark">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:text-emerald-dark"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-1 overflow-y-auto flex-1">
                {navItems.map((item) => {
                  if (item.type === 'dropdown') {
                    return (
                      <div key={item.label} className="py-1 border-b border-emerald-dark/5">
                        <button
                          onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                          className="w-full flex items-center justify-between text-base font-semibold text-emerald-dark py-2.5"
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isMobileDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-2 space-y-1 pb-2 mt-1">
                                {dropdownItems.map((dropItem) => (
                                  <button
                                    key={dropItem.href}
                                    onClick={() => handleDropdownItemClick(dropItem)}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-white transition-colors"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-emerald-dark/5 flex items-center justify-center shrink-0">
                                      <dropItem.icon size={14} className="text-emerald-dark" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-charcoal flex items-center gap-1.5">
                                        {dropItem.label}
                                        {dropItem.external && (
                                          <span className="text-[8px] bg-green-500/10 text-green-600 px-1.5 py-0.5 rounded-full font-bold">WA</span>
                                        )}
                                      </p>
                                      <p className="text-[10px] text-charcoal/40">{dropItem.desc}</p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return item.href.startsWith('/') && !item.href.includes('#') ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium text-charcoal hover:text-emerald-dark transition-colors py-2.5 border-b border-emerald-dark/5 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium text-charcoal hover:text-emerald-dark transition-colors py-2.5 border-b border-emerald-dark/5 last:border-0"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="p-6 bg-white/50 border-t border-emerald-dark/10">
                <div className="flex flex-col gap-4 text-sm text-charcoal">
                  <a href="tel:+918982675004" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-dark/10 flex items-center justify-center">
                      <Phone size={14} className="text-emerald-dark" />
                    </div>
                    <span>+91 89826 75004</span>
                  </a>
                  <a href="mailto:info@asharaMubaraka.in" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-dark/10 flex items-center justify-center">
                      <Mail size={14} className="text-emerald-dark" />
                    </div>
                    <span>info@asharaMubaraka.in</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
