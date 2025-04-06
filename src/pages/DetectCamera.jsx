import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMicrophone, FaCamera, FaCog } from 'react-icons/fa';

function DetectCamera() {
  const { darkMode } = useTheme();
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

  useEffect(() => {
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
      setDetectedText('Detecting signs...');
    } else {
      setDetectedText('');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'} p-8`}>
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
    </div>
  );
}

export default DetectCamera;