import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  CheckCircle, AlertTriangle, FileText, X, BarChart3,
  Image as ImageIcon, Download
} from 'lucide-react';
import { reportsData2, cities, umoors, cityHasData, getCityMeta, commonData } from '../data/reportsData2';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Header from '../components/Header';
import FadeIn from '../components/animations/FadeIn';

// ─── Global Image Gallery (3 Card Slider) ──────────────────────────────────
function GlobalGallery({ images = [] }) {
  const scrollRef = useRef(null);
  const timerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 3;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      handleInteraction();
    }
  };

  const autoSlide = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: clientWidth / 3, behavior: 'smooth' });
      }
    }
  }, []);

  const handleInteraction = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(autoSlide, 5000);
  };

  useEffect(() => {
    if (images.length > 0) {
      timerRef.current = setInterval(autoSlide, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [images.length, autoSlide]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative group">
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-emerald-dark"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        onScroll={handleInteraction}
        onTouchStart={handleInteraction}
      >
        {images.map((img, idx) => (
          <div key={idx} className="shrink-0 w-[85vw] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] snap-start">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] group-hover:shadow-lg transition-shadow">
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-emerald-dark"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

// ─── Accordion Item ─────────────────────────────────────────────────────────
function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-xl border border-emerald-dark/5 overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-cream/50 transition-colors"
      >
        <div className="flex-1 min-w-0">
          {item.headingUr && (
            <p className="font-kanz text-base text-emerald-dark leading-relaxed" dir="rtl">
              {item.headingUr}
            </p>
          )}
          {item.headingEn && (
            <p className={`text-sm font-semibold text-charcoal/80 ${item.headingUr ? 'mt-1' : ''}`}>
              {item.headingEn}
            </p>
          )}
        </div>
        <div className="ml-4 shrink-0">
          {isOpen
            ? <ChevronUp size={18} className="text-gold" />
            : <ChevronDown size={18} className="text-charcoal/40" />
          }
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4 border-t border-emerald-dark/5 pt-4">
              {/* Urdu content first */}
              {item.contentUr && (
                <p className="font-kanz text-sm text-charcoal/70 leading-[2]" dir="rtl">
                  {item.contentUr}
                </p>
              )}
              {/* English content */}
              {item.contentEn && (
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {item.contentEn}
                </p>
              )}
              {/* Accordion images */}
              {item.images && item.images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                  {item.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Detail ${i + 1}`}
                      className="w-full h-28 object-cover rounded-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}

              {/* Document Download Button */}
              {item.docUrl && (
                <div className="pt-2 mt-4 border-t border-emerald-dark/5">
                  <a
                    href={item.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold/10 text-emerald-dark font-semibold px-4 py-2 rounded-lg text-xs hover:bg-gold hover:shadow-md transition-all"
                  >
                    <Download size={14} />
                    <span>Download Report Document</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Dual-Language Content Section ──────────────────────────────────────────
function DualLangSection({ data, icon: Icon, colorClass, label }) {
  if (!data) return null;
  const { en, ur } = data;
  const hasEn = en && en.items && en.items.length > 0;
  const hasUr = ur && ur.items && ur.items.length > 0;
  if (!hasEn && !hasUr) return null;

  return (
    <div className={`rounded-2xl border p-6 sm:p-8 ${colorClass}`}>
      <div className="flex items-center gap-2 mb-5">
        <Icon size={20} className="shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
      </div>

      <div className="space-y-6">
        {/* Urdu first */}
        {hasUr && (
          <div dir="rtl">
            <h4 className="font-kanz text-lg mb-3 font-bold">{ur.heading}</h4>
            <ul className="space-y-2">
              {ur.items.map((item, i) => (
                <li key={i} className="font-kanz text-sm leading-[2] flex items-start gap-2">
                  <span className="mt-2 text-current/50 shrink-0 text-[10px]">●</span>
                  <span className="flex-1">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasUr && hasEn && <div className="border-t border-current/10" />}

        {/* English */}
        {hasEn && (
          <div>
            <h4 className="text-sm font-bold mb-3">{en.heading}</h4>
            <ul className="space-y-2">
              {en.items.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 text-current/50 shrink-0 text-[10px]">●</span>
                  <span className="flex-1">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── City Report Card ───────────────────────────────────────────────────────
function CityReportCard({ cityEntry, umoorMeta, activeContentType }) {
  const cityMeta = getCityMeta(cityEntry.cityId);
  if (!cityMeta) return null;

  return (
    <FadeIn className="h-full">
      <div className="bg-white rounded-3xl border border-emerald-dark/5 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        
        {/* Card Header */}
        <div className="bg-gradient-to-br from-emerald-dark via-emerald-light to-emerald-dark p-6 relative overflow-hidden shrink-0">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <pattern id={`pat-${cityEntry.cityId}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M15 0 L30 15 L15 30 L0 15 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#pat-${cityEntry.cityId})`} />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col space-y-4">
            <div className="space-y-2">
              <div dir="rtl" className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-kanz text-gold text-2xl drop-shadow-sm leading-tight">{umoorMeta.nameUr}</span>
                <span className="text-white/30 text-sm hidden sm:inline">—</span>
                <span className="font-kanz text-cream/90 text-xl drop-shadow-sm leading-tight">{cityMeta.nameUr}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gold font-heading text-lg font-bold uppercase tracking-wide drop-shadow-sm leading-tight">{umoorMeta.nameEn}</span>
                <span className="text-cream font-heading text-2xl font-bold drop-shadow-sm leading-tight mt-0.5">{cityMeta.nameEn}</span>
              </div>
            </div>

            {cityEntry.docUrl && (
              <div className="pt-3 border-t border-white/10 mt-2">
                <a
                  href={cityEntry.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-semibold px-4 py-2 rounded-full text-xs hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all justify-center w-full"
                >
                  <FileText size={14} />
                  <span>Download Report Document</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Content Sections */}
        <div className="p-6 space-y-6 flex-1 flex flex-col">
          {(activeContentType === 'all' || activeContentType === 'achievements') && (
            <DualLangSection
              data={cityEntry.achievements}
              icon={CheckCircle}
              colorClass={`bg-emerald-50 border-emerald-200 text-emerald-800 ${activeContentType !== 'all' ? 'flex-1' : ''}`}
              label="Achievements"
            />
          )}

          {(activeContentType === 'all' || activeContentType === 'improvements') && (
            <DualLangSection
              data={cityEntry.improvements}
              icon={AlertTriangle}
              colorClass={`bg-orange-50 border-orange-200 text-orange-800 ${activeContentType !== 'all' ? 'flex-1' : ''}`}
              label="Need to Improve"
            />
          )}
        </div>

      </div>
    </FadeIn>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function Report2Page() {
  const [activeUmoorId, setActiveUmoorId] = useState('all');
  const [activeCityId, setActiveCityId] = useState('all');
  const [activeContentType, setActiveContentType] = useState('all'); // all, achievements, improvements
  const [openGlobalAccIdx, setOpenGlobalAccIdx] = useState(null);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const umoorScrollRef = useRef(null);
  const cityScrollRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  // When umoor changes, reset city filter to 'all'
  const handleUmoorChange = (umoorId) => {
    setActiveUmoorId(umoorId);
    setActiveCityId('all');
  };

  // Get available cities for the currently selected umoor (only those with data)
  const getAvailableCities = () => {
    if (activeUmoorId === 'all') {
      // Collect all cities that have data in any umoor
      const cityIds = new Set();
      reportsData2.forEach((umoor) => {
        umoor.cities.forEach((c) => {
          if (cityHasData(c)) cityIds.add(c.cityId);
        });
      });
      return cities.filter((c) => cityIds.has(c.id));
    } else {
      const umoor = reportsData2.find((u) => u.id === activeUmoorId);
      if (!umoor) return [];
      const cityIds = umoor.cities.filter((c) => cityHasData(c)).map((c) => c.cityId);
      return cities.filter((c) => cityIds.includes(c.id));
    }
  };

  // Get filtered report cards
  const getFilteredCards = () => {
    const cards = [];
    const umoorsToShow = activeUmoorId === 'all' ? reportsData2 : reportsData2.filter((u) => u.id === activeUmoorId);

    umoorsToShow.forEach((umoor) => {
      const citiesToShow = activeCityId === 'all'
        ? umoor.cities.filter((c) => cityHasData(c))
        : umoor.cities.filter((c) => c.cityId === activeCityId && cityHasData(c));

      citiesToShow.forEach((cityEntry) => {
        let shouldShow = false;
        const hasAch = cityEntry.achievements && (cityEntry.achievements.en?.items?.length > 0 || cityEntry.achievements.ur?.items?.length > 0);
        const hasImp = cityEntry.improvements && (cityEntry.improvements.en?.items?.length > 0 || cityEntry.improvements.ur?.items?.length > 0);

        if (activeContentType === 'all') shouldShow = true;
        if (activeContentType === 'achievements' && hasAch) shouldShow = true;
        if (activeContentType === 'improvements' && hasImp) shouldShow = true;

        if (shouldShow) {
          cards.push({
            key: `${umoor.id}-${cityEntry.cityId}`,
            umoorMeta: { id: umoor.id, nameEn: umoor.nameEn, nameUr: umoor.nameUr },
            cityEntry,
          });
        }
      });
    });

    return cards;
  };

  const availableCities = getAvailableCities();
  const filteredCards = getFilteredCards();

  const scrollTabs = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    const el = e.currentTarget;
    dragRef.current.isDown = true;
    dragRef.current.startX = e.pageX - el.offsetLeft;
    dragRef.current.scrollLeft = el.scrollLeft;
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  };

  const handleMouseLeaveOrUp = (e) => {
    dragRef.current.isDown = false;
    e.currentTarget.style.cursor = 'grab';
    e.currentTarget.style.removeProperty('user-select');
  };

  const handleMouseMove = (e) => {
    if (!dragRef.current.isDown) return;
    e.preventDefault();
    const el = e.currentTarget;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.5;
    el.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  return (
    <div className="font-body bg-cream min-h-screen flex flex-col">
      <SEO
        title="Umoor Report | Asaara Bhopal"
        description="Comprehensive multi-umoor city reports with achievements, areas for improvement, and detailed analytics across Madhya Pradesh."
      />
      <Header />

      <main className="flex-1">
        <PageHero
          title="Umoor Report"
          subtitle="Comprehensive department-wise city reports — achievements, improvements, and detailed analytics."
          icon={BarChart3}
          breadcrumbs={[{ label: 'Report 2' }]}
        />

        {/* ── Unified Sticky Filter Panel ── */}
        <div className="sticky z-40 top-[40px] md:top-[93px] flex flex-col shadow-md rounded-b-3xl">
          
          <AnimatePresence initial={false}>
            {isFiltersVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden flex flex-col"
              >
                {/* ── Umoor Filter Bar ── */}
                <div className="bg-white/95 backdrop-blur-md border-b border-emerald-dark/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 relative group">
              <button
                onClick={() => scrollTabs(umoorScrollRef, 'left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white via-white to-transparent pl-3 pr-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
              >
                <div className="w-7 h-7 rounded-full bg-white shadow-md border border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:text-gold">
                  <ChevronLeft size={16} />
                </div>
              </button>

              <div
                ref={umoorScrollRef}
                className="flex items-center gap-2.5 overflow-x-auto py-3 scrollbar-hide px-2 md:px-8 cursor-grab"
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeaveOrUp}
                onMouseUp={handleMouseLeaveOrUp}
                onMouseMove={handleMouseMove}
              >
                {/* All button */}
                <button
                  onClick={() => handleUmoorChange('all')}
                  className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 border ${
                    activeUmoorId === 'all'
                      ? 'bg-emerald-dark text-gold border-emerald-dark shadow-lg scale-105'
                      : 'bg-white text-charcoal/70 border-emerald-dark/10 hover:border-gold/50 hover:text-emerald-dark'
                  }`}
                >
                  All Umoors
                </button>

                {umoors.map((umoor) => (
                  <button
                    key={umoor.id}
                    onClick={() => handleUmoorChange(umoor.id)}
                    className={`flex flex-col items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 border relative overflow-hidden group/btn ${
                      activeUmoorId === umoor.id
                        ? 'bg-emerald-dark text-gold border-emerald-dark shadow-lg scale-105'
                        : 'bg-white text-charcoal/70 border-emerald-dark/10 hover:border-gold/50 hover:text-emerald-dark'
                    }`}
                  >
                    <span className="font-kanz text-xs leading-tight" dir="rtl">{umoor.nameUr}</span>
                    <span className="text-[11px] leading-tight mt-0.5">{umoor.nameEn}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollTabs(umoorScrollRef, 'right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white via-white to-transparent pr-3 pl-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
              >
                <div className="w-7 h-7 rounded-full bg-white shadow-md border border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:text-gold">
                  <ChevronRight size={16} />
                </div>
              </button>
            </div>
          </div>

          {/* ── City Filter Bar ── */}
          <div className="bg-cream/95 backdrop-blur-md border-b border-emerald-dark/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 relative group">
              <button
                onClick={() => scrollTabs(cityScrollRef, 'left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-cream via-cream to-transparent pl-3 pr-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
              >
                <div className="w-6 h-6 rounded-full bg-cream shadow border border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:text-gold">
                  <ChevronLeft size={14} />
                </div>
              </button>

              <div
                ref={cityScrollRef}
                className="flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-hide px-2 md:px-8 cursor-grab"
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeaveOrUp}
                onMouseUp={handleMouseLeaveOrUp}
                onMouseMove={handleMouseMove}
              >
                <button
                  onClick={() => setActiveCityId('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shrink-0 border ${
                    activeCityId === 'all'
                      ? 'bg-gold text-emerald-dark border-gold shadow-md'
                      : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50 hover:text-emerald-dark'
                  }`}
                >
                  All Cities
                </button>

                {availableCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setActiveCityId(city.id)}
                    className={`flex flex-col items-center px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shrink-0 border ${
                      activeCityId === city.id
                        ? 'bg-gold text-emerald-dark border-gold shadow-md'
                        : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50 hover:text-emerald-dark'
                    }`}
                  >
                    <span className="font-kanz text-[10px] leading-tight" dir="rtl">{city.nameUr}</span>
                    <span className="text-[10px] leading-tight mt-0.5">{city.nameEn}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollTabs(cityScrollRef, 'right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-cream via-cream to-transparent pr-3 pl-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
              >
                <div className="w-6 h-6 rounded-full bg-cream shadow border border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:text-gold">
                  <ChevronRight size={14} />
                </div>
              </button>
            </div>
          </div>

          {/* ── Content Type Filter Bar ── */}
          <div className="bg-white/95 backdrop-blur-md border-b border-emerald-dark/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-hide">
              {[
                { id: 'all', label: 'All Details' },
                { id: 'achievements', label: 'Achievements Only' },
                { id: 'improvements', label: 'Need to Improve Only' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveContentType(type.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shrink-0 border ${
                    activeContentType === type.id
                      ? 'bg-emerald-dark text-gold border-emerald-dark shadow-md'
                      : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50 hover:text-emerald-dark'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Toggle Filters Button ── */}
          <div className="w-full bg-white/95 backdrop-blur-md flex justify-center py-1.5 border-b border-emerald-dark/10 shadow-sm">
            <button 
              onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-emerald-dark/60 hover:text-gold transition-colors"
            >
              {isFiltersVisible ? 'Hide Filters' : 'Show Filters'}
              {isFiltersVisible ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

        </div>

        {/* ── Report Cards ── */}
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <AnimatePresence mode="wait">
            {filteredCards.length > 0 ? (
              <motion.div
                key={`${activeUmoorId}-${activeCityId}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
              >
                {/* Results Count */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-charcoal/50 mb-6">
                    Showing <span className="font-bold text-emerald-dark">{filteredCards.length}</span> report{filteredCards.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                  {filteredCards.map((card) => (
                    <CityReportCard
                      key={card.key}
                      cityEntry={card.cityEntry}
                      umoorMeta={card.umoorMeta}
                      activeContentType={activeContentType}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-2xl bg-emerald-dark/5 flex items-center justify-center mx-auto mb-5">
                  <BarChart3 size={36} className="text-emerald-dark/30" />
                </div>
                <h3 className="font-heading text-xl text-emerald-dark mb-2">No Reports Found</h3>
                <p className="text-sm text-charcoal/50 max-w-md mx-auto">
                  No report data is available for the selected filter combination. Try selecting a different umoor or city.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Common Global Gallery & Accordions ── */}
        <div className="max-w-7xl mx-auto px-4 pb-16 space-y-16">
          <div className="w-full h-px bg-emerald-dark/10" />
          
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-emerald-dark">Global Gallery</h2>
              <p className="text-charcoal/60 mt-2">Visual highlights from across all cities and umoors.</p>
            </div>
            <GlobalGallery images={commonData.sliderImages} />
          </FadeIn>

          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-emerald-dark">Overall Reports</h2>
              <p className="text-charcoal/60 mt-2">Detailed program overviews and strategic future goals.</p>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              {commonData.accordion.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  item={item}
                  isOpen={openGlobalAccIdx === idx}
                  onToggle={() => setOpenGlobalAccIdx(openGlobalAccIdx === idx ? null : idx)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
