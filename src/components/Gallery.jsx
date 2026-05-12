import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowRight, Images } from 'lucide-react';
import { getFeaturedImages } from '../data/gallery';

const previewImages = getFeaturedImages(5);

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Touch state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
    if (distance > minSwipeDistance) showNext();
    else if (distance < -minSwipeDistance) showPrev();
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % previewImages.length);
  }, [lightboxIndex]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length);
  }, [lightboxIndex]);

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
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
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

        {/* Preview Grid – 5 images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {previewImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg aspect-[4/5]"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4">
                <ZoomIn size={24} className="text-gold mb-2" />
                <span className="text-cream text-xs font-medium px-3 text-center leading-tight">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-sm tracking-wide group"
          >
            <Images size={16} />
            View Complete Gallery
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandler}
        >
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
            <div className="text-gold text-sm tracking-widest uppercase">
              {lightboxIndex + 1} / {previewImages.length}
            </div>
            <button className="text-cream hover:text-gold transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={24} />
            </button>
          </div>

          <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors hidden sm:block z-50" aria-label="Previous image">
            <ChevronLeft size={32} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors hidden sm:block z-50" aria-label="Next image">
            <ChevronRight size={32} />
          </button>

          <div className="w-full h-full flex items-center justify-center p-4 sm:p-12 mt-10">
            <img
              key={previewImages[lightboxIndex].id}
              src={previewImages[lightboxIndex].url}
              alt={previewImages[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <span className="inline-block px-4 py-2 bg-black/50 backdrop-blur-md text-cream rounded-full text-sm tracking-widest uppercase border border-white/10">
              {previewImages[lightboxIndex].title}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
