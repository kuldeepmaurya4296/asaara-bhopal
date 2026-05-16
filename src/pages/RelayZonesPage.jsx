import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, User, Users, ChevronDown, ChevronUp, ChevronRight, Layers, Hotel, Bus, ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { relayZones } from '../data/relayZones';

const zoneColors = {
  emerald: { bg: 'bg-emerald-dark', text: 'text-emerald-dark', light: 'bg-emerald-dark/5', border: 'border-emerald-dark/20' },
  gold: { bg: 'bg-gold', text: 'text-gold', light: 'bg-gold/10', border: 'border-gold/30' },
  'emerald-light': { bg: 'bg-emerald-light', text: 'text-emerald-light', light: 'bg-emerald-light/10', border: 'border-emerald-light/20' },
  charcoal: { bg: 'bg-charcoal', text: 'text-charcoal', light: 'bg-charcoal/5', border: 'border-charcoal/20' },
};

export default function RelayZonesPage() {
  const [activeZone, setActiveZone] = useState('zone-a');
  const [expandedCentre, setExpandedCentre] = useState(null);
  const mainRef = useRef(null);

  const scrollToTop = (behavior = 'smooth') => {
    if (mainRef.current) {
      const headerOffset = window.innerWidth >= 768 ? 93 : 40;
      const elementPosition = mainRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior
      });
    }
  };

  const handleZoneChange = (zoneId) => {
    if (activeZone === zoneId) {
      scrollToTop('smooth');
      return;
    }
    setActiveZone(zoneId);
    setExpandedCentre(null);
  };

  const zone = relayZones.find((z) => z.id === activeZone);
  const colors = zoneColors[zone?.color] || zoneColors.emerald;

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <SEO title="Relay Centre & Zones" description="Explore Ashara Mubaraka relay centres across 4 zones in Bhopal with locations, contacts, and coordinators." />
      <Header />
      <PageHero
        title="Relay Centre & Zones"
        subtitle="4 zones across Bhopal — each with dedicated relay centres for seamless Ashara Mubaraka experience"
        icon={Layers}
        breadcrumbs={[{ label: 'Relay Centre & Zones' }]}
      />

      <main ref={mainRef} className="max-w-7xl mx-auto px-4 py-8">


        {/* Zone Selector Cards */}
        <div className="sticky top-[40px] md:top-[93px] z-30 bg-cream/95 backdrop-blur-md py-4 -mx-4 px-4 mb-8 border-b border-emerald-dark/5">
          <div className="flex overflow-x-auto gap-3 snap-x pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {relayZones.map((z) => {
              const zc = zoneColors[z.color] || zoneColors.emerald;
              const isActive = activeZone === z.id;
              return (
                <button
                  key={z.id}
                  onClick={() => handleZoneChange(z.id)}
                  className={`text-left shrink-0 w-[240px] lg:w-auto lg:flex-1 p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 snap-start ${isActive
                    ? `${zc.bg} text-white border-transparent shadow-xl scale-[1.02]`
                    : `bg-white ${zc.border} hover:shadow-md hover:-translate-y-0.5`
                    }`}
                >
                  <div className={`text-xs tracking-[0.2em] uppercase font-bold mb-4 ${isActive ? (z.color === 'gold' ? 'text-white' : 'text-gold') : zc.text}`}>
                    {z.name}
                  </div>
                  <h3 className={`font-kanz text-5xl font-bold mb-6 mt-2 leading-none ${isActive ? 'text-white' : 'text-charcoal'}`}>
                    {z.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isActive ? 'text-white/70' : 'text-charcoal/50'}`}>
                    {z.capacity}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Zone Content */}
        <AnimatePresence mode="wait" onExitComplete={() => scrollToTop('auto')}>
          {zone && (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Zone Header */}
              <div className="mb-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Layers size={14} className="text-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">{zone.name}</span>
                </div>
                <h2 className="font-kanz text-4xl sm:text-7xl text-emerald-dark my-4">{zone.title}</h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-4" />
                {zone.description && (
                  <p className="text-sm text-charcoal/60 max-w-2xl mx-auto">{zone.description}</p>
                )}
              </div>

              {/* Data Tables */}
              {zone.tables && zone.tables.map((table, tIndex) => (
                <div key={tIndex} className={`bg-white rounded-2xl shadow-sm overflow-hidden mt-8 border-2 ${colors.border.replace(/\/[0-9]+/, '')} `}>
                  {table.title && (
                    <div className={`px-6 py-4 border-b ${colors.border} ${colors.bg}`}>
                      <h3 className="font-heading font-semibold text-white">{table.title}</h3>
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className={colors.bg}>
                          {table.headers && table.headers.map((header, i) => (
                            <th key={i} className={`border ${colors.border} py-3 px-5 font-heading font-semibold text-white text-sm tracking-wider uppercase`}>
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.data && table.data.map((row, index) => (
                          <tr key={index} className="hover:bg-cream/50 transition-colors">
                            <td className={`border ${colors.border} py-3 px-5 text-sm font-medium text-charcoal`}>{row.particulars}</td>
                            <td className={`border ${colors.border} py-3 px-5 text-sm text-charcoal/80`}>{row.details}</td>
                            <td className={`border ${colors.border} py-3 px-5 text-sm text-charcoal/60`}>{row.remarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 gap-6 mt-16 border-t border-emerald-dark/10 pt-12">
          {/* Accommodation Link */}
          <Link
            to="/accommodations"
            target='_blank'
            className="block bg-white rounded-2xl border border-emerald-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
          >
            <div className="h-1.5 bg-gradient-to-r from-emerald-dark via-gold to-emerald-dark" />
            <div className="p-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-dark/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Hotel size={24} className="text-emerald-dark group-hover:text-gold transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-bold text-emerald-dark mb-1 flex items-center gap-2">
                    Accommodations
                    <ArrowRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-xs text-charcoal/50 leading-relaxed mb-4">
                    Find luxury 5-star resorts and comfortable budget stays for Ashara Mubaraka.
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="bg-cream rounded-lg px-3 py-2">
                      <p className="font-heading text-xl font-bold text-emerald-dark">18+</p>
                      <p className="text-[9px] text-charcoal/40 uppercase tracking-wider">Hotels Listed</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-gold font-semibold group-hover:underline">
                      Explore <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Transport Link */}
          <Link
            to="/transport"
            target='_blank'
            className="block bg-white rounded-2xl border border-emerald-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
          >
            <div className="h-1.5 bg-gradient-to-r from-emerald-dark via-gold to-emerald-dark" />
            <div className="p-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-dark/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Bus size={24} className="text-emerald-dark group-hover:text-gold transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-bold text-emerald-dark mb-1 flex items-center gap-2">
                    Transport Guide
                    <ArrowRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-xs text-charcoal/50 leading-relaxed mb-4">
                    Complete guide to reaching Bhopal via rail, air, road and city transport options.
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="bg-cream rounded-lg px-3 py-2">
                      <p className="font-heading text-xl font-bold text-emerald-dark">4</p>
                      <p className="text-[9px] text-charcoal/40 uppercase tracking-wider">Transport Modes</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-gold font-semibold group-hover:underline">
                      Explore <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="my-4">
          <Link
            to="/relay-araz-copy"
            state={{ tab: 'where' }}
            className="inline-flex items-center gap-2 text-emerald-dark hover:text-gold transition-colors font-medium bg-emerald-dark/5 hover:bg-emerald-dark/10 px-4 py-2 rounded-full text-sm"
          >
            <ArrowLeft size={16} />
            Back to Where & How
          </Link>
        </div>
      </main>

      {/* <footer id="footer"><Footer /></footer> */}
    </div>
  );
}
