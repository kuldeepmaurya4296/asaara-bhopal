import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getMasjidBySlug } from '../data/masjids';
import {
  ArrowLeft, MapPin, Phone, Mail, Clock, Heart, ShieldCheck,
  ExternalLink, Building2, ShoppingBag, Hotel, Info, Stethoscope,
  Navigation, ChevronRight,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MasjidPage() {
  const { slug } = useParams();
  const masjid = getMasjidBySlug(slug);

  if (!masjid) {
    return (
      <div className="font-body bg-cream text-charcoal min-h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
          <h2 className="font-heading text-3xl text-emerald-dark mb-4">Masjid Not Found</h2>
          <p className="text-charcoal/60 mb-8">The masjid you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-7 py-3 rounded-full hover:bg-gold-light transition-all text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <Header />

      {/* Hero Banner */}
      <div ref={heroRef} className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center w-full h-[150%] -top-[25%]"
          style={{ y, backgroundImage: `url(${masjid.heroImage})` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${masjid.color} opacity-90`} />
        </motion.div>

        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <pattern id="masjid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#masjid-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-cream/50 text-sm mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/#masjids" className="hover:text-gold transition-colors">Masjids</Link>
            <ChevronRight size={14} />
            <span className="text-gold">{masjid.name}</span>
          </nav>

          <div className="flex items-center gap-5 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gold/20 border-2 border-gold/30 flex items-center justify-center backdrop-blur-sm">
              <span className="font-heading text-3xl text-gold font-bold">{masjid.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-cream font-bold drop-shadow-lg">{masjid.fullName}</h1>
              <p className="text-cream/70 text-base mt-1">{masjid.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-dark hover:text-gold transition-colors text-sm font-medium mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* About Section */}
        <section className="mb-16">
          <SectionTitle icon={Info} label="About" title={masjid.name} />
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <p className="text-charcoal/70 leading-relaxed text-base mb-6">{masjid.about}</p>
              <div className="flex flex-wrap gap-4">
                <InfoChip icon={MapPin} text={masjid.address} />
                <InfoChip icon={Phone} text={masjid.phone} />
                <InfoChip icon={Mail} text={masjid.email} />
                <InfoChip icon={Clock} text={`Waaz: ${masjid.waazTimings.morning} & ${masjid.waazTimings.evening}`} />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-emerald-dark/10 shadow-md h-64 lg:h-full">
                <iframe
                  src={masjid.mapEmbed}
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  title={`${masjid.name} map`}
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <SectionTitle icon={Navigation} label="Directions" title="Important Information" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {masjid.importantInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-5 border border-emerald-dark/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-dark/5 flex items-center justify-center mb-3">
                  <ShieldCheck size={20} className="text-emerald-dark" />
                </div>
                <h4 className="font-heading text-sm font-semibold text-emerald-dark mb-2">{info.title}</h4>
                <p className="text-xs text-charcoal/50 leading-relaxed">{info.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Medical Clinic */}
        <section className="mb-16">
          <SectionTitle icon={Stethoscope} label="Medical" title={masjid.medicalInfo.clinicName} />
          <div className="bg-gradient-to-br from-emerald-dark to-emerald-light rounded-2xl p-8 text-cream relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/10" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5" />
            <div className="relative z-10">
              <p className="text-cream/80 leading-relaxed mb-4">{masjid.medicalInfo.desc}</p>
              <div className="flex items-center gap-2 text-sm text-gold mb-1">
                <MapPin size={14} />
                <span>{masjid.medicalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gold mb-6">
                <Clock size={14} />
                <span>{masjid.medicalInfo.timings}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {masjid.medicalInfo.services.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-white/10 text-cream/90 text-xs font-medium border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Hospitals */}
        <section className="mb-16">
          <SectionTitle icon={Heart} label="Healthcare" title="Nearby Hospitals" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {masjid.nearbyHospitals.map((h) => (
              <NearbyCard key={h.name} name={h.name} icon={Building2} linkText="View Map" href={h.mapLink} />
            ))}
          </div>
        </section>

        {/* Nearby Stores */}
        <section className="mb-16">
          <SectionTitle icon={ShoppingBag} label="Essentials" title="Nearby Stores" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {masjid.nearbyStores.map((s) => (
              <NearbyCard key={s.name} name={s.name} icon={ShoppingBag} linkText="View Map" href={s.mapLink} />
            ))}
          </div>
        </section>

        {/* Hotels & Accommodation */}
        <section className="mb-16">
          <SectionTitle icon={Hotel} label="Stay" title="Hotels & Accommodation" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {masjid.nearbyHotels.map((h) => (
              <NearbyCard key={h.name} name={h.name} icon={Hotel} linkText="Book Now" href={h.bookLink} />
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-8">
          <div className="bg-charcoal rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-dark via-gold to-emerald-dark" />
            <h3 className="font-heading text-2xl text-cream mb-3">Need Help?</h3>
            <p className="text-cream/50 text-sm mb-6 max-w-md mx-auto">
              Our volunteer team is available 24/7 during Ashara Mubarak. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${masjid.phone}`}
                className="inline-flex items-center gap-2 bg-gold text-emerald-dark font-heading font-semibold px-7 py-3 rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all text-sm"
              >
                <Phone size={16} />
                Call Helpline
              </a>
              <a
                href={masjid.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-cream border border-white/10 font-heading font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition-all text-sm"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer"><Footer /></footer>
    </div>
  );
}

/* ── Reusable Sub-Components ── */

function SectionTitle({ icon: Icon, label, title }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-1">
        <Icon size={14} className="text-gold" />
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">{label}</span>
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl text-emerald-dark">{title}</h2>
      <div className="w-16 h-1 bg-gold rounded-full mt-2" />
    </div>
  );
}

function InfoChip({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-emerald-dark/5 shadow-sm text-sm text-charcoal/70">
      <Icon size={14} className="text-gold shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function NearbyCard({ name, icon: Icon, linkText, href }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-emerald-dark/5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-dark/5 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-emerald-dark" />
        </div>
        <h4 className="font-heading text-sm font-semibold text-emerald-dark">{name}</h4>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:text-emerald-dark transition-colors shrink-0"
      >
        {linkText}
        <ExternalLink size={12} />
      </a>
    </div>
  );
}
