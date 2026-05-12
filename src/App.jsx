import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MasjidPage from './pages/MasjidPage';
import UmoorPage from './pages/UmoorPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AccommodationsPage from './pages/AccommodationsPage';
import TransportPage from './pages/TransportPage';
import RelayZonesPage from './pages/RelayZonesPage';
import VolunteersPage from './pages/VolunteersPage';
import SmoothScroll from './components/SmoothScroll';
import ScrollToHashElement from './components/ScrollToHashElement';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/masjid/:slug" element={<MasjidPage />} />
          <Route path="/umoor/:slug" element={<UmoorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/accommodations" element={<AccommodationsPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/relay-zones" element={<RelayZonesPage />} />
          <Route path="/volunteers" element={<VolunteersPage />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
