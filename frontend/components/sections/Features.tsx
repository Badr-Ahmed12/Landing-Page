import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaMobile, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const features = [
  { icon: <FaRocket />, name: 'Fast Performance', description: 'Lightning-fast load times and smooth interactions.' },
  { icon: <FaMobile />, name: 'Responsive Design', description: 'Looks great on all devices, from mobile to desktop.' },
  { icon: <FaLaptopCode />, name: 'Clean Code', description: 'Well-structured and maintainable codebase.' },
  { icon: <FaChartLine />, name: 'SEO Optimized', description: 'Built with search engines in mind for better visibility.' },
];

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

