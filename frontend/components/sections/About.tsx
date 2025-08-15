import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-100 via-purple-50 to-pink-50"
    >
      {/* Decorative shapes */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-200 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-800"
          >
            About Us
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg md:text-2xl leading-relaxed text-gray-600 max-w-3xl mx-auto"
          >
            We are a team of passionate developers and designers dedicated to
            creating exceptional digital experiences. Our mission is to help
            businesses thrive in the digital world through innovative solutions
            and cutting-edge technologies.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
