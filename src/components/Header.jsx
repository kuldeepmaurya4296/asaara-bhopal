import { Phone, Mail, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-dark/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
        {/* Left – Logo / Title */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-emerald-dark flex items-center justify-center">
            <span className="text-gold font-heading text-lg font-bold">B</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-heading font-bold text-emerald-dark leading-tight">Bhopal Ashara</h1>
            <p className="text-xs text-gold font-medium">Relay Centre</p>
          </div>
        </a>

        {/* Center – Search */}
        <div className="relative w-full max-w-xs hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
          <input
            type="search"
            placeholder="Search services, masjids..."
            className="w-full pl-9 pr-4 py-2 rounded-full bg-cream border border-emerald-dark/10 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          />
        </div>

        {/* Right – Contact */}
        <div className="flex items-center gap-4 text-sm text-charcoal shrink-0">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-emerald-dark transition-colors">
            <Phone size={14} className="text-gold" />
            <span className="hidden lg:inline">+91-9876543210</span>
          </a>
          <a href="mailto:info@asharamubarak.in" className="flex items-center gap-1.5 hover:text-emerald-dark transition-colors">
            <Mail size={14} className="text-gold" />
            <span className="hidden lg:inline">info@asharamubarak.in</span>
          </a>
        </div>
      </div>
    </header>
  );
}
