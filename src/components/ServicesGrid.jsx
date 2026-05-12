import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { umoorData } from '../data/umoor';

export default function ServicesGrid() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-center md:text-left">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Khidmat | Services</span>
            <h2 className="font-heading text-3xl sm:text-4xl text-emerald-dark mt-2 mb-4">12 Umoor</h2>
            <div className="w-20 h-1 bg-gold rounded-full md:mx-0 mx-auto" />
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:bg-emerald-dark hover:text-white hover:border-emerald-dark transition-all duration-300 hover:-translate-y-1 shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-emerald-dark/10 flex items-center justify-center text-emerald-dark hover:bg-emerald-dark hover:text-white hover:border-emerald-dark transition-all duration-300 hover:-translate-y-1 shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 pt-4 items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {umoorData.map((u) => (
              <Link
                to={`/umoor/${u.slug}`}
                key={u.slug}
                className="group flex-none w-[75vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white rounded-2xl overflow-hidden text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-emerald-dark/5 flex flex-col h-auto"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden p-6 relative">
                  <img
                    src={u.image}
                    alt={u.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col flex-1 border-t border-emerald-dark/5 bg-white relative z-10">
                  <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold mb-3">
                    {u.subtitle}
                  </p>
                  <div className="w-8 h-px bg-emerald-dark/20 mx-auto mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
                  <h3 className="font-heading text-base text-charcoal font-semibold mt-auto leading-snug">
                    {u.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
