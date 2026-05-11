import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'Majlis', color: 'from-emerald-dark to-emerald-light' },
  { id: 2, category: 'Volunteers', color: 'from-gold/80 to-gold' },
  { id: 3, category: 'Masjid', color: 'from-charcoal to-charcoal-light' },
  { id: 4, category: 'Niyaz', color: 'from-emerald-light to-emerald-dark' },
  { id: 5, category: 'Relay Setup', color: 'from-charcoal-light to-charcoal' },
  { id: 6, category: 'Majlis', color: 'from-emerald-dark/80 to-emerald-light/80' },
  { id: 7, category: 'Volunteers', color: 'from-gold to-gold/60' },
  { id: 8, category: 'Masjid', color: 'from-emerald-light/80 to-emerald-dark/80' },
  { id: 9, category: 'Niyaz', color: 'from-charcoal to-emerald-dark' },
];

const categories = ['All', 'Majlis', 'Volunteers', 'Masjid', 'Niyaz', 'Relay Setup'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Memories</span>
          <h2 className="font-heading text-3xl sm:text-4xl text-cream mt-2 mb-4">Image Gallery</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? 'bg-gold text-emerald-dark shadow-lg shadow-gold/20'
                  : 'bg-white/5 text-cream/60 hover:bg-white/10 hover:text-cream border border-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox(item)}
            >
              <div className={`bg-gradient-to-br ${item.color} aspect-[${item.id % 2 === 0 ? '4/3' : '3/4'}] min-h-[200px] flex items-center justify-center`}>
                <div className="text-center p-6">
                  <p className="font-heading text-xl text-cream/90">{item.category}</p>
                  <p className="text-cream/50 text-sm mt-1">Ashara Mubarak 1448H</p>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-emerald-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <div className={`bg-gradient-to-br ${lightbox.color} w-full max-w-2xl aspect-video rounded-2xl flex items-center justify-center`}>
            <div className="text-center p-10">
              <p className="font-heading text-3xl text-cream">{lightbox.category}</p>
              <p className="text-cream/60 mt-2">Ashara Mubarak 1448H • Bhopal</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
