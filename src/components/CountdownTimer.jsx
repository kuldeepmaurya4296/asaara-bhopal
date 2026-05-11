import { useEffect, useState } from 'react';

function calculateRemaining() {
  const target = new Date('2026-07-05T00:00:00');
  const now = new Date();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState(calculateRemaining());

  useEffect(() => {
    const id = setInterval(() => setTime(calculateRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Mark Your Calendar</span>
        <h2 className="font-heading text-3xl sm:text-4xl text-cream mt-2 mb-12">
          Days Until Ashara Mubarak
        </h2>

        <div className="flex justify-center gap-4 sm:gap-8">
          {boxes.map((b) => (
            <div
              key={b.label}
              className="animate-glow rounded-2xl bg-emerald-dark/60 backdrop-blur-md border border-gold/20 p-4 sm:p-6 w-20 sm:w-28"
            >
              <span className="block font-heading text-3xl sm:text-5xl text-gold font-bold tabular-nums">
                {String(b.value).padStart(2, '0')}
              </span>
              <span className="block text-cream/50 text-xs sm:text-sm mt-2 uppercase tracking-widest">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-cream/40 text-sm mt-10">
          Live relay will be available across all centres in Bhopal
        </p>
      </div>
    </section>
  );
}
