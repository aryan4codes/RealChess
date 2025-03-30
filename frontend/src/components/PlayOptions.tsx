import React from 'react';
import { FaClock, FaHandshake, FaTrophy } from 'react-icons/fa';

export const PlayOptions: React.FC = () => {
  return (
    <div className="play-options-container">
      {/* Time control selector */}
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="time-selector flex items-center justify-between p-4 bg-gray-700 rounded-lg mb-4">
          <div className="flex items-center">
            <FaClock className="text-green-500 mr-2" />
            <span className="text-lg">10 min</span>
          </div>
          <div className="dropdown-icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        <button className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl rounded-lg transition-colors">
          Play
        </button>
      </div>
      
      {/* Custom button */}
      <div className="custom-button flex items-center justify-between p-4 bg-gray-800 rounded-lg mb-4">
        <span>Custom</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {/* Additional options */}
      <div className="bg-gray-800 rounded-lg">
        <div className="flex items-center p-4 hover:bg-gray-700 rounded-t-lg cursor-pointer">
          <div className="mr-3 text-yellow-500">
            <FaHandshake className="text-2xl" />
          </div>
          <span className="text-lg">Play a Friend</span>
        </div>
        
        <div className="flex items-center p-4 hover:bg-gray-700 rounded-b-lg cursor-pointer border-t border-gray-700">
          <div className="mr-3 text-yellow-500">
            <FaTrophy className="text-2xl" />
          </div>
          <span className="text-lg">Tournaments</span>
        </div>
      </div>
    </div>
  );
};
