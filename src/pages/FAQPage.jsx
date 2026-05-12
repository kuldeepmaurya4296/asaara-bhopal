import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { faqs } from '../data/faq';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <SEO title="FAQ" description="Frequently Asked Questions about Bhopal Ashara Mubarak, relay centres, transport, accommodation, and volunteering." />
      <Header />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about services, arrangements, and facilities for Ashara Mubarak in Bhopal"
        icon={MessageCircleQuestion}
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white border-emerald-dark/20 shadow-lg shadow-emerald-dark/5'
                    : 'bg-white/50 border-charcoal/10 hover:border-gold/50 hover:bg-white'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start sm:items-center gap-4">
                    <div className={`mt-0.5 sm:mt-0 p-2 rounded-lg transition-colors ${isOpen ? 'bg-gold/10' : 'bg-emerald-dark/5'}`}>
                      <MessageCircleQuestion size={20} className={isOpen ? 'text-gold' : 'text-emerald-dark'} />
                    </div>
                    <span className="font-heading font-medium text-emerald-dark text-base sm:text-lg">{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-charcoal/40 shrink-0 transition-transform duration-300 ml-4 ${
                      isOpen ? 'rotate-180 text-gold' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 pl-16">
                    <div className="w-10 h-0.5 bg-gold/50 mb-4 rounded-full" />
                    <p className="text-charcoal/70 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center bg-emerald-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />
          <div className="relative z-10">
            <h3 className="font-heading text-2xl text-cream mb-3">Still have questions?</h3>
            <p className="text-cream/70 mb-6 max-w-lg mx-auto text-sm">
              If you couldn't find the answer to your question, please don't hesitate to reach out to our dedicated support team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gold text-emerald-dark font-heading font-semibold px-8 py-3 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all text-sm tracking-wide"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <footer id="footer"><Footer /></footer>
    </div>
  );
}
