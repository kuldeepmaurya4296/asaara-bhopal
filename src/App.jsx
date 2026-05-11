import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MasjidPage from './pages/MasjidPage';
import UmoorPage from './pages/UmoorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/masjid/:slug" element={<MasjidPage />} />
        <Route path="/umoor/:slug" element={<UmoorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
