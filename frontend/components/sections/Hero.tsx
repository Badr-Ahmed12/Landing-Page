import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600">
      <motion.div 
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-7xl font-extrabold text-white mb-4">Welcome to Our Modern Landing Page</h1>
        <p className="mt-4 text-xl text-white mb-8">Build stunning pages with React and Tailwind CSS.</p>
        <motion.button 
          className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Hero;

