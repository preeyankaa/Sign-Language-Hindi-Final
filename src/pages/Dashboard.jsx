import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaLanguage, FaBook, FaChartLine, FaInfoCircle } from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const features = [
    {
      title: 'Sign Language Detection',
      description: 'Detect and translate sign language in real-time with our advanced recognition system.',
      icon: <FaLanguage className="text-3xl" />,
      action: 'Start Detection',
      path: '/detect'
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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'} p-8`}>
      <h2 className="text-3xl font-bold text-center mb-2">Sign Language Interpreter</h2>
      <p className="text-center mb-8 opacity-80">Explore our comprehensive suite of sign language tools</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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