import { BookOpen, Heart, Users, Globe, ArrowRight } from 'lucide-react';


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
              Dawoodi Bohra community in Bhopal is widely known for its deep sense of mohabbat, ikhlaas, unity, and hospitality. With a community of approximately 6,500 members, the Dawoodi Bohras of Bhopal have always shared a strong bond of love, respect, and togetherness, creating an environment where every visitor feels welcomed like family.
            </p>
            <p className="text-charcoal/60 leading-relaxed">
              The people of Bhopal hold immense love and devotion for Maula, and this mohabbat can be seen in their culture, gatherings, service, and everyday interactions. The community is recognized for its sincerity, humble nature, and the spirit of serving others with happiness and respect.
            </p>
            <p>
              Bhopal itself is a city filled with heritage, peace, and culture, famously known as the “City of Lakes.” The warmth of its people beautifully reflects in the Dawoodi Bohra community as well, making the city a memorable place for all those who visit.
            </p>
            {/* <p className="text-charcoal/60 leading-relaxed">
              A unique aspect of the Bohra community in Bhopal is the beautiful use of Lisaan ud-Dawat along with Urdu, both spoken with sweetness and elegance. These languages not only preserve tradition but also reflect the rich cultural identity of the community.

              The city is home to five Dawoodi Bohra masjids, which serve as important centers of spirituality, unity, learning, and community connection.

              As thousands of mumineen visit Bhopal for the Ashara , they will experience the true essence of the city — heartfelt hospitality, strong community spirit, and above all, the mohabbat and ikhlaas that define the people of Bhopal.
            </p> */}



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
