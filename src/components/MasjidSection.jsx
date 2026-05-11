import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { masjids } from '../data/masjids';

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
              key={m.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-dark/5 flex flex-col h-full"
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
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-lg text-emerald-dark font-semibold mb-2">{m.name}</h3>
                <p className="text-sm text-charcoal/60 mb-4 leading-relaxed flex-1">{m.desc}</p>

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

                <div className="flex items-center justify-between">
                  <Link
                    to={`/masjid/${m.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-dark hover:text-gold transition-colors duration-300 group/link"
                  >
                    View Details
                    <span className="block w-0 group-hover/link:w-4 h-px bg-gold transition-all duration-300" />
                  </Link>
                  <a
                    href={m.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/40 hover:text-gold transition-colors flex items-center gap-2"
                    aria-label="View on Map"
                  >
                    Map <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
