import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getUmoorBySlug } from '../data/umoor';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UmoorPage() {
  const { slug } = useParams();
  const umoor = getUmoorBySlug(slug);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!umoor) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
        <h1 className="font-heading text-3xl text-emerald-dark mb-4">Service Not Found</h1>
        <Link to="/" className="text-gold hover:text-emerald-dark transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Header />

      <main className="flex-grow pb-20">
        
        {/* Page Header (Hero) */}
        <div ref={heroRef} className="bg-emerald-dark py-12 px-4 relative overflow-hidden">
          {/* Background pattern */}
          <motion.div style={{ y }} className="absolute inset-0 opacity-10 pointer-events-none w-full h-[150%] -top-[25%]">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <pattern id="umoor-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 Q10 0 20 20 T40 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#umoor-pattern)" />
            </svg>
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="font-heading text-3xl sm:text-4xl text-cream mb-4">
              {umoor.title}
            </h1>
            
            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center gap-2 text-sm text-cream/70">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight size={14} className="opacity-50" />
              <span className="opacity-50 cursor-default">Services</span>
              <ChevronRight size={14} className="opacity-50" />
              <span className="text-gold">{umoor.title}</span>
            </nav>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 mt-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* Left Image */}
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-2xl shadow-md p-4 border border-emerald-dark/5 sticky top-28">
                <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center rounded-xl overflow-hidden mb-4">
                  <img 
                    src={umoor.image} 
                    alt={umoor.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs tracking-widest font-bold uppercase rounded-full">
                    {umoor.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full md:w-2/3 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-emerald-dark/5">
              <div className="prose prose-emerald max-w-none text-charcoal/80">
                <p className="text-lg leading-relaxed mb-8">
                  {umoor.description}
                </p>

                {umoor.responsibilities && umoor.responsibilities.length > 0 && (
                  <>
                    <h3 className="font-heading text-xl text-emerald-dark font-semibold mb-6 mt-10">
                      Responsibilities
                    </h3>
                    <p className="mb-4">
                      Some of the key responsibilities of the committee include:
                    </p>
                    <ol className="space-y-4 list-decimal list-inside pl-2">
                      {umoor.responsibilities.map((resp, index) => (
                        <li key={index} className="pl-2">
                          <span className="text-charcoal">{resp}</span>
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </div>
              
              <div className="mt-12 pt-8 border-t border-emerald-dark/10">
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 text-emerald-dark hover:text-gold font-semibold transition-colors"
                >
                  <ArrowLeft size={16} /> Back to Services
                </Link>
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
