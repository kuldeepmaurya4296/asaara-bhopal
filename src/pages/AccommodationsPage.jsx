import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Phone, ExternalLink, ChevronDown, ChevronUp, Wifi, Car, Dumbbell, UtensilsCrossed, Hotel } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { accommodations } from '../data/accommodations';

const starFilters = [
  { label: 'All Hotels', value: null },
  { label: '5 Star', value: 5 },
  { label: '4 Star', value: 4 },
  { label: '3 Star', value: 3 },
  { label: '2 Star', value: 2 },
];

export default function AccommodationsPage() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const filtered = activeFilter
    ? accommodations.filter((h) => h.stars === activeFilter)
    : accommodations;

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <SEO title="Accommodations" description="Find the best hotels and accommodations in Bhopal for Ashara Mubaraka – from luxury 5-star to budget stays." />
      <Header />
      <PageHero
        title="Accommodations"
        subtitle="Find the perfect stay in Bhopal during Ashara Mubaraka – from luxury resorts to budget-friendly hotels"
        icon={Hotel}
        breadcrumbs={[{ label: 'Accommodations' }]}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Star Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {starFilters.map((f) => (
            <button
              key={f.label}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeFilter === f.value
                ? 'bg-gold text-emerald-dark border-gold shadow-lg shadow-gold/20'
                : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50 hover:text-emerald-dark'
                }`}
            >
              {f.value && (
                <span className="inline-flex items-center gap-1 mr-1">
                  {Array.from({ length: f.value }).map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </span>
              )}
              {f.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-charcoal/50 mb-6">
          Showing <span className="font-semibold text-emerald-dark">{filtered.length}</span> hotels
        </p>

        {/* Hotel Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((hotel, i) => (
              <motion.div
                key={hotel.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-emerald-dark/5 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-emerald-dark/90 backdrop-blur-sm text-gold px-3 py-1.5 rounded-full text-xs font-semibold">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" />
                    ))}
                  </div>
                  {/* <div className="absolute top-3 right-3 bg-gold/90 backdrop-blur-sm text-emerald-dark px-3 py-1.5 rounded-full text-xs font-bold">
                    {hotel.priceRange}
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-heading text-lg font-bold text-emerald-dark mb-1">{hotel.name}</h3>
                  <p className="text-xs text-charcoal/50 mb-3 leading-relaxed">{hotel.description}</p>

                  <div className="flex items-start gap-2 text-xs text-charcoal/60 mb-2">
                    <MapPin size={13} className="text-gold shrink-0 mt-0.5" />
                    <span>{hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal/60 mb-3">
                    <Phone size={13} className="text-gold shrink-0" />
                    <a href={`tel:${hotel.phone}`} className="hover:text-emerald-dark transition-colors">{hotel.phone}</a>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {hotel.amenities.slice(0, 4).map((a) => (
                      <span key={a} className="px-2.5 py-1 bg-cream rounded-full text-[10px] font-medium text-charcoal/60">
                        {a}
                      </span>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="px-2.5 py-1 bg-emerald-dark/5 rounded-full text-[10px] font-medium text-emerald-dark">
                        +{hotel.amenities.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-2">
                    <button
                      onClick={() => setExpandedCard(expandedCard === hotel.id ? null : hotel.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-emerald-dark/5 text-emerald-dark rounded-xl text-xs font-semibold hover:bg-emerald-dark/10 transition-colors"
                    >
                      <MapPin size={13} />
                      {expandedCard === hotel.id ? 'Hide Map' : 'View Map'}
                      {expandedCard === hotel.id ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    </button>
                    <a
                      href={hotel.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-gold text-emerald-dark rounded-xl text-xs font-bold hover:bg-gold-light transition-colors"
                    >
                      Enquire Now <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                {/* Expandable Map */}
                <AnimatePresence>
                  {expandedCard === hotel.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 200, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-emerald-dark/5"
                    >
                      <iframe
                        src={hotel.mapEmbed}
                        className="w-full h-[200px]"
                        allowFullScreen
                        loading="lazy"
                        title={`${hotel.name} map`}
                        style={{ border: 0 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <footer id="footer"><Footer /></footer>
    </div>
  );
}
