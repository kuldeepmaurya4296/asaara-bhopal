import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { id: 1, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp', category: 'Events' },
  { id: 2, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp', category: 'Events' },
  { id: 3, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/622701576_18073706855373522_5838723358977877538_nfull.webp', category: 'Majlis' },
  { id: 4, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp', category: 'Community' },
  { id: 5, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp', category: 'Niyaz' },
  { id: 6, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/514391007_18052679591373522_4970761108929655218_nlow.webp', category: 'Volunteers' },
  { id: 7, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/511454734_1402170707719877_5663356764546071948_n.heiclow.webp', category: 'Masjid' },
];

const categories = ['All', 'Events', 'Majlis', 'Community', 'Niyaz', 'Volunteers', 'Masjid'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // Touch state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter);
  const activeItems = filtered; // The list currently being viewed

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      showNext();
    } else if (isRightSwipe) {
      showPrev();
    }
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % activeItems.length);
  }, [lightboxIndex, activeItems]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + activeItems.length) % activeItems.length);
  }, [lightboxIndex, activeItems]);

  const closeLightbox = () => setLightboxIndex(null);

  // Keyboard navigation
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

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Memories</span>
          <h2 className="font-heading text-3xl sm:text-4xl text-emerald-dark mt-2 mb-4">Image Gallery</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setFilter(c);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? 'bg-gold text-emerald-dark shadow-lg shadow-gold/20'
                  : 'bg-emerald-dark/5 text-charcoal/60 hover:bg-emerald-dark/10 hover:text-emerald-dark border border-emerald-dark/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {activeItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setLightboxIndex(index)}
            >
              {/* Image */}
              <img 
                src={item.url} 
                alt={item.category}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-emerald-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Carousel */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandler}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
            <div className="text-gold text-sm tracking-widest uppercase">
              {lightboxIndex + 1} / {activeItems.length}
            </div>
            <button
              className="text-cream hover:text-gold transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Arrows (Desktop) */}
          <button 
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors hidden sm:block z-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors hidden sm:block z-50"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image Container */}
          <div className="w-full h-full flex items-center justify-center p-4 sm:p-12 mt-10">
            <img 
              key={activeItems[lightboxIndex].id} // Force re-render for animation if wanted
              src={activeItems[lightboxIndex].url}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <span className="inline-block px-4 py-2 bg-black/50 backdrop-blur-md text-cream rounded-full text-sm tracking-widest uppercase border border-white/10">
              {activeItems[lightboxIndex].category}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
