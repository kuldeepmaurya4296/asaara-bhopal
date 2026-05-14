import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Train, Plane, Car, Bus, Bike, Smartphone, Globe, Zap,
  MapPin, Phone, Clock, Info, ChevronRight, ExternalLink, Navigation
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { transportData } from '../data/transport';

const iconMap = { Train, Plane, Car, Bus, Bike, Smartphone, Globe, Zap };

const sectionTabs = [
  { key: 'railway', label: 'Railway', icon: Train },
  { key: 'airlines', label: 'Airlines', icon: Plane },
  { key: 'road', label: 'By Road', icon: Car },
  { key: 'cityTransport', label: 'City Transport', icon: Bus },
];

export default function TransportPage() {
  const [activeSection, setActiveSection] = useState('railway');

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <SEO title="Transport" description="Complete guide to reaching Bhopal and getting around the city during Ashara Mubaraka." />
      <Header />
      <PageHero
        title="Transport Guide"
        subtitle="Complete guide to reaching Bhopal via rail, air & road — plus city transport options"
        icon={Navigation}
        breadcrumbs={[{ label: 'Transport' }]}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Section Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {sectionTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeSection === tab.key
                  ? 'bg-emerald-dark text-gold border-emerald-dark shadow-lg shadow-emerald-dark/20'
                  : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-emerald-dark/30 hover:text-emerald-dark'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Railway Section */}
        {activeSection === 'railway' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <SectionHeader icon={Train} label="Railway" title={transportData.railway.title} description={transportData.railway.description} />

            {/* Stations */}
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {transportData.railway.stations.map((station) => (
                <div key={station.name} className="bg-white rounded-2xl p-6 border border-emerald-dark/5 shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="font-heading text-lg font-bold text-emerald-dark mb-2">{station.name}</h3>
                  <p className="text-xs text-charcoal/50 mb-4 leading-relaxed">{station.description}</p>
                  <div className="space-y-2 mb-4">
                    <InfoRow icon={MapPin} text={station.address} />
                    <InfoRow icon={Phone} text={`Enquiry: ${station.phone}`} />
                    <InfoRow icon={Info} text={`Helpline: ${station.helpline}`} />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-emerald-dark/10 h-48">
                    <iframe src={station.mapEmbed} className="w-full h-full" allowFullScreen loading="lazy" title={station.name} style={{ border: 0 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Key Trains */}
            <h3 className="font-heading text-xl text-emerald-dark mb-4">Key Trains to Bhopal</h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-emerald-dark/5 shadow-sm mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-emerald-dark/5">
                      <th className="text-left px-5 py-3 font-heading text-xs text-emerald-dark">Train Name</th>
                      <th className="text-left px-5 py-3 font-heading text-xs text-emerald-dark">Number</th>
                      <th className="text-left px-5 py-3 font-heading text-xs text-emerald-dark">Route</th>
                      <th className="text-left px-5 py-3 font-heading text-xs text-emerald-dark">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transportData.railway.keyTrains.map((t) => (
                      <tr key={t.number} className="border-t border-charcoal/5 hover:bg-cream/50 transition-colors">
                        <td className="px-5 py-3 font-semibold text-charcoal">{t.name}</td>
                        <td className="px-5 py-3 text-gold font-mono text-xs">{t.number}</td>
                        <td className="px-5 py-3 text-charcoal/60">{t.route}</td>
                        <td className="px-5 py-3 text-charcoal/60">{t.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Airlines Section */}
        {activeSection === 'airlines' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <SectionHeader icon={Plane} label="Airlines" title={transportData.airlines.title} description={transportData.airlines.description} />

            <div className="grid lg:grid-cols-5 gap-6 mb-10">
              <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-emerald-dark/5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-emerald-dark mb-2">{transportData.airlines.airport.name}</h3>
                <p className="text-xs text-charcoal/50 mb-4 leading-relaxed">{transportData.airlines.airport.description}</p>
                <div className="space-y-2 mb-4">
                  <InfoRow icon={MapPin} text={transportData.airlines.airport.address} />
                  <InfoRow icon={Phone} text={transportData.airlines.airport.phone} />
                  <InfoRow icon={Navigation} text={transportData.airlines.airport.distanceFromCity} />
                </div>
                <h4 className="font-heading text-sm font-semibold text-emerald-dark mb-3">Airlines Operating</h4>
                <div className="space-y-2">
                  {transportData.airlines.airlines.map((a) => (
                    <div key={a.name} className="flex items-center gap-3 px-4 py-2.5 bg-cream rounded-xl">
                      <Plane size={14} className="text-gold shrink-0" />
                      <span className="font-semibold text-sm text-charcoal">{a.name}</span>
                      <span className="text-xs text-charcoal/50 ml-auto">{a.routes}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-emerald-dark/10 shadow-sm h-64 lg:h-auto">
                <iframe src={transportData.airlines.airport.mapEmbed} className="w-full h-full" allowFullScreen loading="lazy" title="Raja Bhoj Airport" style={{ border: 0 }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Road Section */}
        {activeSection === 'road' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <SectionHeader icon={Car} label="Road" title={transportData.road.title} description={transportData.road.description} />

            {/* Highways */}
            <h3 className="font-heading text-lg text-emerald-dark mb-4">National Highways</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {transportData.road.highways.map((hw) => (
                <div key={hw.name} className="bg-white rounded-xl p-5 border border-emerald-dark/5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                    <Car size={18} className="text-gold" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-emerald-dark mb-1">{hw.name}</h4>
                  <p className="text-xs text-charcoal/50">{hw.description}</p>
                </div>
              ))}
            </div>

            {/* Bus Terminals */}
            <h3 className="font-heading text-lg text-emerald-dark mb-4">Bus Terminals</h3>
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {transportData.road.busTerminals.map((bt) => (
                <div key={bt.name} className="bg-white rounded-2xl p-6 border border-emerald-dark/5 shadow-sm">
                  <h4 className="font-heading text-lg font-bold text-emerald-dark mb-2">{bt.name}</h4>
                  <p className="text-xs text-charcoal/50 mb-3">{bt.description}</p>
                  <div className="space-y-2 mb-4">
                    <InfoRow icon={MapPin} text={bt.address} />
                    <InfoRow icon={Phone} text={bt.phone} />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-emerald-dark/10 h-40">
                    <iframe src={bt.mapEmbed} className="w-full h-full" allowFullScreen loading="lazy" title={bt.name} style={{ border: 0 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Distances */}
            <h3 className="font-heading text-lg text-emerald-dark mb-4">Distance from Major Cities</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {transportData.road.distances.map((d) => (
                <div key={d.city} className="bg-white rounded-xl p-5 border border-emerald-dark/5 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-dark flex items-center justify-center shrink-0">
                    <span className="text-gold font-heading font-bold text-sm">{d.city.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-emerald-dark">{d.city}</h4>
                    <p className="text-xs text-charcoal/50">{d.distance} • {d.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* City Transport Section */}
        {activeSection === 'cityTransport' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <SectionHeader icon={Bus} label="City" title={transportData.cityTransport.title} description={transportData.cityTransport.description} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportData.cityTransport.modes.map((mode, i) => {
                const ModeIcon = iconMap[mode.icon] || Bus;
                return (
                  <motion.div
                    key={mode.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-2xl p-6 border border-emerald-dark/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-dark/5 flex items-center justify-center mb-4">
                      <ModeIcon size={22} className="text-emerald-dark" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-emerald-dark mb-2">{mode.name}</h3>
                    <p className="text-xs text-charcoal/50 mb-4 leading-relaxed">{mode.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-gold">Fare:</span>
                        <span className="text-charcoal/60">{mode.fare}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Clock size={12} className="text-gold" />
                        <span className="text-charcoal/60">{mode.availability}</span>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-cream rounded-xl">
                      <p className="text-[10px] text-charcoal/50 leading-relaxed">
                        <span className="font-semibold text-emerald-dark">💡 Tip:</span> {mode.tips}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </main>

      <footer id="footer"><Footer /></footer>
    </div>
  );
}

/* ── Sub-Components ── */

function SectionHeader({ icon: Icon, label, title, description }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-1">
        <Icon size={14} className="text-gold" />
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">{label}</span>
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl text-emerald-dark mb-2">{title}</h2>
      <div className="w-16 h-1 bg-gold rounded-full mb-3" />
      <p className="text-sm text-charcoal/60 max-w-2xl">{description}</p>
    </div>
  );
}

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-start gap-2 text-xs text-charcoal/60">
      <Icon size={13} className="text-gold shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}
