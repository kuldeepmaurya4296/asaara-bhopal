import { Phone, Mail, MapPin, Instagram, Twitter, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Ashara', href: '#relay' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <div className="bg-charcoal relative overflow-hidden">
      {/* Islamic pattern top border */}
      <div className="h-1 bg-gradient-to-r from-emerald-dark via-gold to-emerald-dark" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 – Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-dark flex items-center justify-center border border-gold/30">
                <span className="text-gold font-heading text-xl font-bold">B</span>
              </div>
              <div>
                <h3 className="font-heading text-lg text-cream font-semibold">Bhopal Ashara</h3>
                <p className="text-gold text-xs font-medium">Mubarak Relay Centre</p>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              Premium Islamic event management and live relay platform serving the community 
              during the sacred period of Ashara Mubarak.
            </p>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h4 className="font-heading text-base text-cream font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact & Social */}
          <div>
            <h4 className="font-heading text-base text-cream font-semibold mb-5">Contact Us</h4>
            <div className="space-y-3 text-sm text-cream/50 mb-6">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                +91-9876543210
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                info@asharamubarak.in
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                Iqbal Maidan, Bhopal, Madhya Pradesh, India
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream/50 hover:bg-gold/20 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Bhopal Ashara Mubarak Relay Centre. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Built with ❤️ for the community
          </p>
        </div>
      </div>
    </div>
  );
}
