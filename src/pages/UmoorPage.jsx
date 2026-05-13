import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Target, Eye, Users, Award, TrendingUp, Image as ImageIcon, Rocket, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { getUmoorBySlug } from '../data/umoor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const SectionTitle = ({ children, icon: Icon, subtitle, light = false, align = 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'flex flex-col items-center text-center' : ''}`}>
    <div className={`flex items-center gap-4 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
      <div className={`p-3 rounded-2xl ${light ? 'bg-white/10 text-gold' : 'bg-emerald-dark/5 text-emerald-dark'}`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight ${light ? 'text-white' : 'text-emerald-dark'}`}>
        {children}
      </h2>
    </div>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-2xl font-light ${light ? 'text-white/70' : 'text-charcoal/60'}`}>
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-24 rounded-full mt-6 ${light ? 'bg-gradient-to-r from-gold to-transparent' : 'bg-gradient-to-r from-gold to-transparent'}`} />
  </div>
);

const PremiumCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className={`bg-white rounded-[2rem] shadow-sm border border-emerald-dark/5 hover:shadow-2xl hover:border-gold/30 transition-all duration-500 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

export default function UmoorPage() {
  const { slug } = useParams();
  const umoor = getUmoorBySlug(slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!umoor) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
        <h1 className="font-heading text-3xl text-emerald-dark mb-4">Service Not Found</h1>
        <Link to="/" className="text-gold hover:text-emerald-dark transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans selection:bg-gold/30">
      <SEO title={umoor.title} description={umoor.description.substring(0, 160)} image={umoor.image} />
      <Header />

      <main className="flex-grow">
        
        {/* Modern Hero Section */}
        <section className="bg-emerald-dark pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold/5 rounded-full -mr-[20rem] -mt-[20rem] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gold/5 rounded-full -ml-[20rem] -mb-[20rem] blur-3xl" />

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-5 py-2 bg-white/5 backdrop-blur-md text-gold text-xs font-bold tracking-[0.3em] uppercase rounded-full mb-8 border border-white/10 shadow-xl">
                {umoor.subtitle}
              </span>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
                {umoor.title}
              </h1>

              <nav className="flex items-center justify-center gap-3 text-sm font-medium text-white/50 tracking-wide uppercase">
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                <ChevronRight size={14} className="text-white/20" />
                <span className="text-gold">{umoor.title}</span>
              </nav>
            </motion.div>
          </div>
        </section>

        {/* Overview & Image Section */}
        <section className="py-24 bg-cream relative z-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Refined Image Presentation */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gold/10 rounded-[2.5rem] blur-2xl opacity-50" />
                <div className="relative rounded-[2rem] p-4 bg-white shadow-xl border border-emerald-dark/5">
                  <div className="rounded-[1.5rem] overflow-hidden bg-cream">
                    <img
                      src={umoor.image}
                      alt={umoor.title}
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right: Description & Responsibilities */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                <div>
                  <SectionTitle icon={FileText}>Department Overview</SectionTitle>
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-light">
                    {umoor.description}
                  </p>
                </div>

                {umoor.responsibilities && (
                  <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-emerald-dark/5">
                    <h4 className="font-heading text-xl text-emerald-dark mb-8 flex items-center gap-3">
                      <Target size={20} className="text-gold" />
                      Key Responsibilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                      {umoor.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-charcoal/80 group">
                          <span className="mt-1 w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-150 transition-transform duration-300" />
                          <span className="text-base font-medium leading-tight">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Immersive Section */}
        {(umoor.vision || umoor.mission) && (
          <section className="py-24 bg-emerald-dark relative overflow-hidden text-white">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {umoor.vision && (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -top-10 -left-6 text-9xl text-gold/10 font-serif leading-none">"</div>
                    <div className="relative z-10">
                      <h3 className="font-heading text-2xl text-gold mb-6 tracking-wide flex items-center gap-3">
                        <Eye size={24} /> Vision
                      </h3>
                      <p className="text-2xl md:text-3xl leading-relaxed font-light text-white/90 italic">
                        {umoor.vision}
                      </p>
                    </div>
                  </motion.div>
                )}
                
                {umoor.mission && (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute -top-10 -left-6 text-9xl text-white/5 font-serif leading-none">"</div>
                    <div className="relative z-10">
                      <h3 className="font-heading text-2xl text-white mb-6 tracking-wide flex items-center gap-3">
                        <Target size={24} className="text-gold" /> Mission
                      </h3>
                      <p className="text-xl md:text-2xl leading-relaxed font-light text-white/70">
                        {umoor.mission}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Highlights Section */}
        {umoor.highlights && umoor.highlights.length > 0 && (
          <section className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle icon={TrendingUp} subtitle="Key areas of focus and operational metrics" align="center">
                Strategic Highlights
              </SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {umoor.highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <PremiumCard className="p-10 h-full flex flex-col group border-t-4 border-t-transparent hover:border-t-gold">
                      <div className="w-12 h-12 rounded-full bg-emerald-dark/5 flex items-center justify-center text-emerald-dark mb-8 group-hover:scale-110 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">
                        <span className="font-heading text-xl">{idx + 1}</span>
                      </div>
                      <h4 className="font-heading text-xl text-emerald-dark mb-4">
                        {item.title}
                      </h4>
                      <p className="text-base text-charcoal/60 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </PremiumCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Members Section - Modern Team Grid */}
        {umoor.members && umoor.members.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle icon={Users} subtitle="The dedicated leadership driving our mission forward" align="center">
                Committee Members
              </SectionTitle>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
                {umoor.members.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-cream group-hover:border-gold transition-colors duration-300 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-heading text-xl text-emerald-dark mb-2">{member.name}</h4>
                    <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
                    {member.contact && (
                      <a
                        href={`tel:${member.contact}`}
                        className="inline-flex items-center gap-2 text-charcoal/50 hover:text-emerald-dark transition-colors text-sm bg-cream px-4 py-1.5 rounded-full"
                      >
                        <Phone size={12} className="text-gold" />
                        {member.contact}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Achievements & Future Goals */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Achievements */}
              {umoor.achievements && umoor.achievements.length > 0 && (
                <div>
                  <SectionTitle icon={Award}>Key Achievements</SectionTitle>
                  <div className="space-y-5 mt-8">
                    {umoor.achievements.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-emerald-dark/5 hover:shadow-lg transition-all group"
                      >
                        <div className="mt-1 w-8 h-8 rounded-full bg-emerald-dark/5 flex items-center justify-center text-emerald-dark shrink-0 group-hover:bg-emerald-dark group-hover:text-white transition-colors">
                          <CheckCircle2 size={18} />
                        </div>
                        <span className="text-charcoal/80 text-lg leading-relaxed font-light">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Future Goals */}
              {umoor.futureGoals && umoor.futureGoals.length > 0 && (
                <div>
                  <SectionTitle icon={Rocket}>Future Goals</SectionTitle>
                  <div className="space-y-5 mt-8">
                    {umoor.futureGoals.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-emerald-dark/5 hover:shadow-lg transition-all group"
                      >
                        <div className="mt-1 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-colors">
                          <ChevronRight size={18} />
                        </div>
                        <span className="text-charcoal/80 text-lg leading-relaxed font-light">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {umoor.gallery && umoor.gallery.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle icon={ImageIcon} subtitle="Visual glimpses of our operations and initiatives" align="center">
                Media Gallery
              </SectionTitle>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {umoor.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="aspect-square rounded-[2rem] overflow-hidden shadow-sm group relative cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-emerald-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ImageIcon size={28} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back Action */}
        <section className="py-20 bg-cream border-t border-emerald-dark/5">
          <div className="max-w-7xl mx-auto px-4 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-dark text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-emerald transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <ArrowLeft size={18} /> Back to All Services
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
