import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaLanguage, FaBook, FaChartLine, FaInfoCircle, FaChevronDown } from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  const features = [
    {
      title: 'Sign Language Detection',
      description: 'Detect and translate sign language in real-time with our advanced recognition system.',
      icon: <FaLanguage className="text-3xl" />,
      action: 'Start Detection',
      path: '/detect'
    },
    {
      title: 'Learn Sign Language',
      description: 'Interactive tutorials to learn sign language through guided lessons and examples.',
      icon: <FaBook className="text-3xl" />,
      action: 'Start Learning',
      path: '/learn'
    },
    {
      title: 'Practice & Test',
      description: 'Test your sign language skills with interactive exercises and fingerspelling practice.',
      icon: <FaChartLine className="text-3xl" />,
      action: 'Start Practice',
      path: '/practice'
    },
    {
      title: 'About SignWave',
      description: 'Learn about our mission to make sign language accessible to everyone.',
      icon: <FaInfoCircle className="text-3xl" />,
      action: 'Learn More',
      path: '/about'
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'}`}>
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

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-2">Sign Language Interpreter</h2>
        <p className="text-center mb-8 opacity-80">Explore our comprehensive suite of sign language tools</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate(feature.path)}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              } shadow-lg transition-all cursor-pointer transform hover:scale-105 hover:shadow-xl`}
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-80 mb-4">{feature.description}</p>
              <button 
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {feature.action}
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className={`mt-auto py-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-blue-600">SignWave</h3>
              <p className="text-sm opacity-75">Breaking communication barriers with 3D sign language technology.</p>
            </div>
            <div className="flex space-x-4">
              <select 
                className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
          </div>
          <div className="mt-4 text-center text-sm opacity-75">
            © 2024 SignWave. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;