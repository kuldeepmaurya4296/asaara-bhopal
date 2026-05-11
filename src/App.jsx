import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MasjidPage from './pages/MasjidPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/masjid/:slug" element={<MasjidPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
