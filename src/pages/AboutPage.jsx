import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart, Users, BookOpen, Globe, MapPin, Star,
  CheckCircle, Navigation, Phone, Mail, Building2
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import {
  coreValues, communityHighlights, asharaServices,
  masjidsList, aboutContent
} from '../data/about';

const iconMap = { Heart, Users, BookOpen, Globe };

export default function AboutPage() {
  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <SEO title={aboutContent.seo.title} description={aboutContent.seo.description} />
      <Header />
      <PageHero
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.subtitle}
        icon={Heart}
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* Section 1: The Dawoodi Bohras of Bhopal */}
        <section className="mb-20">
          <SectionTitle icon={Users} label="Who We Are" title="The Dawoodi Bohras of Bhopal" />
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image */}
            <div className="lg:w-5/12">
              <div className="relative">
                <img
                  src={aboutContent.community.image}
                  alt={aboutContent.community.imageAlt}
                  className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3] border border-emerald-dark/10"
                />
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-7/12 space-y-5">
              {aboutContent.community.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-charcoal/80 text-lg leading-relaxed' : 'text-charcoal/60 leading-relaxed'}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Stats Bar */}
        <section className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {communityHighlights.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center border border-emerald-dark/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <p className="font-heading text-3xl sm:text-4xl text-emerald-dark font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-charcoal/50 uppercase tracking-wider font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Core Values */}
        <section className="mb-20">
          <SectionTitle icon={Star} label="Our Values" title="What Defines Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((val, i) => {
              const ValIcon = iconMap[val.icon] || Heart;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-emerald-dark/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-dark/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <ValIcon size={22} className="text-emerald-dark group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-emerald-dark mb-2">{val.title}</h3>
                  <p className="text-xs text-charcoal/50 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Ashara Relay Centre */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-dark via-emerald-light to-emerald-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <pattern id="about-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#about-pattern)" />
              </svg>
            </div>
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold/5 pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
              {/* Image */}
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src={aboutContent.relayCentre.image}
                    alt={aboutContent.relayCentre.imageAlt}
                    className="w-full rounded-2xl shadow-xl object-contain border border-gold/20"
                  />
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3 space-y-5">
                <div>
                  <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">About the Centre</span>
                  <h2 className="font-heading text-2xl sm:text-3xl text-cream mt-1 mb-2">Ashara Relay Centre</h2>
                  <div className="w-16 h-1 bg-gold rounded-full" />
                </div>
                <p className="text-cream/80 text-base leading-relaxed">
                  {aboutContent.relayCentre.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-2">
                  {asharaServices.map((s) => (
                    <div key={s} className="flex items-start gap-2 text-cream/90">
                      <CheckCircle size={15} className="text-gold shrink-0 mt-0.5" />
                      <span className="text-sm">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/relay-zones"
                    className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-6 py-3 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all text-sm"
                  >
                    <Navigation size={16} />
                    Explore Zones
                  </Link>
                  <Link
                    to="/volunteers"
                    className="inline-flex items-center gap-2 bg-white/10 text-cream border border-white/20 font-heading font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all text-sm"
                  >
                    <Users size={16} />
                    Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5:  */}
        <section className="mb-20">
          <SectionTitle icon={Building2} label="Our Masjids" title="5 Masjids of Bhopal" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {masjidsList.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-emerald-dark/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-dark flex items-center justify-center mb-4">
                  <span className="text-gold font-heading text-xl font-bold">{m.name.charAt(0)}</span>
                </div>
                <h3 className="font-heading text-base font-bold text-emerald-dark mb-1">{m.name}</h3>
                <p className="text-xs text-gold font-semibold mb-2 flex items-center gap-1">
                  <MapPin size={11} />{m.area}
                </p>
                <p className="text-xs text-charcoal/50 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 6: Contact CTA */}
        <section className="mb-8">
          <div className="bg-charcoal rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-dark via-gold to-emerald-dark" />
            <h3 className="font-heading text-2xl text-cream mb-3">{aboutContent.contact.title}</h3>
            <p className="text-cream/50 text-sm mb-6 max-w-md mx-auto">
              {aboutContent.contact.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${aboutContent.contact.phone}`}
                className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-7 py-3 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all text-sm"
              >
                <Phone size={16} />
                Call Helpline
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-cream border border-white/10 font-heading font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition-all text-sm"
              >
                <Mail size={16} />
                Contact Page
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer"><Footer /></footer>
    </div>
  );
}

/* ── Reusable Sub-Component ── */
function SectionTitle({ icon: Icon, label, title }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-1">
        <Icon size={14} className="text-gold" />
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">{label}</span>
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl text-emerald-dark mb-2">{title}</h2>
      <div className="w-16 h-1 bg-gold rounded-full" />
    </div>
  );
}
