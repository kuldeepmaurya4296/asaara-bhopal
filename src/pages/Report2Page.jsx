import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  CheckCircle, AlertTriangle, Image as ImageIcon, X
} from 'lucide-react';
import { reportsData2, cities, umoors, cityHasData, TAGS_META, commonData } from '../data/reportsData2';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeIn from '../components/animations/FadeIn';

// ─── Data Card Component (Achievements / Improvements) ──────────────────────
function DataCard({ title, icon: Icon, theme, items, summaryData }) {
  const [activeTags, setActiveTags] = useState([]);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  // Mouse drag handlers for the Tags bar
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

  // Extract unique tags present in the current filtered items
  const uniqueTags = useMemo(() => {
    const tagsSet = new Set();
    items.forEach(i => {
      if (i.tags && Array.isArray(i.tags)) {
        i.tags.forEach(t => tagsSet.add(t));
      } else if (i.tagId) {
        tagsSet.add(i.tagId); // Fallback
      }
    });
    return Array.from(tagsSet).filter(Boolean);
  }, [items]);

  // Filter items by selected internal tags
  const filteredItems = useMemo(() => {
    if (activeTags.length === 0) return items;
    return items.filter(i => {
      const itemTags = (i.tags && Array.isArray(i.tags)) ? i.tags : (i.tagId ? [i.tagId] : []);
      return itemTags.some(t => activeTags.includes(t));
    });
  }, [items, activeTags]);

  // Theme-specific colors
  const colors = theme === 'emerald'
    ? {
      border: 'border-emerald-200',
      bg: 'bg-emerald-50/50',
      headerBg: 'bg-emerald-dark',
      headerText: 'text-gold',
      tagActive: 'text-emerald-dark',
      tagHover: 'hover:text-emerald-dark',
      itemBg: 'bg-white',
      itemBorder: 'border-emerald-100',
      footerBg: 'bg-emerald-50',
      footerText: 'text-emerald-800/60'
    }
    : {
      border: 'border-[#E8C84A]/40',
      bg: 'bg-[#E8C84A]/10',
      headerBg: 'bg-[#E8C84A]',
      headerText: 'text-gray-900',
      tagActive: 'text-[#E8C84A]',
      tagHover: 'hover:text-[#E8C84A]',
      itemBg: 'bg-white',
      itemBorder: 'border-[#E8C84A]/30',
      footerBg: 'bg-[#E8C84A]/10',
      footerText: 'text-gray-800/60'
    };

  return (
    <div className={`flex flex-col h-[550px] lg:h-full rounded-2xl border shadow-lg overflow-hidden ${colors.border} bg-white`}>
      {/* Sticky Header */}
      <div className={`${colors.headerBg} ${colors.headerText} px-6 py-4 flex items-center justify-between shrink-0 shadow-sm z-10 relative`}>
        <div className="flex items-center gap-3">
          <Icon size={22} className="opacity-90" />
          <h2 className="text-lg font-heading font-bold tracking-wide">{title}</h2>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-3 py-1.5 rounded-full">
          {filteredItems.length} items
        </span>
      </div>

      {/* Sticky Tags Filter */}
      {uniqueTags.length > 0 && (
        <div className="border-b border-gray-100 bg-white shrink-0 shadow-sm z-10 relative">
          <div
            className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-2 cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <button
              onClick={() => setActiveTags([])}
              className={`  rounded-full whitespace-nowrap text-[11px] font-bold uppercase tracking-wider transition-all duration-300 px-3 py-1 ${activeTags.length === 0
                ? colors.tagActive
                : 'text-charcoal/60 ' + colors.tagHover
                }`}
            >
              All Tags
            </button>
            {uniqueTags.map(tagId => {
              const meta = TAGS_META[tagId] || { en: tagId, ur: tagId };
              const isActive = activeTags.includes(tagId);
              return (
                <button
                  key={tagId}
                  onClick={() => {
                    setActiveTags(prev =>
                      prev.includes(tagId)
                        ? prev.filter(t => t !== tagId)
                        : [...prev, tagId]
                    );
                  }}
                  className={` flex items-center gap-1.5  rounded-full text-[11px] font-bold tracking-wider transition-all duration-300 px-3 py-1 ${isActive
                    ? colors.tagActive
                    : 'text-charcoal/60 ' + colors.tagHover
                    }`}
                >
                  <span>#{meta.en}</span>
                  {isActive && <X size={12} strokeWidth={3} className="opacity-80" />}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Scrollable Content Container */}
      <div className={`flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide ${colors.bg}`}>
        <AnimatePresence mode="popLayout">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl p-5 shadow-sm border ${colors.itemBg} ${colors.itemBorder}`}
            >
              {/* Item Tag */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2">
                  {(item.tags || (item.tagId ? [item.tagId] : [])).map(tId => (
                    <span key={tId} className={`text-[11px] tracking-wide font-extrabold ${theme === 'emerald' ? 'text-emerald-600' : 'text-[#E8C84A]'}`}>
                      #{TAGS_META[tId]?.en || tId}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                  {item.cityId.toUpperCase()}
                </span>
              </div>
              {/* Item Text */}
              <div className="space-y-3">
                <p className="font-kanz text-lg leading-relaxed text-right text-gray-800" dir="rtl">{item.textUr}</p>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.textEn}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-charcoal/40 text-sm gap-2">
            <AlertTriangle size={32} className="opacity-20" />
            <p>No {title.toLowerCase()} found for this selection.</p>
          </div>
        )}
      </div>

      {/* Sticky Footer Summary */}
      <div className={`${colors.footerBg} ${colors.footerText} border-t border-black/5 flex flex-col shrink-0 z-10 relative transition-all duration-300`}>
        <button
          onClick={() => setIsSummaryOpen(!isSummaryOpen)}
          className="w-full p-3 flex items-center justify-between hover:bg-black/5 transition-colors cursor-pointer"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest">
            {title} Summary
          </span>
          {isSummaryOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </button>

        <AnimatePresence>
          {isSummaryOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden px-4 pb-4 text-left text-[11px] space-y-2"
            >
              {summaryData && (
                <div className="mb-3 pb-3 border-b border-black/10 space-y-2">
                  <h4 className="font-bold text-[12px] opacity-90">{summaryData.headingEn}</h4>
                  <p className="leading-relaxed opacity-70">{summaryData.contentEn}</p>
                  <h4 className="font-kanz font-bold text-[13px] opacity-90 text-right mt-3" dir="rtl">{summaryData.headingUr}</h4>
                  <p className="font-kanz leading-relaxed opacity-70 text-right" dir="rtl">{summaryData.contentUr}</p>
                </div>
              )}
              <div className="flex justify-between border-b border-black/5 pb-1.5">
                <span className="font-semibold opacity-80">Total Items:</span>
                <span className="font-bold">{filteredItems.length}</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-1.5">
                <span className="font-semibold opacity-80">Cities Represented:</span>
                <span className="font-bold">{new Set(filteredItems.map(i => i.cityId)).size}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="font-semibold opacity-80">Active Tags:</span>
                <span className="text-right truncate ml-4 font-bold">
                  {activeTags.length === 0
                    ? 'All'
                    : activeTags.map(tId => TAGS_META[tId]?.en || tId).join(', ')
                  }
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Vertical Gallery Reel Component ────────────────────────────────────────
function VerticalGalleryCard({ images, summaryData }) {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      if (containerRef.current) {
        const el = containerRef.current;
        const currentScroll = el.scrollTop;
        const maxScroll = el.scrollHeight - el.clientHeight;
        const cardHeight = el.clientHeight;

        if (currentScroll >= maxScroll - 10) {
          el.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ top: cardHeight, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [images, isPaused]);

  // Vertical Mouse Drag
  const dragRef = useRef({ isDown: false, startY: 0, scrollTop: 0 });
  const handleMouseDown = (e) => {
    const el = e.currentTarget;
    dragRef.current.isDown = true;
    dragRef.current.startY = e.pageY - el.offsetTop;
    dragRef.current.scrollTop = el.scrollTop;
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  };
  const handleMouseUpOrLeave = (e) => {
    dragRef.current.isDown = false;
    e.currentTarget.style.cursor = 'grab';
    e.currentTarget.style.removeProperty('user-select');
  };
  const handleMouseMove = (e) => {
    if (!dragRef.current.isDown) return;
    e.preventDefault();
    const el = e.currentTarget;
    const y = e.pageY - el.offsetTop;
    const walk = (y - dragRef.current.startY) * 1.5;
    el.scrollTop = dragRef.current.scrollTop - walk;
  };

  return (
    <div className="flex flex-col h-[550px] lg:h-full rounded-2xl border shadow-lg overflow-hidden border-charcoal/20 bg-charcoal">
      {/* Sticky Header */}
      <div className="bg-charcoal text-gold px-6 py-4 flex items-center justify-between shrink-0 border-b border-white/10 shadow-sm z-10 relative">
        <div className="flex items-center gap-3">
          <ImageIcon size={22} className="opacity-90" />
          <h2 className="text-lg font-heading font-bold tracking-wide">Gallery Reel</h2>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-3 py-1.5 rounded-full text-white">
          {images.length} items
        </span>
      </div>

      {/* Scrollable Vertical Reel */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto snap-y snap-mandatory scrollbar-hide cursor-grab relative bg-black/50"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={(e) => {
          setIsPaused(false);
          handleMouseUpOrLeave(e);
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence>
          {images.length > 0 ? images.map((img, idx) => (
            <div key={idx} className="h-full w-full shrink-0 snap-center snap-always flex items-center justify-center p-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={img}
                alt={`Gallery Reel ${idx}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10 pointer-events-none"
              />
            </div>
          )) : (
            <div className="flex flex-col items-center justify-center h-full text-white/40 text-sm gap-2">
              <ImageIcon size={32} className="opacity-20" />
              <p>No images found.</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Footer Summary */}
      <div className="bg-charcoal border-t border-white/10 flex flex-col shrink-0 z-10 relative transition-all duration-300">
        <button
          onClick={() => setIsSummaryOpen(!isSummaryOpen)}
          className="w-full p-3 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold/60">
            Gallery Summary
          </span>
          {isSummaryOpen ? <ChevronDown size={14} className="text-gold/60" /> : <ChevronUp size={14} className="text-gold/60" />}
        </button>

        <AnimatePresence>
          {isSummaryOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden px-4 pb-4 text-left text-[11px] space-y-2 text-white/80"
            >
              {summaryData && (
                <div className="mb-3 pb-3 border-b border-white/10 space-y-2">
                  <h4 className="font-bold text-[12px] text-gold/90">{summaryData.headingEn}</h4>
                  <p className="leading-relaxed opacity-80">{summaryData.contentEn}</p>
                  <h4 className="font-kanz font-bold text-[13px] text-gold/90 text-right mt-3" dir="rtl">{summaryData.headingUr}</h4>
                  <p className="font-kanz leading-relaxed opacity-80 text-right" dir="rtl">{summaryData.contentUr}</p>
                </div>
              )}
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="font-semibold text-gold/80">Total Images:</span>
                <span className="font-bold">{images.length}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="font-semibold text-gold/80">Display Mode:</span>
                <span className="font-bold">Auto-Sliding Reel</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Accordion Component ────────────────────────────────────────────────────
function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-emerald-dark/10 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-emerald-50/50 transition-colors cursor-pointer"
      >
        <div className="w-8 shrink-0"></div>
        <div className="flex-1 text-center">
          <h3 className="font-bold text-lg text-emerald-dark">{item.headingEn}</h3>
          <p className="font-kanz text-sm text-emerald-dark/70 mt-1" dir="rtl">{item.headingUr}</p>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold text-white' : 'bg-emerald-50 text-emerald-dark'}`}>
          <ChevronDown size={18} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-emerald-dark/5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-emerald-dark text-sm uppercase tracking-wider">English</h4>
                  <p className="text-charcoal/80 leading-relaxed text-sm">{item.contentEn}</p>
                </div>
                <div className="space-y-3 text-right">
                  <h4 className="font-semibold text-emerald-dark text-sm uppercase tracking-wider" dir="rtl">اردو</h4>
                  <p className="font-kanz text-charcoal/80 leading-relaxed text-base" dir="rtl">{item.contentUr}</p>
                </div>
              </div>

              {item.images && item.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                  {item.images.map((img, idx) => (
                    <img key={idx} src={img} alt="Accordion Content" className="w-full h-48 object-cover rounded-xl shadow-sm" />
                  ))}
                </div>
              )}

              {item.docUrl && (
                <div className="pt-4 flex justify-center md:justify-start">
                  <a
                    href={item.docUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-dark text-gold px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-800 transition-colors shadow-md hover:shadow-lg"
                  >
                    Download Detailed Report
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

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function Report2Page() {
  const [activeUmoorId, setActiveUmoorId] = useState('all');
  const [activeCityId, setActiveCityId] = useState('all');
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [openAccordionIdx, setOpenAccordionIdx] = useState(null);

  const umoorScrollRef = useRef(null);
  const cityScrollRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  // Filter interaction
  const handleUmoorChange = (umoorId) => {
    setActiveUmoorId(umoorId);
    setActiveCityId('all');
  };

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

  const aggregatedData = useMemo(() => {
    const ach = [];
    const imp = [];
    const imgs = [];
    const acc = [];

    const umoorsToShow = activeUmoorId === 'all'
      ? reportsData2
      : reportsData2.filter((u) => u.id === activeUmoorId);

    umoorsToShow.forEach((umoor) => {
      const citiesToShow = activeCityId === 'all'
        ? umoor.cities.filter((c) => cityHasData(c))
        : umoor.cities.filter((c) => c.cityId === activeCityId && cityHasData(c));

      citiesToShow.forEach((cityEntry) => {
        // Achievements
        if (cityEntry.achievements?.en?.items) {
          cityEntry.achievements.en.items.forEach((itemEn, idx) => {
            const itemUr = cityEntry.achievements.ur?.items?.[idx];
            ach.push({
              id: `ach-${umoor.id}-${cityEntry.cityId}-${idx}`,
              textEn: itemEn.text,
              textUr: itemUr ? itemUr.text : '',
              tags: itemEn.tags || (itemEn.tagId ? [itemEn.tagId] : ['community']),
              umoorId: umoor.id,
              cityId: cityEntry.cityId,
            });
          });
        }

        // Improvements
        if (cityEntry.improvements?.en?.items) {
          cityEntry.improvements.en.items.forEach((itemEn, idx) => {
            const itemUr = cityEntry.improvements.ur?.items?.[idx];
            imp.push({
              id: `imp-${umoor.id}-${cityEntry.cityId}-${idx}`,
              textEn: itemEn.text,
              textUr: itemUr ? itemUr.text : '',
              tags: itemEn.tags || (itemEn.tagId ? [itemEn.tagId] : ['infrastructure']),
              umoorId: umoor.id,
              cityId: cityEntry.cityId,
            });
          });
        }

        // Images
        if (cityEntry.images && cityEntry.images.length > 0) {
          imgs.push(...cityEntry.images);
        }

        // Accordions
        if (cityEntry.accordions && cityEntry.accordions.length > 0) {
          acc.push(...cityEntry.accordions);
        }
      });
    });

    return { achievements: ach, improvements: imp, images: imgs, accordions: acc };
  }, [activeUmoorId, activeCityId]);

  const availableCities = useMemo(() => {
    if (activeUmoorId === 'all') {
      const allCityIds = new Set();
      reportsData2.forEach(u => u.cities.forEach(c => {
        if (cityHasData(c)) allCityIds.add(c.cityId);
      }));
      return cities.filter(c => allCityIds.has(c.id));
    }
    const umoor = reportsData2.find(u => u.id === activeUmoorId);
    if (!umoor) return [];
    return cities.filter(c => umoor.cities.some(uc => uc.cityId === c.id && cityHasData(uc)));
  }, [activeUmoorId]);

  return (
    <div className="font-body bg-cream min-h-screen flex flex-col">
      <SEO
        title="Umoor Report | Asaara Bhopal"
        description="Comprehensive reporting for all Umoors and cities under the Bhopal Ashara Mubaraka Relay Centre."
        keywords="reports, umoor, bhopal, ashara mubaraka, dawoodi bohra"
      />

      <Header />

      <main className="flex-1 flex flex-col">
        {/* Top Hero */}
        <PageHero
          title="Umoor Overview Dashboard"
          subtitle="A unified view of achievements, improvements, and gallery highlights across all active Umoors and cities."
          breadcrumbs={[{ label: 'Dashboard' }]}
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
                    <button onClick={() => scrollTabs(umoorScrollRef, 'left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white via-white to-transparent pl-3 pr-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                      <div className="w-7 h-7 rounded-full bg-white shadow-md border border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:text-gold"><ChevronLeft size={16} /></div>
                    </button>
                    <div ref={umoorScrollRef} className="flex items-center gap-2.5 overflow-x-auto py-3 scrollbar-hide px-2 md:px-8 cursor-grab" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeaveOrUp} onMouseUp={handleMouseLeaveOrUp} onMouseMove={handleMouseMove}>
                      <button onClick={() => handleUmoorChange('all')} className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 border ${activeUmoorId === 'all' ? 'bg-emerald-dark text-gold border-emerald-dark shadow-lg scale-105' : 'bg-white text-charcoal/70 border-emerald-dark/10 hover:border-gold/50 hover:text-emerald-dark'}`}>All Umoors</button>
                      {umoors.map((umoor) => (
                        <button key={umoor.id} onClick={() => handleUmoorChange(umoor.id)} className={`flex flex-col items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 border relative overflow-hidden group/btn ${activeUmoorId === umoor.id ? 'bg-emerald-dark text-gold border-emerald-dark shadow-lg scale-105' : 'bg-white text-charcoal/70 border-emerald-dark/10 hover:border-gold/50 hover:text-emerald-dark'}`}>
                          <span className="font-kanz text-xs leading-tight" dir="rtl">{umoor.nameUr}</span>
                          <span className="text-[11px] leading-tight mt-0.5">{umoor.nameEn}</span>
                        </button>
                      ))}
                    </div>
                    <button onClick={() => scrollTabs(umoorScrollRef, 'right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white via-white to-transparent pr-3 pl-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                      <div className="w-7 h-7 rounded-full bg-white shadow-md border border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:text-gold"><ChevronRight size={16} /></div>
                    </button>
                  </div>
                </div>

                {/* ── City Filter Bar ── */}
                <div className="bg-cream/95 backdrop-blur-md border-b border-emerald-dark/5 transition-all duration-300">
                  <div className="max-w-7xl mx-auto px-4 relative group">
                    <button onClick={() => scrollTabs(cityScrollRef, 'left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-cream via-cream to-transparent pl-3 pr-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                      <div className="w-6 h-6 rounded-full bg-cream shadow border border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:text-gold"><ChevronLeft size={14} /></div>
                    </button>
                    <div ref={cityScrollRef} className="flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-hide px-2 md:px-8 cursor-grab" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeaveOrUp} onMouseUp={handleMouseLeaveOrUp} onMouseMove={handleMouseMove}>
                      <button onClick={() => setActiveCityId('all')} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shrink-0 border ${activeCityId === 'all' ? 'bg-gold text-emerald-dark border-gold shadow-md' : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50 hover:text-emerald-dark'}`}>All Cities</button>
                      {availableCities.map((city) => (
                        <button key={city.id} onClick={() => setActiveCityId(city.id)} className={`flex flex-col items-center px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shrink-0 border ${activeCityId === city.id ? 'bg-gold text-emerald-dark border-gold shadow-md' : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50 hover:text-emerald-dark'}`}>
                          <span className="font-kanz text-[10px] leading-tight" dir="rtl">{city.nameUr}</span>
                          <span className="text-[10px] leading-tight mt-0.5">{city.nameEn}</span>
                        </button>
                      ))}
                    </div>
                    <button onClick={() => scrollTabs(cityScrollRef, 'right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-cream via-cream to-transparent pr-3 pl-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                      <div className="w-6 h-6 rounded-full bg-cream shadow border border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:text-gold"><ChevronRight size={14} /></div>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Toggle Filters Button ── */}
          <div className="w-full bg-white/95 backdrop-blur-md flex justify-center py-1.5 border-b border-emerald-dark/10 shadow-sm z-20 relative">
            <button
              onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-emerald-dark/60 hover:text-gold transition-colors"
            >
              {isFiltersVisible ? 'Hide Filters' : 'Show Filters'}
              {isFiltersVisible ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>

        {/* ── Dynamic Accordion Section ── */}
        {(() => {
          const accordionsToShow = (activeUmoorId === 'all' && activeCityId === 'all')
            ? commonData.accordion
            : aggregatedData.accordions;

          if (accordionsToShow.length === 0) return null;

          return (
            <div className="max-w-4xl mx-auto px-4 py-8 md:py-10 w-full z-10 relative">
              <FadeIn>
                <div className="text-center mb-8 flex flex-col items-center justify-center">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-emerald-dark text-center uppercase tracking-widest">
                    {activeUmoorId === 'all' && activeCityId === 'all' ? 'QAZA E RASIYAH' : ' QAZA E RASIYAH'}
                  </h2>
                  <p className="mt-4 text-base text-charcoal/70 text-center">
                    {activeUmoorId === 'all' && activeCityId === 'all'
                      ? 'Detailed program overviews and strategic future goals.'
                      : 'Strategic insights and program highlights based on selected filters.'}
                  </p>
                  <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  {accordionsToShow.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      item={item}
                      isOpen={openAccordionIdx === idx}
                      onToggle={() => setOpenAccordionIdx(openAccordionIdx === idx ? null : idx)}
                    />
                  ))}
                </div>
              </FadeIn>
            </div>
          );
        })()}

        {/* ── 3-Card Dashboard ── */}
        <div className="max-w-[1600px] w-full mx-auto px-4 py-8 lg:py-10 flex-1 flex flex-col">
          <FadeIn className="w-full flex-1 min-h-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-[550px] lg:h-[calc(100vh-320px)]">

              {/* Card 1: Achievements */}
              <DataCard
                title="Achievements"
                type="achievements"
                icon={CheckCircle}
                theme="emerald"
                items={aggregatedData.achievements}
                summaryData={commonData.accordion[0]}
              />

              {/* Card 2: Need to Improve */}
              <DataCard
                title="Need to Improve"
                type="improvements"
                icon={AlertTriangle}
                theme="#E8C84A"
                items={aggregatedData.improvements}
                summaryData={commonData.accordion[1]}
              />

              {/* Card 3: Gallery Reel */}
              <VerticalGalleryCard
                images={aggregatedData.images}
                summaryData={commonData.accordion[2]}
              />

            </div>
          </FadeIn>
        </div>

      </main>
    </div>
  );
}
