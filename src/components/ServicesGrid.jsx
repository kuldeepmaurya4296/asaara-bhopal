import { Link } from 'react-router-dom';
import { umoorData } from '../data/umoor';

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Khidmat | Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl text-emerald-dark mt-2 mb-4">12 Umoor</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {umoorData.map((u) => (
            <Link
              to={`/umoor/${u.slug}`}
              key={u.slug}
              className="group bg-white rounded-2xl overflow-hidden text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-emerald-dark/5 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
                <img 
                  src={u.image} 
                  alt={u.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-5 flex flex-col flex-1 border-t border-emerald-dark/5 bg-white relative z-10">
                <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold mb-3">
                  {u.subtitle}
                </p>
                <div className="w-8 h-px bg-emerald-dark/20 mx-auto mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
                <h3 className="font-heading text-sm sm:text-base text-charcoal font-medium mt-auto">
                  {u.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
