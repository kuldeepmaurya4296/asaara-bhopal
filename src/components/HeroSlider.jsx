import { useState, useEffect, useRef } from 'react';
import { Play, MapPin, Compass } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import TextReveal from './animations/TextReveal';

const slides = [
  {
    title: 'Ashara Mubarakaa 1448H',
    subtitle: 'Experience the sacred blessings through our premium live relay service',
    btn: { text: 'Watch Live', icon: Play, href: '#countdown' },
    gradient: 'from-emerald-dark/80 via-emerald-dark/70 to-emerald-dark/80',
  },
  {
    title: 'Bhopal Relay Centre',
    subtitle: 'Your gateway to spiritual unity — state-of-the-art relay infrastructure',
    btn: { text: 'Explore Services', icon: Compass, href: '#services' },
    gradient: 'from-charcoal/80 via-charcoal/70 to-charcoal/80',
  },
  {
    title: 'Volunteers & Community',
    subtitle: 'Together we serve — join hundreds of dedicated volunteers',
    btn: { text: 'Get Directions', icon: MapPin, href: '#masjids' },
    gradient: 'from-emerald-dark/80 via-emerald-light/70 to-emerald-dark/80',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const goTo = (idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <div 
      ref={ref} 
      className="relative h-[85vh] min-h-[500px] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      {/* Continuous Video Background with Parallax and Dynamic Gradient */}
      <motion.div
        style={{ y }}
        className="absolute w-full h-[120%] -top-[10%] -bottom-[10%] z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Sequence 01.mp4" type="video/mp4" />
        </video>
        {/* The gradient overlay changes color per slide while video runs continuously */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-colors duration-1000`} />
      </motion.div>

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
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            {/* Decorative line */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="w-16 h-px bg-gold/50" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Bhopal Relay Centre</span>
              <span className="w-16 h-px bg-gold/50" />
            </motion.div>

            <TextReveal
              text={slide.title}
              delay={0.2}
              className="font-heading text-4xl sm:text-5xl md:text-7xl text-cream font-bold mb-6 tracking-wide drop-shadow-lg justify-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="text-cream/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"
            >
              {slide.subtitle}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 5px rgba(212,175,55,0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              href={slide.btn.href}
              className="relative overflow-hidden group inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light shadow-lg transition-all text-sm tracking-wide"
            >
              {/* Shine effect overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-shine" />
              <slide.btn.icon size={18} className="relative z-10" />
              <span className="relative z-10">{slide.btn.text}</span>
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>


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
