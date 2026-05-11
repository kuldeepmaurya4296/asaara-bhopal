import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import MasjidSection from '../components/MasjidSection';
import AsharaSection from '../components/AsharaSection';
import CountdownTimer from '../components/CountdownTimer';
import ServicesGrid from '../components/ServicesGrid';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FadeIn from '../components/animations/FadeIn';

export default function HomePage() {
  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <Header />
      <main>
        <section id="home"><HeroSlider /></section>
        <FadeIn><section id="about"><AboutSection /></section></FadeIn>
        <FadeIn><section id="masjids"><MasjidSection /></section></FadeIn>
        <FadeIn><section id="relay"><AsharaSection /></section></FadeIn>
        <FadeIn><section id="countdown"><CountdownTimer /></section></FadeIn>
        <FadeIn><section id="services"><ServicesGrid /></section></FadeIn>
        <FadeIn><section id="gallery"><Gallery /></section></FadeIn>
        <FadeIn><section id="faq"><FAQ /></section></FadeIn>
      </main>
      <footer id="footer"><Footer /></footer>
    </div>
  );
}
