import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-700"
    >
      {/* Shapes / Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-400 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse delay-300"></div>

      {/* Content */}
      <motion.div
        className="text-center relative z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
          Welcome to Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-500">Modern</span> Landing Page
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Build stunning, responsive pages faster with React + Tailwind CSS.
        </p>

        <motion.button
          className="mt-10 px-10 py-4 bg-white text-purple-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-300 transition-all duration-300"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default Hero;
