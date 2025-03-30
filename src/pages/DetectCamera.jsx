import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaChevronDown, FaMicrophone, FaCamera, FaCog } from 'react-icons/fa';

function DetectCamera() {
  const { darkMode, toggleTheme } = useTheme();
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [detectedText, setDetectedText] = useState('');
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  React.useEffect(() => {
    startCamera();
    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start detection
      setDetectedText('Detecting signs...');
    } else {
      // Stop detection
      setDetectedText('');
    }
  };

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
              <Link to="/assistant" className="hover:text-blue-600 transition-colors">Assistant</Link>
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
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className={`aspect-video rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>

              <div className="mt-4 flex justify-center space-x-4">
                <button
                  onClick={toggleRecording}
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                    isRecording 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  <FaCamera />
                  {isRecording ? 'Stop Detection' : 'Start Detection'}
                </button>
                <button className="p-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-white">
                  <FaCog />
                </button>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h2 className="text-xl font-semibold mb-4">Detected Signs</h2>
                <div className="h-[400px] overflow-y-auto mb-4">
                  <p className="text-lg">{detectedText || 'No signs detected yet...'}</p>
                </div>
                <button className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2">
                  <FaMicrophone />
                  Speak Detection
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetectCamera;