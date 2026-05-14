import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, User, Users, ChevronDown, ChevronUp, Layers } from 'lucide-react';
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

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Zone Selector Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {relayZones.map((z) => {
            const zc = zoneColors[z.color] || zoneColors.emerald;
            const isActive = activeZone === z.id;
            return (
              <button
                key={z.id}
                onClick={() => { setActiveZone(z.id); setExpandedCentre(null); }}
                className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                  isActive
                    ? `${zc.bg} text-white border-transparent shadow-xl scale-[1.02]`
                    : `bg-white ${zc.border} hover:shadow-md hover:-translate-y-0.5`
                }`}
              >
                <div className={`text-xs tracking-[0.2em] uppercase font-bold mb-1 ${isActive ? 'text-gold' : zc.text}`}>
                  {z.name}
                </div>
                <h3 className={`font-heading text-lg font-bold mb-1 ${isActive ? 'text-white' : 'text-charcoal'}`}>
                  {z.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isActive ? 'text-white/70' : 'text-charcoal/50'}`}>
                  {z.relayCentres.length} Relay Centres
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Zone Content */}
        <AnimatePresence mode="wait">
          {zone && (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Zone Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <Layers size={14} className="text-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">{zone.name}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl text-emerald-dark mb-2">{zone.title}</h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-3" />
                <p className="text-sm text-charcoal/60 max-w-2xl">{zone.description}</p>
              </div>

              {/* Relay Centres */}
              <div className="space-y-4">
                {zone.relayCentres.map((centre, i) => (
                  <motion.div
                    key={centre.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-2xl border border-emerald-dark/5 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedCentre(expandedCentre === centre.name ? null : centre.name)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center shrink-0`}>
                            <MapPin size={20} className={colors.text} />
                          </div>
                          <div>
                            <h3 className="font-heading text-base font-bold text-emerald-dark mb-1">{centre.name}</h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-charcoal/50">
                              <span className="flex items-center gap-1"><MapPin size={11} className="text-gold" />{centre.location}</span>
                              <span className="flex items-center gap-1"><Phone size={11} className="text-gold" />{centre.contact}</span>
                              {centre.capacity && (
                                <span className="flex items-center gap-1"><Users size={11} className="text-gold" />Capacity: {centre.capacity}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <button className="p-2 text-charcoal/30 hover:text-emerald-dark transition-colors shrink-0">
                          {expandedCentre === centre.name ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expandedCentre === centre.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-emerald-dark/5 pt-4">
                            <div className="grid lg:grid-cols-2 gap-6">
                              {/* Coordinator Info */}
                              <div className="bg-cream rounded-xl p-5">
                                <h4 className="font-heading text-sm font-semibold text-emerald-dark mb-3 flex items-center gap-2">
                                  <User size={14} className="text-gold" /> Zone Coordinator
                                </h4>
                                <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 rounded-full bg-emerald-dark flex items-center justify-center">
                                    <span className="text-gold font-heading font-bold text-lg">{centre.coordinator.charAt(0)}</span>
                                  </div>
                                  <div>
                                    <p className="font-semibold text-sm text-charcoal">{centre.coordinator}</p>
                                    <a href={`tel:${centre.coordinatorPhone}`} className="text-xs text-gold hover:text-emerald-dark transition-colors flex items-center gap-1">
                                      <Phone size={11} />{centre.coordinatorPhone}
                                    </a>
                                  </div>
                                </div>
                              </div>

                              {/* Map */}
                              <div className="rounded-xl overflow-hidden border border-emerald-dark/10 h-48 lg:h-auto">
                                <iframe
                                  src={centre.mapEmbed}
                                  className="w-full h-full min-h-[192px]"
                                  allowFullScreen
                                  loading="lazy"
                                  title={centre.name}
                                  style={{ border: 0 }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer id="footer"><Footer /></footer>
    </div>
  );
}
