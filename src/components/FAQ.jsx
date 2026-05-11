import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    q: 'How to reach the relay center?',
    a: 'Take the main road towards Iqbal Maidan and follow the signboards. Dedicated parking and volunteer-assisted drop-off points are available at the main entrance.',
  },
  {
    q: 'What are the waaz timings?',
    a: 'Waaz Mubarak starts daily at 10:00 AM and again at 5:00 PM. Timings may change — please check the announcement bar for the latest updates.',
  },
  {
    q: 'Where is parking available?',
    a: 'Dedicated parking zones are marked near each masjid and at the main relay centre entrance. Volunteers will guide you to the nearest available spot.',
  },
  {
    q: 'How to access live relay?',
    a: 'You can access the live relay at any of the registered relay centres in Bhopal. Online streaming links will be shared via the official communication channels.',
  },
  {
    q: 'Emergency support number?',
    a: 'For emergencies, call our 24/7 helpline at +91-9876543210. Medical teams and ambulance services are on standby throughout Ashara Mubarak.',
  },
  {
    q: 'Accommodation support details?',
    a: 'We provide verified guest houses with transport facilities. Contact the Accommodation desk at the relay centre or call the helpline for advance booking.',
  },
];

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
        <div className="space-y-3">
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
      </div>
    </section>
  );
}
