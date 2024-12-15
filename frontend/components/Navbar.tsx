import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.h1
          className={`text-3xl font-bold ${
            isScrolled ? 'text-purple-600' : 'text-white'
          }`}
          whileHover={{ scale: 1.05 }}
        >
           BadrDav
        </motion.h1>
        <nav className="space-x-6">
          {['Home', 'About', 'Services'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-lg ${
                isScrolled ? 'text-gray-600' : 'text-white'
              } hover:text-purple-600 transition duration-300`}
              whileHover={{ scale: 1.1 }}
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

