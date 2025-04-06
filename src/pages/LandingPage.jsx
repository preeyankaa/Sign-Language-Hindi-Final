import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function LandingPage() {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'}`}>
      
      <main className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-blue-600">SignWave</h1>
          <h2 className="text-4xl font-bold mb-6">Hindi Sign Language Interpreter</h2>
          <p className="text-xl mb-8 opacity-80">
            Breaking barriers through technology. Learn, practice, and communicate with our 3D sign language interpreter.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;