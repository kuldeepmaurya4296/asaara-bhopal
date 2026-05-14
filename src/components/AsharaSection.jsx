import { CheckCircle, Navigation } from 'lucide-react';

const features = [
  'Accommodations',
  'Transport',
  'Relay Centre & Zones',
  'Volunteers & Community',
  'Instant Ashara Update'
];

export default function AsharaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-dark via-emerald-light to-emerald-dark relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="ashara-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ashara-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">About Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl text-cream mt-2 mb-4">Ashara Relay Centre</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left – Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <img
                src="/Ashara1447.jpg"
                alt="Ashara Mubaraka 1447H"
                className="w-full rounded-2xl shadow-xl object-contain border border-gold/20"
              />
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
            </div>
          </div>

          {/* Right – Text */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-cream/80 text-lg leading-relaxed">
              The Bhopal Ashara Mubaraka Relay Centre offers a comprehensive suite of services
              for mumineen, ensuring comfort, safety, and spiritual fulfillment throughout the
              blessed period of Ashara Mubaraka.
            </p>
            <p className="text-cream/60 leading-relaxed">
              Our dedicated team of volunteers works around the clock to provide world-class
              facilities including live relay of waaz Mubaraka, transportation, medical care,
              and much more.
            </p>

            <ul className="space-y-3 pt-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-cream/90">
                  <CheckCircle size={18} className="text-gold shrink-0" />
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="/relay-zones"
              className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-7 py-3 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-sm tracking-wide mt-4"
            >
              <Navigation size={16} />
              Explore Relay Zones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
