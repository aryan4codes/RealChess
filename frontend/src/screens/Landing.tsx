import React from 'react';
import { FaChessKnight, FaUser, FaTrophy, FaChessBoard } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaChessKnight className="text-3xl text-yellow-400" />
          <span className="text-2xl font-bold">RealChess</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Play</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Learn</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Tournaments</a>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 rounded bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors">
            Register
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master the Game of <span className="text-yellow-400">Kings</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Play chess online, improve your skills, and compete with players from around the world on RealChess.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 rounded-lg bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition-colors text-lg">
              Play Now
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-white hover:border-yellow-400 hover:text-yellow-400 transition-colors text-lg">
              Learn Chess
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Chess board" 
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose <span className="text-yellow-400">RealChess</span></h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-yellow-400/20 transition-all">
              <FaChessBoard className="text-5xl text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Play Anywhere</h3>
              <p className="text-gray-300">
                Enjoy seamless chess gameplay on any device. Play on desktop, tablet, or mobile with our responsive design.
              </p>
            </div>
            
            <div className="bg-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-yellow-400/20 transition-all">
              <FaUser className="text-5xl text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Skilled Opponents</h3>
              <p className="text-gray-300">
                Match with players at your skill level with our advanced matchmaking system for a challenging experience.
              </p>
            </div>
            
            <div className="bg-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-yellow-400/20 transition-all">
              <FaTrophy className="text-5xl text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Tournaments</h3>
              <p className="text-gray-300">
                Participate in daily and weekly tournaments to test your skills and win exclusive rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of chess enthusiasts and start your journey to becoming a chess master today.
          </p>
          <button className="px-8 py-4 rounded-lg bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors text-lg">
            Start Playing Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <FaChessKnight className="text-2xl text-yellow-400" />
              <span className="text-xl font-bold">RealChess</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RealChess. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
