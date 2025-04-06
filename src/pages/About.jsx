import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';

function About() {
  const { darkMode, toggleTheme } = useTheme();
  const [showThemeDropdown, setShowThemeDropdown] = React.useState(false);

  const teamMembers = [
    { name: 'Pratik Avhad', role: 'Worked on backend development and system optimization.', image: '/images/priya.jpg' },
    { name: 'Priyanka Bhandari', role: 'Designed the interactive learning modules and user-friendly website interface.', image: '/images/priya.jpg' },
    { name: 'Swarup Kakade', role: ' Developed real-time sign language detection and NLP integration.', image: '/images/priya.jpg' },
  ];

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
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">About SignWave</h1>
        <p className="text-center mb-12 text-lg">Our mission, vision, and the technology behind our sign language interpreter</p>

        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our <span className="text-blue-600">Mission</span></h2>
            <p className="text-lg mb-8">
            Our mission is to bridge the communication gap by making Indian Sign Language (ISL) accessible through technology. We aim to empower individuals with real-time sign detection, interactive learning, and a supportive community, ensuring inclusivity and ease of communication for all.            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p>We ensure equal access to Indian Sign Language learning through real-time translation, interactive practice tools, and inclusive communication features.</p>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p>Our platform offers structured lessons, real-time feedback, and hands-on practice to help users master Indian Sign Language easily.</p>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>We leverage AI, NLP, and computer vision to provide real-time sign detection, video call integration, and interactive learning experiences.</p>
              </div>
            </div>
          </section>

          {/* UPDATED TEAM SECTION WITH IMAGES */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${
                    darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                  } shadow-lg text-center`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm opacity-75">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-8">Have questions or suggestions? We'd love to hear from you.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Email: priyanka.224657201@vcet.edu.in
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;
