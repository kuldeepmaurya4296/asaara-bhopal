import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, MapPin, Compass } from 'lucide-react';

const slides = [
  {
    title: 'Ashara Mubarak 1448H',
    subtitle: 'Experience the sacred blessings through our premium live relay service',
    btn: { text: 'Watch Live', icon: Play, href: '#countdown' },
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2000&auto=format&fit=crop',
    gradient: 'from-emerald-dark/90 via-emerald-dark/80 to-emerald-dark/90',
  },
  {
    title: 'Bhopal Relay Centre',
    subtitle: 'Your gateway to spiritual unity — state-of-the-art relay infrastructure',
    btn: { text: 'Explore Services', icon: Compass, href: '#services' },
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2000&auto=format&fit=crop',
    gradient: 'from-charcoal/90 via-charcoal/80 to-charcoal/90',
  },
  {
    title: 'Volunteers & Community',
    subtitle: 'Together we serve — join hundreds of dedicated volunteers',
    btn: { text: 'Get Directions', icon: MapPin, href: '#masjids' },
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2000&auto=format&fit=crop',
    gradient: 'from-emerald-dark/90 via-emerald-light/80 to-emerald-dark/90',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <div className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background with image and gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-all duration-1000`} />
      </div>

      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
            <circle cx="0" cy="0" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold" />
            <circle cx="20" cy="0" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold" />
            <circle cx="0" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold" />
            <circle cx="20" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div key={current} className="animate-fade-in-up">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Bhopal Relay Centre</span>
            <span className="w-16 h-px bg-gold/50" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl text-cream font-bold mb-6 tracking-wide">
            {slide.title}
          </h2>

          <p className="text-cream/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {slide.subtitle}
          </p>

          <a
            href={slide.btn.href}
            className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-sm tracking-wide"
          >
            <slide.btn.icon size={18} />
            {slide.btn.text}
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-cream hover:bg-gold/30 hover:text-gold transition-all duration-300 border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-cream hover:bg-gold/30 hover:text-gold transition-all duration-300 border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-gold' : 'w-2.5 bg-cream/30 hover:bg-cream/50'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
