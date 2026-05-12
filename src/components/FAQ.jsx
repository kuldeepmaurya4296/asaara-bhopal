import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircleQuestion, ArrowRight } from 'lucide-react';
import { getFeaturedFaqs } from '../data/faq';

const faqs = getFeaturedFaqs(5);

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-20 bg-emerald-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/3 blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Support</span>
          <h2 className="font-heading text-3xl sm:text-4xl text-cream mt-2 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white/10 border-gold/30'
                    : 'bg-white/5 border-white/10 hover:border-gold/20'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <MessageCircleQuestion size={18} className="text-gold shrink-0" />
                    <span className="font-medium text-cream text-sm sm:text-base">{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 pl-12 text-cream/60 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-sm tracking-wide group"
          >
            View All FAQs
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
