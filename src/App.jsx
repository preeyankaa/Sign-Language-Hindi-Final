import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Detect from './pages/Detect';
import DetectCamera from './pages/DetectCamera';
import About from './pages/About';
import Learn from './pages/Learn';
import Practice from './pages/Practice';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex">
        <Navbar />
        <main className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detect" element={<Detect />} />
            <Route path="/detect-camera" element={<DetectCamera />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;