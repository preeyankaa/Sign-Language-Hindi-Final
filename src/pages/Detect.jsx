import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';

function Detect() {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'}`}>
      <nav className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-blue-600">SignWave</h1>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link to="/detect" className="hover:text-blue-600 transition-colors">Detect</Link>
              <Link to="/learn" className="hover:text-blue-600 transition-colors">Learn</Link>
              <Link to="/practice" className="hover:text-blue-600 transition-colors">Practice</Link>
              <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
            </div>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowThemeDropdown(!showThemeDropdown)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center gap-2`}
            >
              {darkMode ? <FaMoon className="text-yellow-400" /> : <FaSun className="text-yellow-500" />}
              <span className="text-sm">Theme</span>
              <FaChevronDown className={`transition-transform ${showThemeDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showThemeDropdown && (
              <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button
                    onClick={() => {
                      if (darkMode) toggleTheme();
                      setShowThemeDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} flex items-center gap-2`}
                  >
                    <FaSun className="text-yellow-500" />
                    Light Mode
                  </button>
                  <button
                    onClick={() => {
                      if (!darkMode) toggleTheme();
                      setShowThemeDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} flex items-center gap-2`}
                  >
                    <FaMoon className="text-yellow-400" />
                    Dark Mode
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">Sign Language Detection</h1>
        <p className="text-center mb-12 text-lg">Detect and translate sign language in real-time with our advanced recognition system</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="text-center mb-4">
              <span className="text-4xl mb-4">हि</span>
              
              <h2 className="text-2xl font-semibold">Hindi Sign Language</h2>
            </div>
            <p className="text-center mb-6">Detect and interpret Indian Sign Language (ISL) gestures and phrases</p>
            <button 
              onClick={() => navigate('/detect-camera')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Launch Detector
            </button>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="text-center mb-4">
              <span className="text-4xl mb-4">En</span>
              <h2 className="text-2xl font-semibold">English Sign Language</h2>
            </div>
            <p className="text-center mb-6">Detect and interpret American Sign Language (ASL) gestures and phrases</p>
            <button 
              onClick={() => navigate('/detect-camera')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Launch Detector
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">Change Language: 
            <select className={`ml-2 px-2 py-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Detect;