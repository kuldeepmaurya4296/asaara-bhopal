import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { MapPin, Target, Trophy, Phone, User, CheckCircle, ChevronLeft, ChevronRight, X, BarChart3, TrendingUp, AlertTriangle, ShieldAlert } from 'lucide-react';
import { reportsData } from '../data/reportsData';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReportPage() {
  const [activeCityId, setActiveCityId] = useState(reportsData[0].id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });

  const scrollTabs = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const activeCity = reportsData.find(c => c.id === activeCityId) || reportsData[0];

  const handleOpenCarousel = (index) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCarousel = () => {
    setIsCarouselOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev + 1) % activeCity.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev - 1 + activeCity.gallery.length) % activeCity.gallery.length);
    }
  };

  return (
    <div className="font-body bg-cream min-h-screen flex flex-col">
      <SEO 
        title="City Reports & Analytics | Asaara Bhopal" 
        description="Comprehensive reports, highlights, and SWOT analysis for major cities across Madhya Pradesh."
      />
      
      <Header />

      <main className="flex-1">
        <PageHero 
          title="City Reports" 
          subtitle="Detailed insights, achievements, and future goals across Madhya Pradesh."
          icon={BarChart3}
          breadcrumbs={[{ label: 'Reports' }]}
        />

        {/* Sticky City Filter */}
        <div 
          className={`sticky z-40 bg-white/95 backdrop-blur-md border-b border-emerald-dark/10 shadow-md transition-all duration-300 ${
            isHeaderHidden ? 'top-0' : 'top-[104px] md:top-[148px]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 relative group">
            {/* Left Scroll Button */}
            <button 
              onClick={() => scrollTabs('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white via-white to-transparent pl-4 pr-8 py-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-emerald-dark hover:text-gold"
            >
              <div className="w-8 h-8 rounded-full bg-white shadow-md border border-emerald-dark/10 flex items-center justify-center">
                <ChevronLeft size={18} />
              </div>
            </button>

            <div 
              ref={scrollContainerRef}
              className={`flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide relative px-2 md:px-6 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab scroll-smooth'}`}
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {reportsData.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setActiveCityId(city.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 border relative overflow-hidden group/btn ${
                    activeCityId === city.id 
                      ? 'bg-emerald-dark text-gold border-emerald-dark shadow-lg scale-105'
                      : 'bg-white text-charcoal/80 border-emerald-dark/10 hover:border-gold/50 hover:text-emerald-dark'
                  }`}
                >
                  {/* Subtle shine effect on hover for non-active tabs */}
                  <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full ${activeCityId !== city.id ? 'group-hover/btn:animate-[shine_1.5s_ease-in-out_infinite]' : ''}`} />
                  
                  <MapPin size={16} className={`relative z-10 transition-colors ${activeCityId === city.id ? 'text-gold' : 'text-emerald-dark/50 group-hover/btn:text-gold'}`} />
                  <span className="relative z-10">{city.cityName}</span>
                </button>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button 
              onClick={() => scrollTabs('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white via-white to-transparent pr-4 pl-8 py-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-emerald-dark hover:text-gold"
            >
              <div className="w-8 h-8 rounded-full bg-white shadow-md border border-emerald-dark/10 flex items-center justify-center">
                <ChevronRight size={18} />
              </div>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-16"
          >
            {/* Overview & Highlights Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-emerald-dark">{activeCity.cityName} Overview</h2>
                  <div className="w-20 h-1 bg-gold mt-4 rounded-full"></div>
                </div>
                <p className="text-charcoal/80 leading-relaxed text-lg">
                  {activeCity.overview}
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-dark/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
                <h3 className="text-xl font-bold text-emerald-dark mb-6 flex items-center gap-2">
                  <Trophy className="text-gold" size={24} />
                  Key Highlights
                </h3>
                <ul className="space-y-4">
                  {activeCity.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
                      <span className="text-charcoal/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SWOT Analysis */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-heading font-bold text-emerald-dark">SWOT Analysis</h2>
                <p className="text-charcoal/60 mt-2 max-w-2xl mx-auto">Strategic evaluation of {activeCity.cityName}'s internal and external factors.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Strengths */}
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {activeCity.swotAnalysis.strengths.map((item, i) => (
                      <li key={i} className="text-sm text-emerald-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-red-900 mb-3">Weaknesses</h3>
                  <ul className="space-y-2">
                    {activeCity.swotAnalysis.weaknesses.map((item, i) => (
                      <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Opportunities */}
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Target size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Opportunities</h3>
                  <ul className="space-y-2">
                    {activeCity.swotAnalysis.opportunities.map((item, i) => (
                      <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Threats */}
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <ShieldAlert size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-orange-900 mb-3">Threats</h3>
                  <ul className="space-y-2">
                    {activeCity.swotAnalysis.threats.map((item, i) => (
                      <li key={i} className="text-sm text-orange-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Umoors Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-emerald-dark/10 pb-4">
                <h2 className="text-2xl font-heading font-bold text-emerald-dark">Umoors Operational</h2>
                <span className="bg-gold/20 text-emerald-dark px-3 py-1 rounded-full text-xs font-bold">
                  {activeCity.umoors.length} Departments
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCity.umoors.map((umoor, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-emerald-dark/5 flex flex-col h-full"
                  >
                    <div className="bg-emerald-dark text-white p-5">
                      <h3 className="font-heading font-bold text-xl">{umoor.name}</h3>
                    </div>
                    <div className="p-6 flex-1 flex flex-col gap-6">
                      <div className="space-y-4 flex-1">
                        <div>
                          <p className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-1">Key Achievement</p>
                          <p className="text-charcoal/80 text-sm">{umoor.keyAchievement}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-1">Future Goals</p>
                          <p className="text-charcoal/80 text-sm">{umoor.futureGoals}</p>
                        </div>
                      </div>
                      
                      {/* Representative Card */}
                      <div className="bg-cream rounded-xl p-4 flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                          <User className="text-emerald-dark" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-emerald-dark text-sm">{umoor.representative.name}</p>
                          <p className="text-xs text-charcoal/60 mb-1">{umoor.representative.designation}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Media Gallery Section */}
            {activeCity.gallery && activeCity.gallery.length > 0 && (
              <div className="space-y-8 pt-8 border-t border-emerald-dark/10">
                <div className="text-center">
                  <h2 className="text-3xl font-heading font-bold text-emerald-dark">Media Gallery</h2>
                  <p className="text-charcoal/60 mt-2 max-w-2xl mx-auto">Visual highlights and developmental progress from {activeCity.cityName}.</p>
                </div>

                {/* Zigzag Layout using CSS Columns / Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                  {activeCity.gallery.map((imgUrl, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer group shadow-sm"
                      onClick={() => handleOpenCarousel(idx)}
                    >
                      <img 
                        src={imgUrl} 
                        alt={`${activeCity.cityName} Gallery Image ${idx + 1}`} 
                        className="w-full object-cover rounded-xl"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-emerald-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">View Fullscreen</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        </div>
      </main>

      {/* Fullscreen Carousel Modal */}
      <AnimatePresence>
        {isCarouselOpen && selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseCarousel}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-50"
            >
              <X size={24} />
            </button>

            {/* Arrow Controls */}
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-50"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-50"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Container with Drag */}
            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full h-full flex items-center justify-center p-4 md:p-12 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                  nextImage();
                } else if (swipe > 50) {
                  prevImage();
                }
              }}
            >
              <img 
                src={activeCity.gallery[selectedImageIndex]} 
                alt={`${activeCity.cityName} Fullscreen`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-none"
              />
            </motion.div>
            
            {/* Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium bg-black/50 px-4 py-1.5 rounded-full">
              {selectedImageIndex + 1} / {activeCity.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
