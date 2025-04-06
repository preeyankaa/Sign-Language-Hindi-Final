import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Detect() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'} p-8`}>
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
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>
        </p>
      </div>
    </div>
  );
}

export default Detect;