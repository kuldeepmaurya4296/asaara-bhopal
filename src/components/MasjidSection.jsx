import { MapPin, Phone, ExternalLink } from 'lucide-react';

const masjids = [
  {
    name: 'Tajul Masajid',
    desc: 'One of the largest mosques in Asia, a historical landmark of Bhopal with magnificent architecture.',
    address: 'Kohefiza, Bhopal, MP 462001',
    phone: '+91-9876543211',
    mapLink: 'https://maps.google.com/?q=Tajul+Masajid+Bhopal',
    color: 'from-emerald-dark to-emerald-light',
  },
  {
    name: 'Saifee Masjid',
    desc: 'Renowned for its vibrant community services and beautiful interiors.',
    address: 'Nawab Siddiqui Road, Bhopal',
    phone: '+91-9876543212',
    mapLink: 'https://maps.google.com/?q=Saifee+Masjid+Bhopal',
    color: 'from-charcoal to-charcoal-light',
  },
  {
    name: 'Moti Masjid',
    desc: 'Iconic pearl mosque near the lake, built in the style of Delhi\'s Jama Masjid.',
    address: 'Hawai Mahal, Bhopal, MP 462001',
    phone: '+91-9876543213',
    mapLink: 'https://maps.google.com/?q=Moti+Masjid+Bhopal',
    color: 'from-emerald-light to-emerald-dark',
  },
  {
    name: 'Iqbal Maidan Masjid',
    desc: 'Central mosque with spacious prayer hall serving the Iqbal Maidan community.',
    address: 'Iqbal Maidan, Bhopal, MP',
    phone: '+91-9876543214',
    mapLink: 'https://maps.google.com/?q=Iqbal+Maidan+Bhopal',
    color: 'from-charcoal-light to-charcoal',
  },
];

export default function MasjidSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Holy Places</span>
          <h2 className="font-heading text-3xl sm:text-4xl text-emerald-dark mt-2 mb-4">Masjids in Bhopal</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {masjids.map((m, i) => (
            <div
              key={m.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-dark/5"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Color Header */}
              <div className={`h-40 bg-gradient-to-br ${m.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-gold/30 flex items-center justify-center">
                    <span className="font-heading text-2xl text-gold font-bold">{m.name.charAt(0)}</span>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold/10" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg text-emerald-dark font-semibold mb-2">{m.name}</h3>
                <p className="text-sm text-charcoal/60 mb-4 leading-relaxed">{m.desc}</p>

                <div className="space-y-2 text-sm text-charcoal/70 mb-4">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                    {m.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-gold shrink-0" />
                    {m.phone}
                  </p>
                </div>

                <a
                  href={m.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-dark hover:text-gold transition-colors duration-300 group/link"
                >
                  <ExternalLink size={14} />
                  View on Map
                  <span className="block w-0 group-hover/link:w-4 h-px bg-gold transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
