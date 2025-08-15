import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['Home', 'About', 'Services', 'Contact'];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 shadow-lg'
          : 'bg-gradient-to-r from-purple-600/40 via-pink-500/40 to-blue-500/40'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.h1
          className={`text-3xl font-bold tracking-wide ${
            isScrolled ? 'text-purple-700' : 'text-white'
          }`}
          whileHover={{ scale: 1.08 }}
        >
          BadrDev
        </motion.h1>

        <nav className="flex items-center gap-6">
          {navLinks.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-lg font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-purple-600 transition-colors duration-300`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
