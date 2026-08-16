import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ExperimentPage } from './pages/ExperimentPage';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiment/:id" element={<ExperimentPage />} />
          <Route path="*" element={
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>404 — Page not found</p>
              <a href="/" className="btn btn--outline">← Return Home</a>
            </div>
          } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
