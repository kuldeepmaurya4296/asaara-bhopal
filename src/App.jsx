import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import MasjidSection from './components/MasjidSection';
import AsharaSection from './components/AsharaSection';
import CountdownTimer from './components/CountdownTimer';
import ServicesGrid from './components/ServicesGrid';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <AnnouncementBar />
      <Header />
      <Navbar />
      <main>
        <section id="home"><HeroSlider /></section>
        <section id="about"><AboutSection /></section>
        <section id="masjids"><MasjidSection /></section>
        <section id="relay"><AsharaSection /></section>
        <section id="countdown"><CountdownTimer /></section>
        <section id="services"><ServicesGrid /></section>
        <section id="gallery"><Gallery /></section>
        <section id="faq"><FAQ /></section>
      </main>
      <footer id="footer"><Footer /></footer>
    </div>
  );
}

export default App;
