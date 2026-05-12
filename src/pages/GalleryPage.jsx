import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { galleryImages, galleryCategories, getImagesByCategory } from '../data/gallery';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const filtered = getImagesByCategory(activeCategory);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) showNext();
    else if (distance < -minSwipeDistance) showPrev();
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  }, [lightboxIndex, filtered]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered]);

  const closeLightbox = () => setLightboxIndex(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxIndex]);

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <SEO title="Gallery" description="Browse the complete Ashara Mubarak photo gallery – Majlis, Mawaid, Relay Centres, Volunteers, Masajid, and more." />
      <Header />
      <PageHero
        title="Image Gallery"
        subtitle="Relive the blessed moments of Ashara Mubarak — Majlis, preparations, community, and beyond"
        icon={Images}
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {galleryCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setLightboxIndex(null); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${activeCategory === cat.key
                ? 'bg-gold text-emerald-dark border-gold shadow-lg shadow-gold/20'
                : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50 hover:text-emerald-dark'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-charcoal/50 mb-8">
          Showing <span className="font-semibold text-emerald-dark">{filtered.length}</span> images
          {activeCategory !== 'all' && (
            <span> in <span className="text-gold font-semibold">{galleryCategories.find((c) => c.key === activeCategory)?.label}</span></span>
          )}
        </p>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/80 via-emerald-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                  <ZoomIn size={24} className="text-gold mb-2" />
                  <span className="text-cream text-xs font-medium text-center leading-tight">{item.title}</span>
                  <span className="text-gold/70 text-[10px] mt-1 uppercase tracking-wider">
                    {galleryCategories.find((c) => c.key === item.category)?.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Images size={48} className="text-charcoal/20 mx-auto mb-4" />
            <p className="text-charcoal/40 text-sm">No images found in this category.</p>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandler}
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
            <div className="text-gold text-sm tracking-widest uppercase">
              {lightboxIndex + 1} / {filtered.length}
            </div>
            <button className="text-cream hover:text-gold transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={24} />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors hidden sm:block z-50" aria-label="Previous image">
            <ChevronLeft size={32} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors hidden sm:block z-50" aria-label="Next image">
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center p-4 sm:p-12 mt-10">
            <img
              key={filtered[lightboxIndex].id}
              src={filtered[lightboxIndex].url}
              alt={filtered[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <span className="inline-block px-4 py-2 bg-black/50 backdrop-blur-md text-cream rounded-full text-sm border border-white/10">
              {filtered[lightboxIndex].title}
            </span>
            <span className="block mt-2 text-gold/60 text-[10px] uppercase tracking-wider">
              {galleryCategories.find((c) => c.key === filtered[lightboxIndex].category)?.label}
            </span>
          </div>
        </div>
      )}

      <footer id="footer"><Footer /></footer>
    </div>
  );
}
