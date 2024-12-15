import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. Our mission is to help businesses thrive in the digital world through innovative solutions and cutting-edge technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

