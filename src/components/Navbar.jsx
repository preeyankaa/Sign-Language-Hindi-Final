import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaHome, FaTachometerAlt, FaLanguage, FaBook, FaDumbbell, FaInfoCircle } from 'react-icons/fa';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/dashboard', label: 'Dashboard', icon: FaTachometerAlt },
    { path: '/detect', label: 'Detect', icon: FaLanguage },
    { path: '/learn', label: 'Learn', icon: FaBook },
    { path: '/practice', label: 'Practice', icon: FaDumbbell },
    { path: '/about', label: 'About', icon: FaInfoCircle },
  ];

  return (
    <nav className={`fixed left-0 top-0 h-screen w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg flex flex-col`}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-8">SignWave</h1>
        
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                darkMode 
                  ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              <item.icon className="text-lg" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-auto p-6">
        <button
          onClick={toggleTheme}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            darkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}
        >
          {darkMode ? <FaMoon className="text-yellow-400" /> : <FaSun className="text-yellow-500" />}
          <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;