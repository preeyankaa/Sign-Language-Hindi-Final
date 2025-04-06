import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaStar, FaCheck, FaPlay, FaTrophy, FaStopwatch, FaGraduationCap } from 'react-icons/fa';

function Practice() {
  const { darkMode } = useTheme();

  const exercises = [
    {
      title: 'Basic Greetings',
      difficulty: 'Beginner',
      completed: 8,
      total: 10,
      progress: 80,
      icon: FaGraduationCap,
      color: 'green',
    },
    {
      title: 'Numbers 1-20',
      difficulty: 'Beginner',
      completed: 15,
      total: 20,
      progress: 75,
      icon: FaGraduationCap,
      color: 'green',
    },
    {
      title: 'Common Phrases',
      difficulty: 'Intermediate',
      completed: 5,
      total: 15,
      progress: 33,
      icon: FaStopwatch,
      color: 'yellow',
    },
    {
      title: 'Fingerspelling',
      difficulty: 'Advanced',
      completed: 12,
      total: 26,
      progress: 46,
      icon: FaTrophy,
      color: 'red',
    },
  ];

  const challenges = [
    {
      title: 'Daily Challenge',
      description: 'Practice 5 new signs today',
      reward: '50 points',
      completed: false,
      icon: FaStar,
    },
    {
      title: 'Speed Test',
      description: 'Complete 10 signs in 60 seconds',
      reward: '100 points',
      completed: true,
      icon: FaStopwatch,
    },
    {
      title: 'Perfect Streak',
      description: 'Get 5 perfect scores in a row',
      reward: '200 points',
      completed: false,
      icon: FaTrophy,
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'} p-8`}>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">Practice & Test Your Skills</h1>
      <p className="text-center mb-12 text-lg">Master sign language through interactive exercises and challenges</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" />
            Practice Exercises
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {exercises.map((exercise, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-all hover:scale-105 cursor-pointer`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <exercise.icon className={`text-${exercise.color}-500 text-xl`} />
                  <h3 className="font-semibold text-lg">{exercise.title}</h3>
                </div>
                <p className="text-sm opacity-75 mb-4">{exercise.difficulty}</p>
                <div className="mb-4">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-2 bg-${exercise.color}-500 rounded-full transition-all duration-500`}
                      style={{ width: `${exercise.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <p>{exercise.completed}/{exercise.total} completed</p>
                    <p>{exercise.progress}%</p>
                  </div>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <FaPlay className="text-sm" />
                  Continue
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            Daily Challenges
          </h2>
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-all hover:scale-105 cursor-pointer`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <challenge.icon className="text-yellow-400" />
                      <h3 className="font-semibold">{challenge.title}</h3>
                    </div>
                    <p className="text-sm opacity-75">{challenge.description}</p>
                    <div className="flex items-center mt-2">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm">{challenge.reward}</span>
                    </div>
                  </div>
                  {challenge.completed ? (
                    <div className="bg-green-600 text-white p-2 rounded-full">
                      <FaCheck />
                    </div>
                  ) : (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Start
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <FaTrophy className="text-yellow-400" />
              Your Progress
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Total Points:</span>
                <span className="font-bold">1,250</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Completed Challenges:</span>
                <span className="font-bold">8/15</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Current Streak:</span>
                <span className="font-bold">5 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;