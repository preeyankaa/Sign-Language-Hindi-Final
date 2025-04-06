import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaChevronDown, FaSearch, FaArrowRight, FaPlay, FaBookOpen, FaStar } from 'react-icons/fa';

function Learn() {
  const { darkMode, toggleTheme } = useTheme();
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      title: 'Greetings',
      description: 'Learn common greeting signs',
      signs: 8,
      level: 'Beginner',
      duration: '15 mins',
    },
    {
      title: 'Numbers',
      description: 'Master numbers from 1-20',
      signs: 20,
      level: 'Beginner',
      duration: '30 mins',
    },
    {
      title: 'Daily Conversations',
      description: 'Essential phrases for daily use',
      signs: 15,
      level: 'Intermediate',
      duration: '45 mins',
    },
    {
      title: 'Alphabet',
      description: 'Learn to fingerspell the alphabet',
      signs: 52,
      level: 'Advanced',
      duration: '1 hour',
    },
  ];

  const popularSearches = [
    { text: 'नमस्ते', translation: '(Hello)' },
    { text: 'धन्यवाद', translation: '(Thank you)' },
    { text: 'हाँ', translation: '(Yes)' },
    { text: 'नहीं', translation: '(No)' },
    { text: 'कृपया', translation: '(Please)' },
    { text: 'मैं', translation: '(I/Me)' },
    { text: 'तुम', translation: '(You)' },
    { text: 'हम', translation: '(We)' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'}`}>
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">Interactive Sign Language Tutorials</h1>
        <p className="text-center mb-12 text-lg">Type any word or phrase to see the corresponding sign, or choose from our featured lessons to start learning.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search signs..."
                className={`w-full p-3 pr-12 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } border ${darkMode ? 'border-gray-600' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaBookOpen className="text-blue-600" />
              Featured Lessons
            </h2>
            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedLesson(lesson)}
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                  } shadow-lg cursor-pointer transform transition-all hover:scale-105`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{lesson.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      lesson.level === 'Beginner' ? 'bg-green-500' :
                      lesson.level === 'Intermediate' ? 'bg-yellow-500' :
                      'bg-red-500'
                    } text-white`}>{lesson.level}</span>
                  </div>
                  <p className="text-sm opacity-75 mb-2">{lesson.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{lesson.signs} signs • {lesson.duration}</span>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      Start <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              Popular Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                  } shadow transform transition-all hover:scale-105`}
                >
                  {search.text} {search.translation}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-6xl mb-4">हाँ</div>
              <p className="text-xl mb-8">Step 2 of 3</p>
              <div className="relative">
                <div className="w-96 h-96 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-8 overflow-hidden">
                  {/* Video or animation placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transform transition-all hover:scale-110">
                      <FaPlay className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Previous</button>
                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Next</button>
              </div>
            </div>
          </div>
          </div>
    </div>
  );
}

export default Learn;