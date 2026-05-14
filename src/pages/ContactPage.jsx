import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <SEO title="Contact Us" description="Get in touch with the Bhopal Ashara Mubaraka Relay Centre for any queries regarding services, accommodations, and support." />
      <Header />

      <main className="flex-grow pb-20">
        {/* Page Header */}
        <div ref={heroRef} className="bg-emerald-dark py-16 px-4 relative overflow-hidden">
          {/* Background pattern */}
          <motion.div style={{ y }} className="absolute inset-0 opacity-10 pointer-events-none w-full h-[150%] -top-[25%]">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <pattern id="contact-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 Q10 0 20 20 T40 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#contact-pattern)" />
            </svg>
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <FadeIn direction="up">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Get In Touch</span>
              <h1 className="font-heading text-4xl sm:text-5xl text-cream mt-2 mb-4">
                Contact Us
              </h1>
              <p className="text-cream/80 max-w-2xl mx-auto">
                We are here to assist you with any queries regarding Ashara Mubaraka services, accommodations, and general support.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info (Left) */}
            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-10">
                <div>
                  <h3 className="font-heading text-2xl text-emerald-dark mb-6">Reach Out to Us</h3>
                  <p className="text-charcoal/80 leading-relaxed mb-8">
                    Our dedicated team at the Bhopal Ashara Mubaraka Relay Centre is available to answer your questions and provide support for all community events and services.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-dark">Location</h4>
                      <p className="text-charcoal/70 mt-1">Bhopal Jamaat Relay Centre,<br />Alibagh, Bhopal, Madhya Pradesh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-dark">Phone</h4>
                      <a href="tel:+918982675004" className="text-charcoal/70 mt-1 hover:text-gold transition-colors block">
                        +91 89826 75004
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-dark">Email</h4>
                      <a href="mailto:info@asharaMubaraka.in" className="text-charcoal/70 mt-1 hover:text-gold transition-colors block">
                        info@asharaMubaraka.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form (Right) */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-emerald-dark/5 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="font-heading text-2xl text-emerald-dark mb-6">Send a Message</h3>
                
                {submitted ? (
                  <div className="bg-emerald-dark/10 border border-emerald-dark/20 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-emerald-dark text-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={24} />
                    </div>
                    <h4 className="font-heading text-xl text-emerald-dark mb-2">Message Sent!</h4>
                    <p className="text-charcoal/80 text-sm">
                      Thank you for contacting us. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal/80 mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="Mufaddal Bhai"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="mufaddal@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-charcoal/80 mb-1.5">Subject</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-1.5">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-dark text-gold font-medium py-3.5 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
