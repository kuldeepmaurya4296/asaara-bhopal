import { useEffect, useState } from 'react';

function calculateRemaining() {
  const target = new Date('2026-06-15T10:00:00');
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
    const id = setInterval(() => {
      setTime(calculateRemaining());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="py-12 bg-cream relative overflow-hidden border-y border-emerald-dark/10">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 max-w-5xl mx-auto">

        {/* Minimal Title */}
        <div className="text-center md:text-right">
          <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-semibold block mb-1 opacity-80">
            Approaching
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl text-emerald-dark">
            Ashara Mubarak
          </h2>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

        {/* The Timer */}
        <div className="flex justify-center gap-3 sm:gap-6">
          {boxes.map((b) => (
            <div key={b.label} className="flex flex-col items-center">
              <div className="rounded-xl bg-white border border-emerald-dark/10 p-3 w-[72px] sm:w-[88px] text-center shadow-sm hover:shadow-md transition-all">
                <span
                  className={`block font-heading text-3xl sm:text-4xl text-gold font-bold tabular-nums ${b.label === 'Seconds' ? 'animate-count-change' : ''
                    }`}
                  key={b.value}
                >
                  {String(b.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-charcoal/60 text-[10px] mt-2 uppercase tracking-[0.2em] font-medium">
                {b.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
