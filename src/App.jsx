import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MasjidPage from './pages/MasjidPage';
import UmoorPage from './pages/UmoorPage';
import ContactPage from './pages/ContactPage';
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
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
