import { useState } from 'react';
import { Phone, Mail, Search, Menu, X, Megaphone } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const announcements = [
  "✦ Ashara Mubarak 1448H – Live Relay Active ✦",
  "✦ Emergency Support Available 24/7 ✦",
  "✦ Waaz Timing Updated – Check Schedule ✦",
  "✦ Volunteer Registration Now Open ✦",
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Ashara', href: '/#relay' },
  { label: 'Live Relay', href: '/#countdown' },
  { label: 'Masjid in Bhopal', href: '/#masjids' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 flex flex-col shadow-md"
      >
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
        <div className="bg-white/95 backdrop-blur-md border-b border-emerald-dark/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
            {/* Left – Logo / Title */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-emerald-dark flex items-center justify-center">
                <span className="text-gold font-heading text-lg font-bold">B</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-heading font-bold text-emerald-dark leading-tight">Bhopal Ashara</h1>
                <p className="text-xs text-gold font-medium">Relay Centre</p>
              </div>
            </Link>

            {/* Center – Search */}
            <div className="relative w-full max-w-xs hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input
                type="search"
                placeholder="Search services, masjids..."
                className="w-full pl-9 pr-4 py-2 rounded-full bg-cream border border-emerald-dark/10 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              />
            </div>

            {/* Right – Contact & Mobile Menu Toggle */}
            <div className="flex items-center gap-4 text-sm text-charcoal shrink-0">
              <div className="hidden lg:flex items-center gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-emerald-dark transition-colors">
                  <Phone size={14} className="text-gold" />
                  <span>+91-9876543210</span>
                </a>
                <a href="mailto:info@asharamubarak.in" className="flex items-center gap-1.5 hover:text-emerald-dark transition-colors">
                  <Mail size={14} className="text-gold" />
                  <span>info@asharamubarak.in</span>
                </a>
              </div>

              {/* Hamburger Button */}
              <button 
                className="md:hidden p-2 text-charcoal hover:text-emerald-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navbar (Links) */}
        <nav className="bg-emerald-dark/95 backdrop-blur-md border-b border-gold/20 hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-1 py-1">
              {navItems.map((item) => (
                <li key={item.href}>
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
              ))}
            </ul>
          </div>
        </nav>
      </motion.div>

      {/* Spacer to push content down since header is now fixed */}
      <div className="h-[104px] md:h-[148px]" />

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
              className="fixed top-0 right-0 h-full w-2/3 bg-cream shadow-2xl z-[70] md:hidden flex flex-col"
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

              <div className="flex flex-col p-6 gap-6 overflow-y-auto">
                {navItems.map((item) => (
                  item.href.startsWith('/') && !item.href.includes('#') ? (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-charcoal hover:text-emerald-dark transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-charcoal hover:text-emerald-dark transition-colors"
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>

              <div className="mt-auto p-6 bg-white/50 border-t border-emerald-dark/10">
                <div className="flex flex-col gap-4 text-sm text-charcoal">
                  <a href="tel:+919876543210" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-dark/10 flex items-center justify-center">
                      <Phone size={14} className="text-emerald-dark" />
                    </div>
                    <span>+91-9876543210</span>
                  </a>
                  <a href="mailto:info@asharamubarak.in" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-dark/10 flex items-center justify-center">
                      <Mail size={14} className="text-emerald-dark" />
                    </div>
                    <span>info@asharamubarak.in</span>
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
