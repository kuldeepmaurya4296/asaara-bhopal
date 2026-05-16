import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen, MapPin, Clock, ChevronRight, ChevronDown, ChevronUp,
  Star, Camera, Hotel, Bus, Layers, Users, Heart, Compass,
  Calendar, Globe, ArrowRight, Sparkles, ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import FadeIn from '../components/animations/FadeIn';
import { relayArazCopyData } from '../data/relayArazCopy';

const iconMap = { Hotel, Bus, Layers, Users };

const tabs = [
  { key: 'whatWhen', arabicLabel: 'ماهي   و  متى هي', englishLabel: 'What & When', icon: BookOpen },
  { key: 'why', arabicLabel: 'لماذا هي', englishLabel: 'Why Bhopal', icon: Star },
  { key: 'where', arabicLabel: 'كيف ما هي  و اينما هي ', englishLabel: 'Where and How', icon: MapPin },
];

const categoryColors = {
  Heritage: 'bg-gold/20 text-gold',
  Nature: 'bg-emerald-dark/10 text-emerald-dark',
  Culture: 'bg-purple-100 text-purple-700',
};

export default function RelayArazCopyPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || 'whatWhen');
  const mainRef = useRef(null);

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  const scrollToTop = (behavior = 'smooth') => {
    if (mainRef.current) {
      // Account for the fixed header height (approx 93px desktop, 40px mobile)
      const headerOffset = window.innerWidth >= 768 ? 93 : 40;
      const elementPosition = mainRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior
      });
    }
  };

  const handleTabChange = (tabKey) => {
    if (activeTab === tabKey) {
      scrollToTop('smooth');
      return;
    }
    setActiveTab(tabKey);
  };
  const [expandedSafar, setExpandedSafar] = useState(null);
  const [expandedPlace, setExpandedPlace] = useState(null);
  const { seo, hero, whatWhen, whyBhopal, whereContent } = relayArazCopyData;

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <SEO title={seo.title} description={seo.description} />
      <Header />
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        icon={Compass}
        breadcrumbs={[{ label: 'Relay Araz' }]}
      />

      <main ref={mainRef} className="max-w-7xl mx-auto px-4 py-12">
        {/* ── Section Tabs ── */}
        <div className="flex flex-wrap gap-3 mb-12 sticky z-30 bg-cream/95 backdrop-blur-md py-4 -mx-4 px-4 border-b border-emerald-dark/5 transition-all duration-300 top-[40px] md:top-[93px] justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border ${activeTab === tab.key
                ? 'bg-emerald-dark text-gold border-emerald-dark shadow-lg shadow-emerald-dark/20'
                : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-emerald-dark/30 hover:text-emerald-dark'
                }`}
            >
              <tab.icon size={22} className="shrink-0" />
              <div className="flex flex-col items-center gap-2">
                <span className="font-kanz text-xl sm:text-2xl pt-1 leading-none">{tab.arabicLabel}</span>
                <span className="font-heading text-xs sm:text-sm uppercase tracking-widest opacity-80 leading-none">{tab.englishLabel}</span>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" onExitComplete={() => scrollToTop('auto')}>
          {/* ═══════════════════════════════════════════════════════════════════
              WHAT & WHEN TAB
          ═══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'whatWhen' ? (
            <motion.div
              key="whatWhen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeader
                icon={BookOpen}
                label={whatWhen.sectionTitle}
                title={whatWhen.sectionSubtitle}
              />

              {/* Main Story Card */}
              <div className="relative bg-gradient-to-br from-emerald-dark via-emerald-light to-emerald-dark rounded-3xl overflow-hidden mb-16">
                <PatternOverlay />
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold/5 pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

                <div className="relative z-10 p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
                  {/* Image */}
                  <div className="lg:w-5/12">
                    <div className="relative">
                      <img
                        src={whatWhen.mainStory.image}
                        alt={whatWhen.mainStory.name}
                        className="w-full h-auto rounded-2xl shadow-2xl border border-gold/20"
                      />
                      <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:w-7/12 space-y-5">
                    <div className="text-right">
                      <span className="block text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                        The Sacred Legacy
                      </span>
                      <h2 className="font-kanz text-2xl sm:text-4xl text-cream mt-1 mb-1 leading-relaxed">
                        {whatWhen.mainStory.name}
                      </h2>
                      <p className="text-gold/80 text-sm font-medium">{whatWhen.mainStory.title}</p>
                      <div className="w-16 h-1 bg-gold rounded-full mt-3 ml-auto" />
                    </div>
                    {whatWhen.mainStory.paragraphs.map((p, i) => (
                      <p key={i} className="text-cream/80 text-sm leading-relaxed ">{p}</p>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="relative z-10 px-8 sm:px-12 pb-8 sm:pb-12">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {whatWhen.mainStory.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                      >
                        <p className="font-heading text-2xl text-gold font-bold">{h.value}</p>
                        <p className="text-cream/60 text-[10px] uppercase tracking-wider mt-1">{h.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


            </motion.div>
          ) : activeTab === 'why' ? (
            <motion.div
              key="why"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Intro Banner */}
              <div className="relative bg-gradient-to-r from-emerald-dark to-emerald-light rounded-2xl p-8 sm:p-10 mb-12 overflow-hidden">
                <PatternOverlay />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/10 pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
                  {/* <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Sacred Footsteps</span> */}
                  <h2 className="font-kanz text-3xl sm:text-6xl text-cream mt-2 mb-4 leading-relaxed">
                    بهوثثال – ثقافة ، تاريخ انسس بركات نا خزائن                   </h2>
                  <div className="w-20 h-1 bg-gold rounded-full mb-6" />
                  <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                    Discover the historical timeline of Duat Mutlaqeen (RA) gracing the city of Bhopal with their holy presence over the decades, bringing immense barakat and guidance to mumineen.
                  </p>
                </div>
              </div>

              {/* ── Safar Timeline ── */}
              <div className="mb-8 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Calendar size={14} className="text-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Timeline</span>
                </div>
                <h2 className="font-kanz text-2xl sm:text-4xl text-emerald-dark mb-2 leading-relaxed">
                  دعاة مطلقين  ع م نا  اسفار مبارك ني  تاريخ
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-8" />
              </div>

              <div className="space-y-8 pb-20">
                {whatWhen.safars.map((person, pi) => (
                  <FadeIn key={person.id} delay={pi * 0.1}>
                    <div className="bg-white rounded-2xl border border-emerald-dark/5 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Person Header */}
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() => setExpandedSafar(expandedSafar === person.id ? null : person.id)}
                      >
                        <div className="flex items-start gap-5">
                          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-emerald-dark/5 flex items-center justify-center shrink-0 shadow-md overflow-hidden border-2 border-gold/20 group-hover:border-gold/50 transition-colors duration-300">
                            {person.image ? (
                              <img src={person.image} alt={person.personName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                              <span className="text-gold font-heading font-bold text-2xl">
                                {person.personName.charAt(0)}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              {/* <span className="text-[10px] font-bold text-gold  px-2 py-0.5 rounded-full w-full text-center">
                                {person.title}
                              </span> */}
                            </div>
                            <h3 className="font-kanz text-3xl font-bold text-emerald-dark w-full text-center ">
                              {person.personName}
                            </h3>
                            <p className="text-xs text-charcoal/50 leading-relaxed mt-1 line-clamp-2">
                              {person.about}
                            </p>
                          </div>
                          <button className="p-2 text-charcoal/30 hover:text-emerald-dark transition-colors shrink-0">
                            {expandedSafar === person.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Safar Cards */}
                      <AnimatePresence>
                        {expandedSafar === person.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 border-t border-emerald-dark/5 pt-5">
                              <p className="text-sm text-charcoal/60 leading-relaxed mb-5">{person.about}</p>
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {person.safars.map((s, si) => (
                                  <motion.div
                                    key={si}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: si * 0.1 }}
                                    className="bg-cream rounded-xl overflow-hidden border border-emerald-dark/5 group"
                                  >
                                    <div className="h-36 overflow-hidden">
                                      <img
                                        src={s.image}
                                        alt={s.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="p-4">
                                      <div className="flex items-center gap-2 mb-2">
                                        <Clock size={11} className="text-gold" />
                                        <span className="text-[10px] font-semibold text-gold">{s.year}</span>
                                        <span className="text-[10px] text-charcoal/40">•</span>
                                        <span className="text-[10px] text-charcoal/40">{s.location}</span>
                                      </div>
                                      <h4 className="font-heading text-sm font-bold text-emerald-dark mb-1">
                                        {s.name}
                                      </h4>
                                      <p className="text-[11px] text-charcoal/50 leading-relaxed">{s.description}</p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <SectionHeader
                icon={Star}
                label={whyBhopal.sectionTitle}
                title={whyBhopal.sectionSubtitle}
              />

              {/* Intro Banner */}
              <div className="relative bg-gradient-to-r from-emerald-dark to-emerald-light rounded-2xl p-8 sm:p-10 mb-12 overflow-hidden">
                <PatternOverlay />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/10 pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
                  <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">City of Lakes</span>
                  <h2 className="font-kanz text-2xl sm:text-5xl text-cream mt-2 mb-3">
                    {whyBhopal.intro.title}
                  </h2>
                  <div className="w-16 h-1 bg-gold rounded-full mb-4" />
                  <p className="text-cream/80 text-sm leading-relaxed">{whyBhopal.intro.description}</p>
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['All', 'Heritage', 'Nature', 'Culture'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setExpandedPlace(expandedPlace === cat ? null : cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${expandedPlace === cat
                      ? 'bg-gold text-emerald-dark border-gold'
                      : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Places Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyBhopal.places
                  .filter((p) => !expandedPlace || expandedPlace === 'All' || expandedPlace === null || p.category === expandedPlace)
                  .map((place, i) => (
                    <motion.div
                      key={place.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="bg-white rounded-2xl overflow-hidden border border-emerald-dark/5 shadow-sm hover:shadow-xl transition-all duration-300 group"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 left-3">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${categoryColors[place.category] || categoryColors.Heritage}`}>
                            {place.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Camera size={14} className="text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-heading text-base font-bold text-emerald-dark mb-2">{place.name}</h3>
                        <p className="text-xs text-charcoal/50 leading-relaxed mb-4">{place.description}</p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1.5">
                          {place.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-2.5 py-1 bg-cream rounded-full text-[10px] font-medium text-charcoal/60"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ) : activeTab === 'where' ? (
            <motion.div
              key="where"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeader
                icon={MapPin}
                label={whereContent.sectionTitle}
                title={whereContent.sectionSubtitle}
              />

              {/* Where Cards */}
              <div className="grid sm:grid-cols-2 gap-6 mb-16">
                {whereContent.sections.map((section, i) => {
                  const SIcon = iconMap[section.icon] || MapPin;
                  return (
                    <FadeIn key={section.id} delay={i * 0.1}>
                      <Link
                        to={section.link}
                        className="block bg-white rounded-2xl border border-emerald-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                      >
                        <div className="h-1.5 bg-gradient-to-r from-emerald-dark via-gold to-emerald-dark" />
                        <div className="p-6">
                          <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-dark/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                              <SIcon size={24} className="text-emerald-dark group-hover:text-gold transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-heading text-lg font-bold text-emerald-dark mb-1 flex items-center gap-2">
                                {section.title}
                                <ArrowRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h3>
                              <p className="text-xs text-charcoal/50 leading-relaxed mb-4">{section.description}</p>

                              <div className="flex items-center gap-3">
                                <div className="bg-cream rounded-lg px-3 py-2">
                                  <p className="font-heading text-xl font-bold text-emerald-dark">{section.stats.value}</p>
                                  <p className="text-[9px] text-charcoal/40 uppercase tracking-wider">{section.stats.label}</p>
                                </div>
                                <span className="inline-flex items-center gap-1 text-xs text-gold font-semibold group-hover:underline">
                                  Explore <ChevronRight size={14} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        {/* <section className="mt-16 mb-8">
          <div className="bg-charcoal rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-dark via-gold to-emerald-dark" />
            <Sparkles size={28} className="text-gold mx-auto mb-4" />
            <h3 className="font-heading text-2xl text-cream mb-3">Ready for Ashara Mubaraka?</h3>
            <p className="text-cream/50 text-sm mb-6 max-w-md mx-auto">
              Explore all the arrangements made for mumineen in Bhopal — from accommodations to transport, relay zones to volunteer services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/accommodations"
                className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-7 py-3 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all text-sm"
              >
                <Hotel size={16} />
                Find Hotels
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-cream border border-white/10 font-heading font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition-all text-sm"
              >
                <Globe size={16} />
                Contact Us
              </Link>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

/* ── Sub-Components ── */

function SectionHeader({ icon: Icon, label, title }) {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Icon size={14} className="text-gold" />
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">{label}</span>
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl text-emerald-dark mb-2">{title}</h2>
      <div className="w-16 h-1 bg-gold rounded-full" />
    </div>
  );
}

function PatternOverlay() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <pattern id="relay-araz-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#relay-araz-pattern)" />
      </svg>
    </div>
  );
}
