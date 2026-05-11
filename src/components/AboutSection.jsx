import { BookOpen, Heart, Users, Globe, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: Globe,
    title: 'Global Community',
    desc: 'Over a million members across more than 40 countries worldwide.',
  },
  {
    icon: Heart,
    title: 'Faith & Values',
    desc: 'Rooted in the Fatimid tradition of Islam, guided by the Dai al-Mutlaq.',
  },
  {
    icon: Users,
    title: 'Unity & Service',
    desc: 'Dedicated to community welfare, education, and humanitarian efforts.',
  },
  {
    icon: BookOpen,
    title: 'Heritage & Knowledge',
    desc: 'A rich legacy of scholarship, art, architecture, and cultural preservation.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-dark/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
            Who We Are
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-emerald-dark mt-2 mb-4">
            The Dawoodi Bohras
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left – Image */}
          <div className="lg:w-5/12">
            <div className="relative">
              <img
                src="/IMG_7659-scaled.jpg"
                alt="Dawoodi Bohra community gathering"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3] border border-emerald-dark/10"
              />
              {/* Decorative corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
            </div>
          </div>

          {/* Right – Text Content */}
          <div className="lg:w-7/12 space-y-6">
            <p className="text-charcoal/80 text-lg leading-relaxed">
              The Dawoodi Bohras are a community of Shia Fatimid Muslims with a rich heritage
              spanning over a thousand years. Under the guidance of the Dai al-Mutlaq, His Holiness
              Dr. Syedna Mufaddal Saifuddin <span className="text-gold font-medium">TUS</span>, the
              community flourishes with an emphasis on education, ethical living, and service to humanity.
            </p>
            <p className="text-charcoal/60 leading-relaxed">
              Known for their close-knit family values, entrepreneurial spirit, and philanthropic
              endeavours, the Bohras actively contribute to the societies they live in. The community's
              commitment to cleanliness, sustainability, and interfaith harmony has earned global
              recognition. Ashara Mubarak — the annual commemoration of Imam Husain SA — is the
              cornerstone of the community's spiritual calendar.
            </p>



            {/* Read More Button */}
            <a
              href="https://www.thedawoodibohras.com/about-the-bohras/#intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-7 py-3 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-sm tracking-wide mt-2 group"
            >
              Read More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
