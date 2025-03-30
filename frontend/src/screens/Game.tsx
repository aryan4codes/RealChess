import React from 'react';
import { ChessBoard } from '../components/ChessBoard';
import { PlayOptions } from '../components/PlayOptions';
import { FaChessKnight, FaPlus, FaChessBoard, FaUsers } from 'react-icons/fa';

export const Game: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaChessKnight className="text-3xl text-green-500" />
          <span className="text-2xl font-bold">RealChess</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <FaPlus className="text-xl" />
            <span className="text-sm">New Game</span>
          </div>
          <div className="flex flex-col items-center">
            <FaChessBoard className="text-xl" />
            <span className="text-sm">Games</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-xl" />
            <span className="text-sm">Players</span>
          </div>
        </div>
      </header>

      {/* Game Area */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row">
        {/* Left sidebar with navigation */}
        <div className="md:w-1/6 mb-6 md:mb-0 md:pr-6">
          {/* <nav className="bg-gray-800 rounded-lg">
            <ul>
              <li className="p-3 flex items-center hover:bg-gray-700 cursor-pointer">
                <FaChessKnight className="mr-3 text-yellow-400" />
                <span>Play</span>
              </li>
              <li className="p-3 flex items-center hover:bg-gray-700 cursor-pointer border-t border-gray-700">
                <span className="mr-3">🧩</span>
                <span>Puzzles</span>
              </li>
              <li className="p-3 flex items-center hover:bg-gray-700 cursor-pointer border-t border-gray-700">
                <span className="mr-3">📚</span>
                <span>Learn</span>
              </li>
              <li className="p-3 flex items-center hover:bg-gray-700 cursor-pointer border-t border-gray-700">
                <span className="mr-3">👁️</span>
                <span>Watch</span>
              </li>
              <li className="p-3 flex items-center hover:bg-gray-700 cursor-pointer border-t border-gray-700">
                <span className="mr-3">📰</span>
                <span>News</span>
              </li>
              <li className="p-3 flex items-center hover:bg-gray-700 cursor-pointer border-t border-gray-700">
                <span className="mr-3">👥</span>
                <span>Social</span>
              </li>
              <li className="p-3 flex items-center hover:bg-gray-700 cursor-pointer border-t border-gray-700">
                <span className="mr-3">•••</span>
                <span>More</span>
              </li>
            </ul>
          </nav> */}
          
          <div className="mt-4">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
            />
          </div>
          
          <div className="mt-146 space-y-2">
            <button className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg">
              Sign Up
            </button>
            <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              Log In
            </button>
          </div>
        </div>

        {/* Main chess board area */}
        <div className="md">
          <ChessBoard />
        </div>

        {/* Right sidebar - Play options */}
        <div className="md:w-1/4 mt-6 md:mt-0 md:pl-6">
          <PlayOptions />
          
          <div className="mt-6 text-center text-gray-400">
            <div className="flex justify-between">
              <span>players PLAYING</span>
              <span>no of games GAMES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
